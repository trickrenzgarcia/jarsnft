import { NFTCollection } from '@/components/(interfaces)'
import { Navbar } from '@/components/(layout)'
import React, { Suspense } from 'react'
import NFTBannerMetadata from '../_components/NFTBannerMetadata'
import { getMetadata } from "@/lib/ctx"
import { env } from '@/lib/env.mjs'
import { MetadataSchema } from '@/types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const metadatas: MetadataSchema[] = await fetch(env.NEXT_PUBLIC_BACKEND_URL+"/metadata/all").then((res) => res.json())

  return metadatas.map((data: MetadataSchema) => ({
    address: data.cid
  }))
}

type CollectionParams = {
  params: { address: string }
}

export default async function CollectionPage({ params: { address }}: CollectionParams) {
  const data = await getMetadata(address)

  if(!data) return notFound()
  
  return (
    <main className='h-[1400px]'>
      <Navbar display="fixed"/>
      <div className='w-full mb-[70px]'/> {/* To remove overlaps between navbar and contents */}
      <Suspense fallback={<>Loading</>}>
        <NFTBannerMetadata metadata={data} />
      </Suspense>
    </main>
  )
}
