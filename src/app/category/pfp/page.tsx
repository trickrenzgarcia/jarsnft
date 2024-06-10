import { Metadata } from 'next';
import * as getCollections from "@/utils/getCollections";
import Collections from '../_components/Collections';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore PFPs Collections | JarsNFT Marketplace",
  };
}

export default async function ProfilePicturesPage() {
  const pfpCollections = await getCollections.getPFPsCollections();
  
  return (
    <div className='container h-[550px]'>
      <h1 className='text-4xl'>Explore Profile NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={pfpCollections} />
      </Suspense>
    </div>
  )
}
