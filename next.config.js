/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // output: 'export', // Commented out to allow dynamic routes with database

  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
