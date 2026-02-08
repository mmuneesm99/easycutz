import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // For GitHub Pages project site (username.github.io/repo-name), set in workflow:
  basePath: '/easycutz',
  assetPrefix: "/easycutz",
};

export default nextConfig;
