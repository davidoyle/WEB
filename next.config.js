/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Allow production builds to proceed even if lint warnings are present.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
