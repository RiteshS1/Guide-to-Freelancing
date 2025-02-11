import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['unsplash.com', 'aceternity.com'], // Add the hostname causing the error here
  },
};

export default nextConfig;
