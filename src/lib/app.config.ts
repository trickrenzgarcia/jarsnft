import type { AppConfig } from "@/types";

export const appConfig: AppConfig = {
  name: "JarsNFT",
  author: [{ name: "Patrick", url: "https://rwick.pro" }, { name: "Alrae" }, { name: "Jeffrey" }, { name: "Rigor" }],
  description:
    "Discover, trade, and collect unique digital assets at Jars - your premier NFT marketplace. Explore an exclusive range of digital collectibles, artworks, and more. Join us to elevate your digital asset journey today!",
  keywords: [
    "Crypto Market",
    "NFT Marketplace",
    "digital collectibles",
    "unique digital assets",
    "unique artworks",
    "exclusive NFTs",
    "collectible tokens",
  ],
  url: {
    base: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    author: "https://rwick.pro",
  },
  links: {
    github: "https://github.com/trickrenzgarcia/jarsnft",
  },
};
