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
      { name: "Welcome", anchor: "welcome" },
      { name: "Getting Started", anchor: "getting-started" },
      { name: "Non-Fungible Token", anchor: "nfts" },
      { name: "Blockchain", anchor: "blockchain" },
      { name: "Guides", anchor: "guides" },
    ],
  },
  // {
  //   href: "/insights/buying-nfts",
  //   anchors: [
  //     { name: "Getting Started", anchor: "#getting-started" },
  //     { name: "Non Fungible Token", anchor: "#buying-nfts" },
  //     { name: "Blockchain", anchor: "#blockchain" },
  //     { name: "Guides", anchor: "#guides" },
  //   ],
  // },
  // {
  //   href: "/insights/selling-nfts",
  //   anchors: [
  //     { name: "Getting Started", anchor: "#getting-started" },
  //     { name: "Non Fungible Token", anchor: "#buying-nfts" },
  //     { name: "Blockchain", anchor: "#blockchain" },
  //     { name: "Guides", anchor: "#guides" },
  //   ],
  // },
  // {
  //   href: "/insights/getting-started",
  //   anchors: [
  //     { name: "Getting Started", anchor: "#getting-started" },
  //     { name: "Non Fungible Token", anchor: "#buying-nfts" },
  //     { name: "Blockchain", anchor: "#blockchain" },
  //     { name: "Guides", anchor: "#guides" },
  //   ],
  // },
  {
    href: "/insights/setup-wallet",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "Setup Metamask", anchor: "metamask" },
      { name: "Setup Coinbase", anchor: "coinbase" },
    ],
  },
  // {
  //   href: "/insights/create-profile",
  //   anchors: [
  //     { name: "Installing a wallet", anchor: "#installing-wallet" },
  //     { name: "Connecting your wallet", anchor: "#connect-wallet" },
  //   ],
  // },
  {
    href: "/insights/create-nft",
    anchors: [{ name: "Create your own NFT", anchor: "create" }],
  },
  {
    href: "/insights/trade-nft",
    anchors: [
      { name: "How to Buy an NFT", anchor: "buying" },
      { name: "How to Sell an NFT", anchor: "selling" },
    ],
  },
  {
    href: "/insights/what-is-nft",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "NFTs VS Cryptocurrency", anchor: "difference" },
      { name: "History", anchor: "history" },
      { name: "Types of NFTs", anchor: "types" },
    ],
  },
  {
    href: "/insights/what-makes-nft-valuable",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "How do NFTs get its value?", anchor: "value" },
      { name: "How to price your NFTs", anchor: "price" },
      { name: "Conclusion", anchor: "conclusion" },
    ],
  },
  {
    href: "/insights/nft-safety",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "Common Cyber Attacks", anchor: "attacks" },
    ],
  },
  {
    href: "/insights/what-is-blockchain",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "History and Significance", anchor: "history" },
      { name: "Centralized vs Decentralized", anchor: "centralized" },
      { name: "Conclusion", anchor: "conclusion" },
    ],
  },
  {
    href: "/insights/what-are-smart-contracts",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "History of Smart contracts", anchor: "history" },
      { name: "Benefits and Limitations", anchor: "benefit" },
      { name: "Example Use Cases", anchor: "usecase" },
    ],
  },
  {
    href: "/insights/what-are-gas-fees",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "Gas Fees Explained", anchor: "explained" },
      { name: "Conclusion", anchor: "conclusion" },
    ],
  },
  {
    href: "/insights/what-is-crypto",
    anchors: [
      { name: "Overview", anchor: "explained" },
      { name: "History of Cryptocurrency", anchor: "history" },
      { name: "Are Cryptocurrencies Safe?", anchor: "safety" },
      { name: "Real-World Use Cases", anchor: "usecase" },
      { name: "Types of Cryptocurrency", anchor: "types" },
    ],
  },
  {
    href: "/insights/how-to-earn-crypto",
    anchors: [
      { name: "Earning Cryptocurrency", anchor: "overview" },
      { name: "Buy your First Crypto", anchor: "buying" },
      { name: "Tips to Invest Safely", anchor: "tips" },
    ],
  },
  {
    href: "/insights/exchange-crypto",
    anchors: [
      { name: "Coins PH", anchor: "coinsph" },
      { name: "Bybit", anchor: "bybit" },
      { name: "Binance", anchor: "binance" },
      { name: "Other Exchange Platforms", anchor: "others" },
    ],
  },
  {
    href: "/insights/protect-account",
    anchors: [
      { name: "Overview", anchor: "overview" },
      { name: "Common NFT Scams", anchor: "scams" },
      { name: "Protect your Account", anchor: "protect" },
      // { name: "Conclusion", anchor: "conclusion" },
    ],
  },
  // {
  //   href: "/insights/faq",
  //   anchors: [{ name: "FAQs", anchor: "#" }],
  // },
];

export const leftNavList: LeftNavList[] = [
  {
    topic: "Welcome",
    child: [{ name: "Overview", href: "/insights" }],
  },
  {
    topic: "Getting Started",
    child: [
      { name: "Setup your wallet", href: "/insights/setup-wallet" },
      { name: "Create your NFT", href: "/insights/create-nft" },
      { name: "How to trade your NFT", href: "/insights/trade-nft" },
    ],
  },
  {
    topic: "Non-Fungible Token",
    child: [
      { name: "What is an NFT?", href: "/insights/what-is-nft" },
      {
        name: "What makes an NFT Valuable?",
        href: "/insights/what-makes-nft-valuable",
      },
      { name: "How safe are my NFTs?", href: "/insights/nft-safety" },
    ],
  },
  {
    topic: "Blockchain",
    child: [
      { name: "What is the blockchain?", href: "/insights/what-is-blockchain" },
      {
        name: "What is a smart contract?",
        href: "/insights/what-are-smart-contracts",
      },
      { name: "What are gas fees?", href: "/insights/what-are-gas-fees" },
      { name: "What is cryptocurrency?", href: "/insights/what-is-crypto" },
      {
        name: "How to earn Cryptocurrency?",
        href: "/insights/how-to-earn-crypto",
      },
    ],
  },
  {
    topic: "Guides",
    child: [
      { name: "Exchange Cryptocurrency", href: "/insights/exchange-crypto" },
      { name: "Protect your account", href: "/insights/protect-account" },
    ],
  },
  // {
  //   topic: "FAQs",
  //   child: [{ name: "To be added", href: "#" }],
  // },
];
