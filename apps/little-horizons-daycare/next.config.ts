import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(nextConfig) {
    nextConfig.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return nextConfig;
  }
};

export default nextConfig;
