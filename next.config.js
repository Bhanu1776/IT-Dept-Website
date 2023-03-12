/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'utils'],
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
