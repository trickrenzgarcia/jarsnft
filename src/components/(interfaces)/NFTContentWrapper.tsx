"use client"

import React from 'react'
import NFTCarousel from './NFTCarousel'
import { NFTCollection } from '@/types'


function NFTContentWrapper({ title }: { title: string }) {
  return (
    <section className='pt-8 pb-12'>
      <h2 className='font-bold text-2xl text-center md:text-left mb-3'>{title}</h2>
      <NFTCarousel />
    </section>
  )
}

export default NFTContentWrapper