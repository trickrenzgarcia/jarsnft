import { withPWA } from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: 'public', // This will generate the service worker and other PWA assets in the public folder
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  },
});

export default nextConfig;