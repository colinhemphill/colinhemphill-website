const withMDX = require('@next/mdx')();

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
  swcMinify: true,
};

module.exports = withMDX(nextConfig);
