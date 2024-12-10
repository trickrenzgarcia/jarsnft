"use client"

import React from 'react'
import '@/css/scroller.css'
import { Scroller, ScrollerItem } from '../cards/Scroller'
import { HiMiniFire } from "react-icons/hi2";
import { truncate } from '@/lib/utils';

export default function TrendNFTsCarousel() {

  return (
    <div className='flex gap-2 items-center bg-navbg'>
      <div className='flex gap-1 items-center justify-center w-[300px]'>
        <HiMiniFire size={24} className='text-blue-500'/>
        <span>Trending NFTs</span>
      </div>
      <Scroller duration="slow">
        {Array.from({ length: 10 }).map((_, i) => (
          <ScrollerItem key={i}>
            <div className='flex gap-2 items-center'>
              <span className='font-bold'>#{i+1}</span>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
              <div>
                <h1 className='font-semibold'>{truncate('Long string', 14)}</h1>
                <p className='text-sm text-green-400'>+83.23%</p>
              </div>
            </div>
          </ScrollerItem>
        ))}
      </Scroller>
    </div>
  )
}
