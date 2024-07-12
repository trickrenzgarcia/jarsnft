import { Metadata } from 'next';
import * as getCollections from "@/utils/getCollections";
import { Suspense } from 'react';
import Collections from '../_components/Collections';
import { BASE_URL } from '@/lib/ctx';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore Arts Collections | JarsNFT Marketplace",
  };
}

export default async function ArtsPage() {
  // can't build while fetching at the same time in same URL localhost:3000
  // const artsCollection = await getCollections.getCollectionsByCategory("art");

  // for building purposes, localhost:5000 is used instead
  const response = await fetch(`${BASE_URL}/collections/trending?category=art&page=${1}&limit=${50}`);
  const { collections } = await response.json();
  const artsCollection = collections.map((nft: any) => nft);

  return (
    <div className='container'>
      <h1 className='text-4xl'>Explore Art NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={artsCollection} />
      </Suspense>

    </div>
  )
}
