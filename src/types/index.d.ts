import { NFT as ThirdwebNFT } from "@thirdweb-dev/react";
import { z } from "zod";

export type NFT = ThirdwebNFT;

const CollectionMetadataOutput: z.ZodObject<{
  name: z.ZodString;
  description: z.ZodOptional<z.ZodString>;
  image: z.ZodOptional<z.ZodString>;
  external_link: z.ZodOptional<z.ZodString>;
  app_uri: z.ZodOptional<z.ZodString>;
  social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
  seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
  fee_recipient: z.ZodOptional<
    z.ZodDefault<
      z.ZodUnion<
        [
          z.ZodType<string, z.ZodTypeDef, string>,
          z.ZodType<
            `0x${string}`,
            z.ZodTypeDef,
            `${string}.eth` | `${string}.cb.id`
          >
        ]
      >
    >
  >;
  merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
  symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}>;
export type CollectionMetadata = z.output<typeof CollectionMetadataOutput>;

type AppConfig = {
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

type Collections = {
  collections: Collection[];
};

type Collection = {
  collection: string;
  name: string;
  description: string;
  imgUrl: string;
  bannerImgUrl: string;
  listStatus: string;
  category: string;
  isDisabled: boolean;
  isNsfw: boolean;
  jarsnftUrl: string;
  projectUrl: string;
  wikiUrl: string;
  discordUrl: string;
  twitterUsername: string;
  instagramUsername: string;
  contracts: Contract[];
  editors: string[];
  fees: Array<{
    fee: number;
    recipient: string;
    required: boolean;
  }>;
};

type NFTCollections = {
  page: number;
  results: NFTCollection[];
  total_pages: number;
  total_results: number;
};

type NFTCollection = {
  id: number;
  cid: string;
  collection: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: string;
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  jarsnft_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
};

type NFTContentWrapperProps = {
  title: string;
};

type NFTCarouselProps = {
  collections: NFTCollection[];
};

type NFTCollectionCard = {
  name: string;
  contract: string;
  floor_price: number;
  imgUrl: string;
};

type MultiCollectionContextProps = {
  popular: NFTCollection[];
  arts: NFTCollection[];
  pfps: NFTCollection[];
  photography: NFTCollection[];
};

export type GetUserResponse = {
  success: boolean;
  user?: {
    id: number;
    email: string;
    name: string;
    address: string;
    createdAt: Date;
  };
};

export type MetadataSchema = {
  id: number;
  cid: string;
  collection: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: string;
  category: string;
  is_disabled: boolean;
  is_nsfw: boolean;
  trait_offers_enabled: boolean;
  collection_offers_enabled: boolean;
  jarsnft_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  created_at: string | Date;
};

export {
  AppConfig,
  NFTCollections,
  NFTCollection,
  NFTContentWrapperProps,
  NFTCarouselProps,
  NFTCollectionCard,
  MultiCollectionContextProps,
};
