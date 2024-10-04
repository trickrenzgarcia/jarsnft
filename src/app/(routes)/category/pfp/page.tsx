import { Metadata } from 'next';
import jars from '@/lib/api';
import Collections from '../_components/Collections';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore PFPs Collections | JarsNFT Marketplace",
  };
}

export default async function ProfilePicturesPage() {
  //const pfpCollections = await jars.collection.getTrending("pfp");

  return (
    <div className='container'>
      <h1 className='text-4xl my-5'>Explore Profile NFTs</h1>
      {/* <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={pfpCollections} />
      </Suspense> */}
    </div>
  )
}
