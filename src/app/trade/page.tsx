"use client"

import { ArtTrend, BuySellNFT, NFTCategories, PhotoTrend, TradeHero } from './_components'

export default function TradePage() {
    return (
        <main className='container'>
            <TradeHero />
            <BuySellNFT />
            <ArtTrend />
            <PhotoTrend />
            <NFTCategories />
        </main>
    )
}