// Configure Next.js building process
// import {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } from "next/constants.js";

import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Disable React strict mode
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // Allow images from any domain
    ],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
      resolveAlias: {
        underscore: "lodash",
        mocha: { browser: "mocha/browser-entry.js" },
      },
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
      ],
      moduleIdStrategy: "deterministic",
    },
  },
};

export default nextConfig;

// const nextConfigFunction = async (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
//     const withPWA = (await import("@ducanh2912/next-pwa")).default({
//       dest: "public",
//     });
//     return withPWA(nextConfig);
//   }
//   return nextConfig;
// };
// export default nextConfigFunction;
