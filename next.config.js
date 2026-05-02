/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/tigranatoyan-ai-portal" : "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export only for GitHub Pages; Vercel uses SSR to support API routes (e.g. AI chat)
  ...(isGithubPages ? { output: "export" } : {}),
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_IS_GITHUB_PAGES: isGithubPages ? "true" : "false",
  },
};

module.exports = nextConfig;
