const env = process.env.NODE_ENV;

export const NFT_MARKETPLACE = process.env.NEXT_PUBLIC_PLATFORM_ADDRESS;
export const APP_URL = env === "production" ? process.env.APP_URL : "http://localhost:3000";
export const API_URL = env === "production" ? process.env.API_URL : "http://localhost:3000/api";

export const TH_CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
export const TH_API_KEY = process.env.NEXT_PUBLIC_THIRDWEB_API_KEY;
export const TH_AUTH_DOMAIN = process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN;

export const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/webp",
  "image/bmp",
  "image/tiff",
  "image/ico",
  "image/cur",
  "image/dds",
  "image/heif",
  "image/heic",
  "image/jxr",
  "image/pbm",
  "image/pcx",
  "image/pgm",
  "image/pnm",
  "image/ppm",
  "image/tga",
  "image/xpm",
  "image/rgb",
  "image/xbm",
  "image/xwd",
  "image/svg+xml",
];
