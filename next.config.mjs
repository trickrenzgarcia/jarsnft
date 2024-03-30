/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "**.arweave.net",
      },
      {
        protocol: "https",
        hostname: "**.**.io",
      },
      {
        protocol: "https",
        hostname: "**.**.cf-ipfs.com",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
