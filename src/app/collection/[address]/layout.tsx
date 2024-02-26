import { Navbar } from '@/components/(layout)';
import { Suspense } from 'react';
import NFTBannerMetadata from '../_components/NFTBannerMetadata';
import { MetadataSchema } from '@/types';
import { env } from '@/lib/env.mjs';
import { getMetadata } from '@/lib/ctx';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Input } from '@nextui-org/react';

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
      <div className='w-full pl-6'>
        <section className='hidden md:block w-[350px]'>
          <Separator className='w-full my-3 bg-zinc-800' />
          <div className='flex justify-between'>
            <Input />
          </div>
        </section>
        <section className='w-full'>
          {children}
        </section>
      </div>
    </main>
  )
}

function LoadingMetadata() {
  return <div>Loading...</div>
}