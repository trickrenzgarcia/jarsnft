type RightNavListType = {
  href: string;
  anchors: {
    name: string;
    anchor: string;
  }[];
};

// type LeftNavList = { name: string; href: string };
type LeftNavList = {
  topic: string;
  child: {
    name: string;
    href: string;
  }[];
};

export const rightNavList: RightNavListType[] = [
  {
    // add id="#anchor" in 
    href: "/insights",
    anchors: [
      { name: "Getting Started", anchor: "#getting-started" },
      { name: "Non Fungible Token", anchor: "#buying-nfts" },
      { name: "Blockchain", anchor: "#blockchain" },
      { name: "Guides", anchor: "#guides" },
    ],
  },
  {
    href: "/insights/buying-nfts",
    anchors: [
      { name: "Getting Started", anchor: "#getting-started" },
      { name: "Non Fungible Token", anchor: "#buying-nfts" },
      { name: "Blockchain", anchor: "#blockchain" },
      { name: "Guides", anchor: "#guides" },
    ],
  },
  {
    href: "/insights/selling-nfts",
    anchors: [
      { name: "Getting Started", anchor: "#getting-started" },
      { name: "Non Fungible Token", anchor: "#buying-nfts" },
      { name: "Blockchain", anchor: "#blockchain" },
      { name: "Guides", anchor: "#guides" },
    ],
  },
  {
    href: "/insights/getting-started",
    anchors: [
      { name: "Getting Started", anchor: "#getting-started" },
      { name: "Non Fungible Token", anchor: "#buying-nfts" },
      { name: "Blockchain", anchor: "#blockchain" },
      { name: "Guides", anchor: "#guides" },
    ],
  },
  {
    href: "/insights/setup-wallet",
    anchors: [
      { name: "Installing a wallet", anchor: "#installing-wallet" },
      { name: "Connecting your wallet", anchor: "#connect-wallet" },
      { name: "Creating your profile", anchor: "#create-profile" },
    ],
  },
  {
    href: "/insights/create-profile",
    anchors: [
      { name: "Installing a wallet", anchor: "#installing-wallet" },
      { name: "Connecting your wallet", anchor: "#connect-wallet" },
    ],
  },
  {
    href: "/insights/create-nft",
    anchors: [
      { name: "Buying a fixed price NFT", anchor: "#buying-fixed-nfts" },
      { name: "Making an offer on a NFT", anchor: "#making-offer" },
    ],
  },
  {
    href: "/insights/trade-nft",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/what-is-nft",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/what-makes-nft-valuable",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/what-is-blockchain",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/what-is-a-smart-contract",
    anchors: [
      { name: "Buying a fixed price NFT", anchor: "#buying-fixed-nfts" },
      { name: "Making an offer on a NFT", anchor: "#making-offer" },
    ],
  },
  {
    href: "/insights/what-are-gas-fees",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/what-is-crypto",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/exchange-crypto",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      {
        name: "Listing an NFT for sale a fixed price",
        anchor: "#selling-fixed-price",
      },
    ],
  },
  {
    href: "/insights/protect-account",
    anchors: [
      { name: "Accepting an offer on your NFT", anchor: "#buying-fixed-price" },
      { name: "Listing an NFT for sale a fixed price", anchor: "#selling-fixed-price", },
    ],
  },
  {
    href: "/insights/faq",
    anchors: [
      { name: "FAQs", anchor: "#", },
    ],
  },
];

// export const leftNavList: LeftNavList[] = [
//   { name: "Welcome", href: "/insights" },
//   { name: "Getting Started", href: "/insights/getting-started" },
//   { name: "Buying NFTs", href: "/insights/buying-nfts" },
//   { name: "Selling NFTs", href: "/insights/selling-nfts" },
//   { name: "FAQs", href: "/insights/faq" },
// ];

export const leftNavList: LeftNavList[] = [
  {
    topic: "Welcome",
    child: [
      { name: "Overview", href: "/insights" }
    ]
  },
  {
    topic: "Getting Started",
    child: [
      { name: "Setup your wallet", href: "/insights/setup-wallet" },
      { name: "Creating your profile", href: "/insights/create-profile" },
      { name: "Create your NFT", href: "/insights/create-nft" },
      { name: "How to trade your NFT", href: "/insights/trade-nft" }
    ]
  },
  {
    topic: "Non-Fungible Token",
    child: [
      { name: "What is an NFT?", href: "/insights/what-is-nft" },
      { name: "What makes NFT Valuable?", href: "/insights/what-makes-nft-valuable" }
    ]
  },
  {
    topic: "Blockchain",
    child: [
      { name: "What is the blockchain?", href: "/insights/what-is-blockchain" },
      { name: "What is a smart contract?", href: "/insights/what-is-a-smart-contract" },
      { name: "What are gas fees?", href: "/insights/what-are-gas-fees" },
      { name: "What is cryptocurrency?", href: "/insights/what-is-crypto" }
    ]
  },
  {
    topic: "Guides",
    child: [
      { name: "Exchange Cryptocurrency", href: "/insights/exchange-crypto" },
      { name: "Protect your account", href: "/insights/protect-account" }
    ]
  },
  {
    topic: "FAQs",
    child: [
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
      { name: "To be added", href: "#" },
    ]
  },
]
