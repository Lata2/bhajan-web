import { NextRequest, NextResponse } from "next/server";

// The CDN that actually hosts the video files. Only the "path" after this
// base needs to be passed in as a query param — this keeps proxied URLs short
// and stops people from using this route to proxy arbitrary domains.
const CDN_BASE = "https://dxc62cy2vpupe.cloudfront.net";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");

  if (!path) {
    return NextResponse.json({ error: "Missing path param" }, { status: 400 });
  }

  const targetUrl = `${CDN_BASE}/${path}`;

  let upstream: Response;
  try {
    upstream = await fetch(targetUrl, {
      // Range header lets segment seeking work correctly.
      headers: req.headers.get("range")
        ? { range: req.headers.get("range") as string }
        : undefined,
    });
  } catch {
    return NextResponse.json({ error: "Upstream fetch failed" }, { status: 502 });
  }

  if (!upstream.ok && upstream.status !== 206) {
    return NextResponse.json(
      { error: "Upstream returned an error", status: upstream.status },
      { status: upstream.status }
    );
  }

  // The manifest lists segment/sub-playlist filenames relative to itself.
  // Rewrite every one of those lines to go back through this same proxy,
  // otherwise the browser would try to fetch them directly from CloudFront
  // again and hit the same CORS wall.
  if (path.endsWith(".m3u8")) {
    const text = await upstream.text();
    const basePath = path.includes("/") ? path.substring(0, path.lastIndexOf("/")) : "";

    const rewritten = text
      .split("\n")
      .map((line) => {
        const trimmed = line.trim();

        // Keep blank lines and #EXT tags as-is (tags that reference a URI,
        // like #EXT-X-KEY, are intentionally left alone here since none of
        // our current streams use them).
        if (!trimmed || trimmed.startsWith("#")) return line;

        const segmentPath = trimmed.startsWith("http")
          ? trimmed.replace(`${CDN_BASE}/`, "")
          : basePath
          ? `${basePath}/${trimmed}`
          : trimmed;

        return `/api/hls-proxy?path=${encodeURIComponent(segmentPath)}`;
      })
      .join("\n");

    return new NextResponse(rewritten, {
      status: upstream.status,
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
      },
    });
  }

  // Everything else (.ts segments, .m4s, keys, etc.) — stream through untouched.
  const buffer = await upstream.arrayBuffer();
  return new NextResponse(buffer, {
    status: upstream.status,
    headers: {
      "Content-Type": upstream.headers.get("content-type") || "video/mp2t",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
      ...(upstream.headers.get("content-range")
        ? { "Content-Range": upstream.headers.get("content-range") as string }
        : {}),
    },
  });
}
