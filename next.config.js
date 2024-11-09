import { withContentlayer } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'colinhemphill.com',
      },
    ],
  },
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
