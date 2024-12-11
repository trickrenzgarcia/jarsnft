"use client"

import React from 'react'
import { Scroller, ScrollerItem } from '../cards/Scroller'
import { HiMiniFire } from "react-icons/hi2";
import { truncate } from '@/lib/utils';

type Props = {
  trendingNFTs: any
}

export default function TrendNFTsCarousel({  }: Props) {

  return (
    <div className='w-full flex flex-col lg:flex-row gap-2 items-center bg-navbg'>
      
      <div className='w-[400px] flex justify-center items-center'>
        <HiMiniFire className='text-blue-500 w-6 h-6'/>
        <h2 className='font-bold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-300 to-pink-500'>Trending NFTs</span>
        </h2>
      </div>
      
      <Scroller duration="slow">
        {Array.from({ length: 10 }).map((_, i) => (
          <ScrollerItem key={i}>
            <div className='flex gap-2 items-center'>
              <span className='font-bold'>#{i+1}</span>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
              <div>
                <h1 className='font-semibold'>{truncate('Long string', 14)}</h1>
                <p className='text-xs'>Volume <span className='text-green-400'>+14.26%</span></p>
              </div>
            </div>
          </ScrollerItem>
        ))}
      </Scroller>
    </div>
  )
}
