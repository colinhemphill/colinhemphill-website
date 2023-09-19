import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['colinhemphill.com'],
  },
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
