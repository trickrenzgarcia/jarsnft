import { Metadata } from 'next';
import jars from '@/lib/api';
import Collections from '../_components/Collections';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore Photography Collections | JarsNFT Marketplace",
  };
}

// Renamed to avoid confusion with Next.js specific `getServerSideProps`
async function fetchTrendingCollections() {
  try {
    const photosCollections = await jars.collection.getTrending("photography");
    return photosCollections;
  } catch (error) {
    console.error('Error fetching trending photography collections:', error);
    return [];
  }
}

export default async function PhotographyPage() {
  const repo = await fetchTrendingCollections();

  return (
    <div className='container'>
      <h1 className='text-4xl'>Explore Photography NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={repo} />
      </Suspense>
    </div>
  )
}
