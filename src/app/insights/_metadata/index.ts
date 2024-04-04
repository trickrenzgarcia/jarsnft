type RightNavListType = {
  href: string;
  anchors: {
    name: string;
    anchor: string;
  }[];
};

type LeftNavList = { name: string; href: string };

export const rightNavList: RightNavListType[] = [
  {
    href: "/learn",
    anchors: [
      { name: "Getting Started", anchor: "#getting-started" },
      { name: "Buying NFTs", anchor: "#buying-nfts" },
      { name: "Selling NFTs", anchor: "#selling-nfts" },
    ],
  },
  {
    href: "/learn/getting-started",
    anchors: [
      { name: "Installing a wallet", anchor: "#installing-wallet" },
      { name: "Connecting your wallet", anchor: "#connect-wallet" },
      { name: "Creating your profile", anchor: "#create-profile" },
    ],
  },
  {
    href: "/learn/buying-nfts",
    anchors: [
      { name: "Buying a fixed price NFT", anchor: "#buying-fixed-nfts" },
      { name: "Making an offer on a NFT", anchor: "#making-offer" },
    ],
  },
  {
    href: "/learn/selling-nfts",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/learn/faq",
    anchors: [
      {
        name: "FAQs",
        anchor: "#",
      },
    ],
  },
];

export const leftNavList: LeftNavList[] = [
  { name: "Welcome", href: "/learn" },
  { name: "Getting Started", href: "/learn/getting-started" },
  { name: "Buying NFTs", href: "/learn/buying-nfts" },
  { name: "Selling NFTs", href: "/learn/selling-nfts" },
  { name: "FAQs", href: "/learn/faq" },
];
