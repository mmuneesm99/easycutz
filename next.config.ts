import type { NextConfig } from "next";

// GitHub Pages project site: username.github.io/repo-name → set in workflow or here for local build
const basePath = "mmuneesm99.github.io/easycutz";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  // Trailing slash so _next/static and public asset URLs resolve on GitHub Pages
  ...(basePath && { assetPrefix: `${basePath}/` }),
  // Avoid image optimization path issues on static export
  images: { unoptimized: true },
};

export default nextConfig;
