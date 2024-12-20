export type AppConfig = {
  name: string;
  author: Array<{
    name: string;
    url?: string;
  }>;
  description: string;
  keywords: string[];
  url: {
    base: string;
    author: string;
  };
  links: {
    github: string;
  };
  ogImage?: string;
};

export type User = {
  id: number;
  uid: string;
  address: string;
  name: string;
  email: string;
  isListed: number;
  role: "user" | "admin";
  createdAt: string;
};

export type StorageProfile = {
  address: string;
  imageUrl?: string;
  bannerUrl?: string;
  isVerified: boolean;
  updatedAt: string;
};

export type NFTCollection = {
  contract: string;
  image: string;
  name: string;
  symbol: string;
  description: string;
  appUri: string;
  externalLink: string;
  feeRecipient: string;
  sellerFeeBasisPoints: number;
  primarySaleRecipient: string;
  owner: string;
  isNsfw: number | boolean;
  isVerified: number | boolean;
  safeListed: number | boolean;
  viewCount: number;
  trustedForwarders: string[];
  category: string;
  createdAt: string;
  simpleHashData: SimpleHashCollections;
};

export type CollectionData = {
  contract: string;
  image: string;
  name: string;
  symbol: string;
  description: string;
  appUri: string;
  externalLink: string;
  feeRecipient: string;
  sellerFeeBasisPoints: number;
  primarySaleRecipient: string;
  trustedForwarders: string;
  category: string;
  owner: string;
  isNsfw: boolean;
  isVerified: boolean | number;
  saleListed: boolean;
  viewCount: number;
  createdAt: Date;
};

export type AlchemyContractMetadata = {
  address: string;
  name: string;
  symbol?: string;
  tokenSupply?: string;
  tokenType: string;
  contractDeployer: string | null;
  deployedBlockNumber: number | null;
  openSeaMetadata: OpenSeaMetadata;
};

export type AlchemyContract = {
  contract: {
    address: string;
    name: string;
    symbol?: string;
    totalSupply?: string;
    tokenType: string;
    openSeaMetadata: OpenSeaMetadata;
    isSpam: boolean | null;
    spamClassifications: any[];
  };
  tokenId: string;
  tokenType: string;
  name: string;
  description: string;
  tokenUri: string;
  image: {
    cachedUrl: string | null;
    thumbnailUrl: string | null;
    pngUrl: string;
    contentType: string | null;
    size: string | null;
    originalUrl: string;
  };
  raw: {
    tokenUri: string | null;
    metadata: {
      image: string | null;
      external_url: string | null;
      background_color: string | null;
      name: string;
      description: string | null;
      customImage: string | null;
      attibutes: any[] | null;
      customAnimationUrl: string;
    };
    error: string | null;
  };
  collection: string | null;
  mint: {
    mintAddress: string;
    blockNumber: number;
    timestamp: string;
    transactionHash: string;
  };
  owners: any[] | null;
  timeLastUpdated: string;
  balance: string;
  acquiredAt: {
    blockTimestamp: string | null;
    blockNumber: number | null;
  };
};

export type AlchemyNFTs = {
  ownedNfts: AlchemyContract[];
  pageKey: string | number | null;
  totalCount: number;
  validAt: {
    blockHash: string;
    blockNumber: number | null;
    blockTimestamp: string | null;
  };
};

export type NFTFavorite = {
  id: number;
  uid: string;
  contract: string;
  tokenId: string;
  name: string;
  imageUrl: string;
  addedAt: string | Date;
  updatedAt: string | Date | null;
};

export type CollectionData = {
  contract: string;
  image: string;
  name: string;
  symbol: string;
  description: string;
  appUri: string;
  externalLink: string;
  feeRecipient: string;
  sellerFeeBasisPoints: number;
  primarySaleRecipient: string;
  trustedForwarders: string;
  category: string;
  owner: string;
  isNsfw: boolean;
  isVerified: boolean;
  saleListed: boolean;
  viewCount: number;
  createdAt: Date;
};

export type CollectionPopularData = CollectionData & {
  combinedPopularityMetric: number;
};

type CollectionResponse = {
  collections: CollectionData[];
};

export type Category = "art" | "photography" | "pfp" | "gaming";

export type JarsContract = {
  contract: string;
  image: string;
  name: string;
  symbol?: string;
  description?: string;
  app_uri?: string;
  external_link?: string;
  fee_recipient: string;
  seller_fee_basis_points: number;
  primary_sale_recipient: string;
  trusted_forwarders: string[];
  owner: string;
  created_at: string;
};

export type ContractForOwner = {
  address: string;
  name: string;
  symbol: string;
  totalSupply: string | null;
  tokenType: string;
  openSeaMetadata: OpenSeaMetadata;
  totalBalance: string | null;
  numDistinctTokensOwned: string | null;
  isSpam: boolean;
  displayNft: {
    tokenId: string;
    name: string;
  };
  image: {
    cachedUrl: string;
    thumbnailUrl: string | null;
    pngUrl: string | null;
    contentType: string | null;
    size: string | null;
    originalUrl: string;
  };
};

export type EventType = "TokensMinted" | "Transfer" | "NewListing" | "NewAuction" | "NewBid" | "NewSale" | "CancelledAuction" | "CancelledListing";
