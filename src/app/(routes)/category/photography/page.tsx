import { Metadata } from 'next';
import jars from '@/lib/api';
import Collections from '../_components/Collections';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore Photography Collections | JarsNFT Marketplace",
  };
}

async function getServerSideProps() {
  const photosCollections = await jars.collection.getTrending("photography");

  return {
    props: {
      photosCollections,
    }
  }
}

export default async function PhotographyPage() {
  const repo = await getServerSideProps();

  return (
    <div className='container'>
      <h1 className='text-4xl'>Explore Photography NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={repo.props.photosCollections} />
      </Suspense>
    </div>
  )
}
