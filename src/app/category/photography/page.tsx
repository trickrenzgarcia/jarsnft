import { Metadata } from 'next';
import * as getCollections from "@/utils/getCollections";
import Collections from '../_components/Collections';
import { Suspense } from 'react';
import { BASE_URL } from '@/lib/ctx';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore Photography Collections | JarsNFT Marketplace",
  };
}

export default async function PhotographyPage() {
  // can't build while fetching at the same time in same URL localhost:3000
  // const photosCollections = await getCollections.getCollectionsByCategory("photography");

  // for building purposes, localhost:5000 is used instead
  const response = await fetch(`${BASE_URL}/collections/trending?category=photography&page=${1}&limit=${50}`);
  const { collections } = await response.json();
  const photosCollections = collections.map((nft: any) => nft);

  return (
    <div className='container'>
      <h1 className='text-4xl'>Explore Photography NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={photosCollections} />
      </Suspense>
    </div>
  )
}
