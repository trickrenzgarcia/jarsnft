"use client"

import NFTCard from "./NFTCard"
import NFTCarousel from "./NFTCarousel"

export default function ArtTrend() {
    return (
        <>
            <div className="mt-14 mb-20">
                <p className="font-bold text-xl mb-12">Trending in Art</p>
                <div className="px-0 md:px-10">
                    <NFTCarousel />
                </div>
            </div>
        </>
    )
}
