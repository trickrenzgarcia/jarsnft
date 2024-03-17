"use client"

import { Separator } from '@/components/ui/separator'
import { ArtTrend, BuySellNFT, NFTCategories, PhotoTrend, TradeHero } from './_components'

export default function TradePage() {
    return (
        <main className='container'>
            <TradeHero />
            <Separator className='w-full h-[2px]' />
            <BuySellNFT />
            <Separator className='w-full h-[2px]' />
            <ArtTrend />
            <Separator className='w-full h-[2px]' />
            <PhotoTrend />
            <Separator className='w-full h-[2px]' />
            <NFTCategories />
        </main>
    )
}