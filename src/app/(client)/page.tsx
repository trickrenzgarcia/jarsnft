import CarouselComponent from '@/components/cards/CarouselComponent';
import NavBar from '@/components/layouts/nav-bar';
import { CarouselItem } from '@/components/ui/carousel';
import { nftCollections } from '@/lib/fake-data';
import { getTopCollections } from '@/lib/simple-hash';
import Link from 'next/link';
import NFTDropCard from '@/components/cards/NFTDropCard';
import NFTHeroCard from '@/components/cards/NFTHeroCard';

export default async function Home() {
  const topCollections = await getTopCollections("ethereum,polygon");
  
  console.log(topCollections.collections);

  return (
    <div className=''>
      <NavBar />
      
      <CarouselComponent
        className='bg-gradient-to-b from-navbg via-violet-500 to-background px-2 md:px-6 py-6'
        data={topCollections.collections}
        renderItem={(col) => (
          <CarouselItem key={col.collection_id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Link href={`/${col.collection_details.chains[0]}/${col.payment_token.address ?? col.collection_details.metaplex_mint ?? col.collection_details.mpl_core_collection_address ?? col.collection_details.top_contracts[0].split('.')[1]}`} className="p-1">
              <NFTHeroCard collection={col} />
            </Link>
          </CarouselItem>
      )}/>

      <CarouselComponent
        className='px-2 md:px-6 py-6'
        data={nftCollections}
        title='Latest NFT Drop'
        renderItem={(col, i) => (
          <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
            <NFTDropCard collection={col} />
          </CarouselItem>
        )}
      />
    </div>
  );
}
