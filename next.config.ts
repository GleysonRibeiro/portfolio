import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  reactCompiler: true,
};

export default nextConfig;
