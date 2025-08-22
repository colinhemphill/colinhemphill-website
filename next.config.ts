import { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
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
