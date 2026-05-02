/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/tigranatoyan-ai-portal',
  assetPrefix: '/tigranatoyan-ai-portal',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/tigranatoyan-ai-portal',
  },
};

module.exports = nextConfig;
