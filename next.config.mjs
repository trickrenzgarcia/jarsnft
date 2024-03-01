/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
