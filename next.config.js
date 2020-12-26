const bundleAnalyzer = require('@next/bundle-analyzer');
const offline = require('next-offline');
const withPlugins = require('next-compose-plugins');

const workboxOpts = {
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'https-calls',
        networkTimeoutSeconds: 15,
        expiration: {
          maxEntries: 150,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
  swDest: 'static/service-worker.js',
};

const nextConfig = {
  generateInDevMode: false,
  images: {
    domains: ['images.prismic.io'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/meet',
        destination: 'https://meet.google.com/zkf-hhnq-xhn',
        permanent: false,
      },
    ];
  },
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest),
  workboxOpts,
};

const plugins = [
  [
    bundleAnalyzer,
    {
      enabled: process.env.ANALYZE === 'true',
    },
  ],
  [offline],
];

module.exports = withPlugins(plugins, nextConfig);
