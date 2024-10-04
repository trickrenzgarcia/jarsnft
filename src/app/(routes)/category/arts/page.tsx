import { Metadata } from 'next';
import jars from '@/lib/api';
import { Suspense } from 'react';
import Collections from '../_components/Collections';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore Arts Collections | JarsNFT Marketplace",
  };
}

async function getServerSideProps() {
  const artsCollection = await jars.collection.getTrending("art");

  return {
    props: {
      artsCollection,
    }
  }
}

export default async function ArtsPage() {
  const repo = await getServerSideProps();

  return (
    <div className='container'>
      <h1 className='text-4xl'>Explore Art NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={repo.props.artsCollection} />
      </Suspense>

    </div>
  )
}
