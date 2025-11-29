/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // prevents Cloudflare ESLint crashes
  },
};

export default nextConfig;
