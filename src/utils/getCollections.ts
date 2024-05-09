import { NFTCard } from "@/app/_trade/_types";

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

export async function getArtCollections() {
    return [
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
            name: "Chromie Squiggle by Snowfro",
            collection: "chromie-squiggle-by-snowfro",
            itemLink: "1191",
            logo: "/assets/samples/logo3.png",
            image: "/assets/samples/img3.png",
            floor_price: 1673,
            is_verified: false,
            volume: 12356,
        },
        {
            name: "alignDRAW",
            collection: "aligndraw",
            itemLink: "361",
            logo: "/assets/samples/logo4.svg",
            image: "/assets/samples/img4.png",
            floor_price: 2572,
            is_verified: false,
            volume: 45326,
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

export async function getPhotosCollections() {
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
    ] as NFTCard[];
}
