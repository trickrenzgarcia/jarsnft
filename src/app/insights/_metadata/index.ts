type RightNavListType = {
  href: string;
  anchors: {
    name: string;
    anchor: string;
  }[];
};

type LeftNavList = { name: string; href: string };
type LeftNewList = { 
  topic: string; 
  child: {
    name: string;
    href: string;
  }[]; 
};

export const rightNavList: RightNavListType[] = [
  {
    href: "/insights",
    anchors: [
      { name: "Getting Started", anchor: "#getting-started" },
      { name: "Buying NFTs", anchor: "#buying-nfts" },
      { name: "Selling NFTs", anchor: "#selling-nfts" },
    ],
  },
  {
    href: "/insights/getting-started",
    anchors: [
      { name: "Installing a wallet", anchor: "#installing-wallet" },
      { name: "Connecting your wallet", anchor: "#connect-wallet" },
      { name: "Creating your profile", anchor: "#create-profile" },
    ],
  },
  {
    href: "/insights/buying-nfts",
    anchors: [
      { name: "Buying a fixed price NFT", anchor: "#buying-fixed-nfts" },
      { name: "Making an offer on a NFT", anchor: "#making-offer" },
    ],
  },
  {
    href: "/insights/selling-nfts",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/faq",
    anchors: [
      {
        name: "FAQs",
        anchor: "#",
      },
    ],
  },
];

export const leftNavList: LeftNavList[] = [
  { name: "Welcome", href: "/insights" },
  { name: "Getting Started", href: "/insights/getting-started" },
  { name: "Buying NFTs", href: "/insights/buying-nfts" },
  { name: "Selling NFTs", href: "/insights/selling-nfts" },
  { name: "FAQs", href: "/insights/faq" },
];

export const leftNewList: LeftNewList[] =[
  {
    topic: "1 Started",
    child: [
      {name: "1 a wallet", href: "/learn/getting-started"},
      {name: "2 a wallet", href: "/learn/getting-started"},
      {name: "3 a wallet", href: "/learn/getting-started"}      
    ]
  },
  {
    topic: "2 Started",
    child: [
      {name: "4 a wallet", href: "/learn/getting-started"},
      {name: "5 a wallet", href: "/learn/getting-started"},
      {name: "6 a wallet", href: "/learn/getting-started"}      
    ]
  },
  {
    topic: "3 Started",
    child: [
      {name: "7 a wallet", href: "/learn/getting-started"},
      {name: "8 a wallet", href: "/learn/getting-started"},
      {name: "9 a wallet", href: "/learn/getting-started"}      
    ]
  },
  {
    topic: "4 Started",
    child: [
      {name: "10 a wallet", href: "/learn/getting-started"},
      {name: "11 a wallet", href: "/learn/getting-started"},
      {name: "12 a wallet", href: "/learn/getting-started"}      
    ]
  },
]
