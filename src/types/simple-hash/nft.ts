// To parse this data:
//
//   import { Convert, SimpleHashNFT } from "./file";
//
//   const simpleHashNFT = Convert.toSimpleHashNFT(json);

export type SimpleHashNFTByWallet = {
  next_cursor: string | null;
  next: string | null;
  previous: string | null;
  nfts: SimpleHashNFT[];
}

export type SimpleHashNFT = {
  nft_id:           string;
  chain:            string;
  contract_address: string;
  token_id:         string;
  name:             string;
  description:      string;
  previews:         Previews;
  image_url:        string;
  image_properties: ImageProperties;
  video_url:        null;
  video_properties: null;
  audio_url:        null;
  audio_properties: null;
  model_url:        null;
  model_properties: null;
  other_url:        null;
  other_properties: null;
  background_color: null;
  external_url:     null;
  created_date:     Date;
  status:           string;
  token_count:      number;
  owner_count:      number;
  owners:           Owner[];
  contract:         Contract;
  collection:       Collection;
  last_sale:        null;
  first_created:    FirstCreated;
  rarity:           Rarity;
  royalty:          Royalty[];
  extra_metadata:   ExtraMetadata;
}

export interface Collection {
  collection_id:                   string;
  name:                            string;
  description:                     string;
  image_url:                       string;
  image_properties:                ImageProperties;
  banner_image_url:                null;
  category:                        null;
  is_nsfw:                         boolean;
  external_url:                    null;
  twitter_username:                null;
  discord_url:                     null;
  instagram_username:              null;
  medium_username:                 null;
  telegram_url:                    null;
  marketplace_pages:               MarketplacePage[];
  metaplex_mint:                   null;
  metaplex_candy_machine:          null;
  metaplex_first_verified_creator: null;
  floor_prices:                    any[];
  top_bids:                        any[];
  distinct_owner_count:            number;
  distinct_nft_count:              number;
  total_quantity:                  number;
  chains:                          string[];
  top_contracts:                   string[];
  collection_royalties:            Royalty[];
}

export interface Royalty {
  source:                         string;
  total_creator_fee_basis_points: number;
  recipients:                     Recipient[];
}

export interface Recipient {
  address:      string;
  percentage:   number;
  basis_points: number;
}

export interface ImageProperties {
  width:     number;
  height:    number;
  mime_type: string;
  size?:     number;
}

export interface MarketplacePage {
  marketplace_id:            string;
  marketplace_name:          string;
  marketplace_collection_id: string;
  nft_url:                   string;
  collection_url:            string;
  verified:                  boolean;
}

export interface Contract {
  type:                     string;
  name:                     string;
  symbol:                   string;
  deployed_by:              string;
  deployed_via_contract:    string;
  owned_by:                 string;
  has_multiple_collections: boolean;
}

export interface ExtraMetadata {
  attributes:             Attribute[];
  customImage:            null;
  customAnimationUrl:     null;
  image_original_url:     string;
  animation_original_url: null;
  metadata_original_url:  string;
}

export interface Attribute {
  trait_type:   string;
  value:        string;
  display_type: null;
}

export interface FirstCreated {
  minted_to:             string;
  quantity:              number;
  quantity_string:       string;
  timestamp:             Date;
  block_number:          number;
  transaction:           string;
  transaction_initiator: string;
}

export interface Owner {
  owner_address:       string;
  quantity:            number;
  quantity_string:     string;
  first_acquired_date: Date;
  last_acquired_date:  Date;
}

export interface Previews {
  image_small_url:     string;
  image_medium_url:    string;
  image_large_url:     string;
  image_opengraph_url: string;
  blurhash:            string;
  predominant_color:   string;
}

export interface Rarity {
  rank:              number;
  score:             number;
  unique_attributes: number;
}