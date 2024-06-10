import { Metadata } from 'next';
import * as getCollections from "@/utils/getCollections";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Photography | JarsNFT Marketplace",
  };
}

export default async function PhotographyPage() {
  const photosCollections = await getCollections.getPhotosCollections();
  
  return (
    <div className='container h-[550px]'>
      <h1 className='text-4xl'>Explore Photography NFTs</h1>
    </div>
  )
}
