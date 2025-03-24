import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverComponentsExternalPackages: ["bcryptjs"], // Añade bcryptjs aquí
  },
};


export default nextConfig;
