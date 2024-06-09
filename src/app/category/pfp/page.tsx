import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "PFPs | JarsNFT Marketplace",
  };
}

export default function ProfilePicturesPage() {
  return (
    <div className='container h-[550px]'>
      <h1 className='text-4xl'>Explore Profile NFTs</h1>
    </div>
  )
}
