import { Metadata } from 'next';
import jars from '@/lib/api';
import Collections from '../_components/Collections';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Explore PFPs Collections | JarsNFT Marketplace",
  };
}

async function getServerSideProps() {
  const pfpCollections = await jars.collection.getTrending("pfp");

  return {
    props: {
      pfpCollections,
    }
  }
}

export default async function ProfilePicturesPage() {
  const repo = await getServerSideProps();

  return (
    <div className='container'>
      <h1 className='text-4xl my-5'>Explore Profile NFTs</h1>
      <Suspense fallback={<div>Loading....</div>}>
        <Collections category="art" collections={repo.props.pfpCollections} />
      </Suspense>
    </div>
  )
}
