import { Metadata } from 'next';
import * as getCollections from "@/utils/getCollections";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "PFPs | JarsNFT Marketplace",
  };
}

export default async function ProfilePicturesPage() {
  const pfpCollections = await getCollections.getPFPsCollections();
  
  return (
    <div className='container h-[550px]'>
      <h1 className='text-4xl'>Explore Profile NFTs</h1>
    </div>
  )
}
