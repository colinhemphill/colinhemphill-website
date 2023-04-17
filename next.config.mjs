import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ['colinhemphill.com', 'media.graphassets.com'],
  },
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
