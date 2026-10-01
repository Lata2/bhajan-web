/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-rsms.b-cdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.b-cdn.net',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;