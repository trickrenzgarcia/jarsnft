import { NFTCard } from "@/types/nft-card";
import { CLIENT_URL } from "@/lib/ctx";

export type CollectionData = {
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
    trusted_forwarders: string;
    category: string;
    owner: string;
    is_nsfw: boolean;
    is_verified: boolean;
    sale_listed: boolean;
    view_count: number;
    created_at: Date;
}

export type CollectionPopularData = CollectionData & {
    combinedPopularityMetric: number;
}

type CollectionResponse = {
    collections: CollectionData[];
}

export type Category = "art" | "photography" | "pfp" | "gaming";

export async function getPopularCollections() {
    const response = await fetch(`${CLIENT_URL}/api/popular`);
    const data = await response.json() as CollectionPopularData[];

    return data;
}

export async function getCollectionsByCategory(category: Category, page: number = 1, limit: number = 50) {
    const response = await fetch(`${CLIENT_URL}/api/trending?category=${category}&page=${page}&limit=${limit}`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}

export async function getArtCollections() {
    const response = await fetch(`${CLIENT_URL}/api/trending?category=art&page=1&limit=50`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}

export async function getPhotosCollections() {
    const response = await fetch(`${CLIENT_URL}/api/trending?category=photography&page=1&limit=50`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}

export async function getPFPsCollections() {
    const response = await fetch(`${CLIENT_URL}/api/trending?category=pfp&page=1&limit=50`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}
