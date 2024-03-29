"use client"

import { NFTCard as NFTCardType } from "../_types"
import NFTCard from "./NFTCard"
import NFTCarousel from "./NFTCarousel"

export default function PhotoTrend({ collections }: { collections: NFTCardType[] }) {
    return (
        <>
            <div className="mt-14 mb-20">
                <p className="font-bold text-xl mb-12">Trending in Photography</p>
                <div className="px-0 md:px-10">
                    <NFTCarousel collections={collections} />
                </div>
            </div>
        </>
    )
}
