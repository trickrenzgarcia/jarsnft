import { Separator } from '@/components/ui/separator'
import { ArtTrend, BuySellNFT, NFTCategories, PhotoTrend, TradeHero } from './_components'
import { Suspense } from 'react'

export default async function TradePage() {
    return (
        <main className='container'>
            <TradeHero />

            <Separator className='w-full h-[2px]' />

            <Suspense fallback={<div>Loading...</div>}>
                <BuySellNFT />
            </Suspense>

            <Separator className='w-full h-[2px]' />

            <Suspense fallback={<div>Loading...</div>}>
                <ArtTrend />
            </Suspense>
            
            <Separator className='w-full h-[2px]' />

            <Suspense fallback={<div>Loading...</div>}>
                <PhotoTrend />
            </Suspense>
            
            <Separator className='w-full h-[2px]' />

            <Suspense fallback={<div>Loading...</div>}>
                <NFTCategories />
            </Suspense>
        </main>
    )
}