import { polygon } from "thirdweb/chains";

export const thirdwebConfig = {
  app: "JarsNFT",
  version: "1.0.0",
  description: "JarsNFT Marketplace",
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
  secretKey: process.env.NEXT_PUBLIC_THIRDWEB_API_KEY,
  chain: polygon,
};
