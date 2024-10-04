import { Metadata } from 'next';
import jars from '@/lib/api';
import { Suspense } from 'react';
import Collections from '../_components/Collections';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore Arts Collections | JarsNFT Marketplace",
  };
}

// Rename to avoid confusion with Next.js's built-in getServerSideProps
async function fetchArtsCollections() {
  try {
    const artsCollection = await jars.collection.getTrending("art");
    return artsCollection;
  } catch (error) {
    console.error('Error fetching art collections:', error);
    return [];  // Return an empty array if there is an error
  }
}

export default async function ArtsPage() {
  const repo = await fetchArtsCollections();

  return (
    <div className='container'>
      <h1 className='text-4xl'>Explore Art NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={repo} />
      </Suspense>

    </div>
  )
}
