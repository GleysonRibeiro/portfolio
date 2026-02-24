import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/GleysonRibeiro',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;