import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Arts | JarsNFT Marketplace",
  };
}

export default function ArtsPage() {
  return (
    <div className='container h-[700px]'>
      <h1 className='text-4xl'>Explore Art NFTs</h1>
    </div>
  )
}
