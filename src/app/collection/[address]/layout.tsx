import { Navbar } from '@/components/(layout)';
import { Suspense } from 'react';
import NFTBannerMetadata from '../_components/NFTBannerMetadata';
import { MetadataSchema } from '@/types';
import { env } from '@/lib/env.mjs';
import { getMetadata } from '@/lib/ctx';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Input } from '@nextui-org/react';
import PriceRangeValue from '../_components/PriceRangeValue';

// For better user experience SSG (Static Site Generation)
// export async function generateStaticParams() {
//   const metadatas: MetadataSchema[] = await fetch(env.NEXT_PUBLIC_BACKEND_URL+"/metadata/all").then((res) => res.json())

//   return metadatas.map((data: MetadataSchema) => ({
//     address: data.cid
//   }))
// }

type CollectionParams = {
  params: { address: string },
  children: React.ReactNode
}

export default async function CollectionLayout({ params: { address }, children } : CollectionParams ) {
  const data = await getMetadata(address)

  if(!data) return notFound()

  return (
    <main>
      <header>
        <Navbar display="fixed"/>
      </header>
      <div className='w-full mb-[70px]'/> 
      <Suspense fallback={<LoadingMetadata />}>
        <NFTBannerMetadata metadata={data} />
      </Suspense>
      <div className='w-full flex items-start'>
        <section className='sticky hidden md:block w-[380px] min-w-[380px] overflow-y-auto top-[100px] left-0 h-auto px-6 border-r border-zinc-800'>
          <Separator className='w-full my-3 bg-zinc-800' />
          <div className=''>
            <PriceRangeValue />
          </div>
        </section>
        <section className='relative p-6'>
          {children}
        </section>
      </div>
    </main>
  )
}

function LoadingMetadata() {
  return <div>Loading...</div>
}