/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.maplestory.nexon.com",
        port: "",
        pathname: "/Character/**",
      },
      {
        protocol: "https",
        hostname: "ssl.nexon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
