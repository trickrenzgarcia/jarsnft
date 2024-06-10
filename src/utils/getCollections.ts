import { NFTCard } from "@/app/_trade/_types";
import { CLIENT_URL } from "@/lib/ctx";

// HARD-CODED DATA FOR NOW
export async function getCollections() {
    return [
        {
            name: "Hev Abi",
            collection: "0x317197Bcbf59603cd999fFC9e090279b35b60249",
            itemLink: "0",
            logo: "/assets/samples/logo1.webp",
            image: "/assets/samples/img1.jpg",
            floor_price: 5600,
            is_verified: false,
            volume: 100000,
        },
        {
            name: "Jajars",
            collection: "0xbf8Fda4cB565D4eF7Ef51EfB8f8A19fd2389270c",
            itemLink: "0",
            logo: "/assets/jars256.png",
            image: "/assets/ex1.png",
            floor_price: 5600,
            is_verified: false,
            volume: 100000,
        },
        {
            name: "BasePaint",
            collection: "basepaint",
            itemLink: "0",
            logo: "/assets/samples/logo2.png",
            image: "/assets/samples/img2.png",
            floor_price: 5600,
            is_verified: false,
            volume: 100000,
        },
        {
            name: "Terraforms by Mathcastles",
            collection: "terraforms",
            itemLink: "3854",
            logo: "/assets/samples/logo5.gif",
            image: "/assets/samples/img5.svg",
            floor_price: 2572,
            is_verified: false,
            volume: 45326,
        },
    ] as NFTCard[];
}

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

type CollectionResponse = {
    collections: CollectionData[];
}

type Category = "art" | "photography" | "pfp" | "gaming";

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
