export type TrendingCollectionsJSON = {
  next_cursor?: string;
  next?: string;
  previous?: string;
  collections: TrendingCollection;
};

export type TrendingCollection = {
  collection_id: string;
  volume: number;
  volume_string: string;
  volume_usd_cents: number;
  volume_percent_change: number;
  transaction_count: number;
  transaction_count_percent_change: number;
  payment_token: PaymentToken;
  collection_details: CollectionDetails;
};

export type PaymentToken = {
  payment_token_id: string;
  name: string;
  symbol: string;
  address: string;
  decimals: number;
};

export type CollectionDetails = {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  image_properties: {
    width: number;
    height: number;
    mime_type: string;
  };
  banner_image_url: string;
  category: string;
  is_nsfw: boolean;
  external_url: string;
  twitter_username?: string;
  discord_url?: string;
  instagram_username?: string;
  medium_username?: string;
  telegram_url?: string;
  marketplace_pages: MarketplacePage[];
  metaplex_mint?: null; // [POTENTIAL BUG] This field is null in the API response
  metaplex_candy_machine?: null; // [POTENTIAL BUG] This field is null in the API response
  metaplex_first_verified_creator?: null; // [POTENTIAL BUG] This field is null in the API response
  mpl_core_collection_address?: null;
  floor_prices: FloorPrice[];
  top_bids: null; // [POTENTIAL BUG] This field is empty in the API response
  distinct_owner_count: number;
  distinct_nft_count: number;
  total_quantity: number;
  chains: string[];
  top_contracts: string[];
  collection_royalties: CollectionRoyalty[];
};

export type MarketplacePage = {
  marketplace_id: string;
  marketplace_name: string;
  marketplace_collection_id: string;
  collection_url: string;
  verified?: boolean;
};

export type FloorPrice = {
  marketplace_id: string;
  marketplace_name: string;
  value: number;
  payment_token: PaymentToken;
  value_usd_cents: number;
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
