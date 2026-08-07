import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.dharvix.com",
      },
    ],
  },
};

export default nextConfig;