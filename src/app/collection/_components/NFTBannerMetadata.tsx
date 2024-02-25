"use client"

import { open_sans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md'
import { ReadMore } from './ReadMore';
import React from 'react';

export default function NFTBannerMetadata() {

  const [data] = React.useState({
    name: "Jajars",
    amountOfNfts: 100,
    img: "/assets/jars256.png",
    bannerImg: "/assets/collection_banner.webp",
    description: "Pudgy Penguins is a collection of 8,888 NFTs, accelerating Web3 innovation through IP utilization and community empowerment. Embodying love, empathy, & compassion, the Pudgy Penguins are a beacon of good vibes & positivity for everyone. Each holder receives exclusive access to experiences, events, IP licensing opportunities and more.",
    socials: [{
      twitter: "@jajars",
      link: "/"
    }, {
      discord: "Server name",
      link: "/"
    }]
  })

  return (
    <main className='w-full flex flex-col'>
        <div className='relative w-auto h-[200px] md:h-[400px] '>
          <Image src={data.bannerImg} fill style={{
              objectFit: "cover"
            }} 
            alt='Collection Banner'
            className='opacity-100 md:opacity-50 dark:md:opacity-30'
          />
        </div>
        <div className='absolute hidden md:block w-full h-[400px] px-7 py-6 shadow-[inset_0_-50px_100px_rgba(255,255,255,1)] dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)]'>

          <section className='flex justify-between mb-4'>
            <div className='flex items-center gap-3'>
              <Image 
                src={data.img}
                width={125} height={125} 
                alt='Collection image'
                className='border rounded-xl'
              />
              <div className={cn('w-[600px]', open_sans.className)}>
                <h1 className={cn('truncate font-bold text-3xl flex items-center gap-2')}>
                  <span>{data.name}</span>
                  <MdVerified className='text-blue-500' />
                </h1>
                <p className='font-bold'>A collection of {data.amountOfNfts} Jajars nft</p>
              </div>
            </div>
          </section>

          <section className='w-full flex justify-between '>
            <div className='w-[500px] dark:text-gray-300 text-sm font-semibold'>
              <ReadMore id='collection-description' text={data.description}
              />
            </div>
            <div className=''>sdasd</div>
          </section>

          <section className='w-full flex justify-between bg-blue-300/20'>
            <div className='w-[500px]'>
              
            </div>
          </section>

        </div>
      </main>
  )
}