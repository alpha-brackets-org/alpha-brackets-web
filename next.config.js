import path from "path";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  devIndicators: {
    buildActivity: false,
  },
  turbopack: {
    root: path.resolve(".."),
  },

  async redirects() {
    return [
      // Renamed slugs → new slugs
    ];
  },
};

export default nextConfig;
