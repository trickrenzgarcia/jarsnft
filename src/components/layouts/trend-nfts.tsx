"use client"

import React from 'react'
import { Scroller, ScrollerItem } from '@/components/cards/Scroller'
import { HiMiniFire } from "react-icons/hi2";
import { TrendingCollectionsJSON } from '@/types/simple-hash';
import Image from 'next/image';
import Link from 'next/link';
import { truncate } from '@/lib/utils';

type Props = {
  trendingNFTs: TrendingCollectionsJSON
}

export default function TrendNFTsCarousel({ trendingNFTs }: Props) {
  const { collections } = trendingNFTs
  
  return (

    <div className='w-full mt-2 flex flex-col lg:flex-row gap-2 items-center bg-navbg'>
      
      <div className='w-[400px] flex justify-center items-center'>
        <HiMiniFire className='text-blue-500 w-6 h-6'/>
        <h2 className='font-bold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-300 to-pink-500'>Trending NFTs</span>
        </h2>
      </div>
      
      <Scroller duration="slow">
        {collections.map((col, i) => (
          <ScrollerItem key={i}>
            <Link href={`/${col.collection_details.chains[0]}`}>
              <div className='flex gap-2 items-center'>
                <span className='font-bold'>#{i+1}</span>
                <div className='w-8 h-8 bg-gray-200 rounded-full'>
                  <Image src={col.collection_details.image_url} width={32} height={32} alt={col.collection_id} />
                </div>
                <div>
                  <h1 className='font-semibold'>{col.collection_details.name ? truncate(col.collection_details.name, 20)  : "Null"}</h1>
                  <p className='text-xs'><span className='text-blue-400'>{col.payment_token.name}</span></p>
                </div>
              </div>
            </Link>
          </ScrollerItem>
        ))}
      </Scroller>
    </div>
  )
}
