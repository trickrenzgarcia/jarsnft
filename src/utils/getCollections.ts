import { NFTCard } from "@/types/nft-card";
import { BASE_URL, CLIENT_URL } from "@/lib/ctx";

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
    // changed to fetch from localhost:5000 (BASE_URL) instead in order to be build
    // const response = await fetch(`${CLIENT_URL}/api/popular`);
    // const data = await response.json() as CollectionPopularData[];

    // return data;

    const response = fetch(`${BASE_URL}/collections/popular`);
    const data = (await response).json();

    return await data as CollectionPopularData[];
}

export async function getCollectionsByCategory(category: Category, page: number = 1, limit: number = 50) {
    // changed to fetch from localhost:5000 (BASE_URL) instead in order to be build
    // const response = await fetch(`${CLIENT_URL}/api/trending?category=${category}&page=${page}&limit=${limit}`);
    const response = await fetch(`${BASE_URL}/collections/trending?category=${category}&page=${1}&limit=${50}`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}

export async function getArtCollections() {
    // changed to fetch from localhost:5000 (BASE_URL) instead in order to be build
    // const response = await fetch(`${CLIENT_URL}/api/trending?category=art&page=1&limit=50`);
    const response = await fetch(`${BASE_URL}/collections/trending?category=art&page=${1}&limit=${50}`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}

export async function getPhotosCollections() {
    // changed to fetch from localhost:5000 (BASE_URL) instead in order to be build
    // const response = await fetch(`${CLIENT_URL}/api/trending?category=photography&page=1&limit=50`);
    const response = await fetch(`${BASE_URL}/collections/trending?category=photography&page=${1}&limit=${50}`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}

export async function getPFPsCollections() {
    // changed to fetch from localhost:5000 (BASE_URL) instead in order to be build
    // const response = await fetch(`${CLIENT_URL}/api/trending?category=pfp&page=1&limit=50`);
    const response = await fetch(`${BASE_URL}/collections/trending?category=pfp&page=${1}&limit=${50}`);
    const data = await response.json() as CollectionResponse;

    const nfts = data.collections.map((nft) => nft);

    return nfts;
}
