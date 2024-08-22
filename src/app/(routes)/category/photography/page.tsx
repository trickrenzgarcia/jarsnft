import { Metadata } from 'next';
import * as getCollections from "@/utils/getCollections";
import Collections from '../_components/Collections';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore Photography Collections | JarsNFT Marketplace",
  };
}

export default async function PhotographyPage() {
  const photosCollections = await getCollections.getCollectionsByCategory("photography");

  return (
    <div className='container'>
      <h1 className='text-4xl'>Explore Photography NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={photosCollections} />
      </Suspense>
    </div>
  )
}
