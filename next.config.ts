import { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'colinhemphill.com',
      },
    ],
  },
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {},
};

export default withContentlayer(nextConfig);
