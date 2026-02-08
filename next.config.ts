import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // For GitHub Pages project site (username.github.io/repo-name), set in workflow:
  basePath: process.env.GITHUB_PAGES_BASE_PATH || "",
  assetPrefix: process.env.GITHUB_PAGES_BASE_PATH
    ? `${process.env.GITHUB_PAGES_BASE_PATH}/`
    : "",
};

export default nextConfig;
