import { Navbar } from '@/components/(layout)'
import React from 'react'
import { ArtTrend, BuySellNFT, NFTCategories, PhotoTrend, TradeHero } from '.'
import dynamic from 'next/dynamic'

const Trade = () => {

    const Footer = dynamic(() => import("@/components/(layout)/Footer"), { ssr: false })

    return (
        <>
            <Navbar display={"sticky"} />
            <TradeHero />
            <BuySellNFT />
            <ArtTrend />
            <PhotoTrend />
            <NFTCategories />
            <Footer />
        </>
    )
}

export default Trade