import React from 'react'
import NFTCarousel from './NFTCarousel'
import { NFTCollection } from '@/types'
import { getCollections } from '@/lib/ctx'


async function NFTContentWrapper({ title }: { title: string }) {
  const collections = await getCollections();

  return (
    <section>
      <h2 className='font-bold text-2xl text-center md:text-left mb-3'>{title}</h2>
      <NFTCarousel collections={collections} />
    </section>
  )
}

export default NFTContentWrapper