import { AppConfig } from "@/types";

import { env } from "@/lib/env.mjs";

export const appConfig: AppConfig = {
  name: "JarsNFT",
  author: [
    {
      name: "Patrick",
      url: "https://patrick-renz.vercel.app/",
    },
    {
      name: "Alrae",
    },
    {
      name: "Jeffrey",
    },
    {
      name: "Rigor",
    },
  ],
  description:
    "Discover, trade, and collect unique digital assets at Jars - your premier NFT marketplace. Explore an exclusive range of digital collectibles, artworks, and more. Join us to elevate your digital asset journey today!",
  keywords: [
    "Crypto Market",
    "NFT marketplace",
    "digital collectibles",
    "unique artworks",
    "digital asset trading",
    "exclusive NFTs",
    "collectible tokens",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://patrick-renz.vercel.app/",
  },
  links: {
    github: "https://github.com/trickrenzgarcia/jarsnft",
  },
};
