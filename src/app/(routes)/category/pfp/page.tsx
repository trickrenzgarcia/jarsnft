import { Metadata } from 'next';
import jars from '@/lib/api';
import Collections from '../_components/Collections';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore PFPs Collections | JarsNFT Marketplace",
  };
}

// Renaming getServerSideProps to avoid confusion and adding error handling
async function fetchPFPCollections() {
  try {
    const pfpCollections = await jars.collection.getTrending("pfp");
    return pfpCollections;
  } catch (error) {
    console.error('Error fetching PFP collections:', error);
    return [];  // Return an empty array or handle as needed
  }
}
export default async function ProfilePicturesPage() {
  const repo = await fetchPFPCollections();

  return (
    <div className='container'>
      <h1 className='text-4xl my-5'>Explore Profile NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={repo} />
      </Suspense>
    </div>
  )
}
