import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com', 'aceternity.com'],
  },
};
export default nextConfig;