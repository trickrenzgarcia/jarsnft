export type SimpleHashCollections = {
  next_cursor: null;
  next: null;
  previous: null;
  collections: Collection[];
};

export type SimpleHashContracts = {
  next_cursor: null;
  next: null;
  previous: null;
  contracts: Contract[];
};

export type Collection = {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  image_properties: ImageProperties;
  banner_image_url: null;
  category: null;
  is_nsfw: boolean;
  external_url: null;
  twitter_username: null;
  discord_url: null;
  instagram_username: null;
  medium_username: null;
  telegram_url: null;
  marketplace_pages: MarketplacePage[];
  metaplex_mint: null;
  metaplex_candy_machine: null;
  metaplex_first_verified_creator: null;
  floor_prices: any[];
  top_bids: any[];
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
  collection_royalties: CollectionRoyalty[];
  top_contract_details: TopContractDetail[];
};

export type Contract = {
  chain: string;
  contract_address: string;
  name: string;
  type: string;
  symbol: string;
  distinct_nft_count: number;
  deployed_by: string;
  deployed_via_contract: string;
  deployment_date: Date;
  owned_by: string;
  has_multiple_collections: boolean;
  top_collections: TopCollection[];
};

export type TopCollection = {
  collection_id: string;
  name: string;
  description: null | string;
  image_url: string;
  image_properties: ImageProperties;
  banner_image_url: null;
  category: null;
  is_nsfw: boolean;
  external_url: null;
  twitter_username: null;
  discord_url: null;
  instagram_username: null;
  medium_username: null;
  telegram_url: null;
  marketplace_pages: MarketplacePage[];
  metaplex_mint: null;
  metaplex_candy_machine: null;
  metaplex_first_verified_creator: null;
  floor_prices: any[];
  top_bids: any[];
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
  collection_royalties: CollectionRoyalty[];
};

export type CollectionRoyalty = {
  source: string;
  total_creator_fee_basis_points: number;
  recipients: Recipient[];
};

export type Recipient = {
  address: string;
  percentage: number;
  basis_points: number;
};

export type ImageProperties = {
  width: number;
  height: number;
  mime_type: string;
};

export type MarketplacePage = {
  marketplace_id: string;
  marketplace_name: string;
  marketplace_collection_id: string;
  collection_url: string;
  verified: boolean;
};

export type TopContractDetail = {
  chain: string;
  contract_address: string;
  name: string;
  type: string;
  symbol: string;
  distinct_nft_count: number;
  deployed_by: string;
  deployed_via_contract: string;
  deployment_date: Date;
  owned_by: string;
  has_multiple_collections: boolean;
};
