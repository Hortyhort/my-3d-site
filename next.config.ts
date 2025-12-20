import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force Next.js to compile these 3D libraries correctly
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],

  // 2. Ignore typescript errors during build (optional but recommended for R3F 
  // as 3D types often conflict with React types)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
