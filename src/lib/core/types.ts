import { SimpleHashCollections } from "@/types/simple-hash";

export type User = {
  id: number;
  uid: string;
  address: string;
  name: string;
  email: string;
  is_listed: boolean;
  role: "user" | "admin";
  created_at: string;
};

export type StorageProfile = {
  address: string;
  image_url?: string;
  banner_url?: string;
  is_verified: boolean;
  updated_at: string;
};

export type NFTCollection = {
  contract: string;
  image: string;
  name: string;
  symbol: string;
  description: string;
  app_uri: string;
  external_link: string;
  fee_recipient: string;
  seller_fee_basis_points: number;
  primary_sale_recipient: string;
  owner: string;
  is_nsfw: boolean;
  is_verified: boolean;
  safe_listed: boolean;
  view_count: number;
  trusted_forwarders: string[];
  created_at: string;
  simpleHashData: SimpleHashCollections;
};

export type NFTFavorite = {
  id: number;
  uid: string;
  contract: string;
  token_id: string;
  name: string;
  image_url: string;
  added_at: Date;
  updated_at: Date | null;
}

export type OpenSeaMetadata = {
  floorPrice: number | null;
  collectionName: string | null;
  collectionSlug: string | null;
  safelistRequestStatus: string | null;
  imageUrl: string | null;
  description: string | null;
  externalUrl: string | null;
  twitterUsername: string | null;
  discordUrl: string | null;
  bannerImageUrl: string | null;
  lastIngestedAt: string | null;
};

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

export type AlchemyContractsForOwner = {
  contracts: ContractForOwner[];
  totalCount: number;
  pageKey: string | number | null;
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
