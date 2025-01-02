import CarouselComponent from '@/components/cards/CarouselComponent'
import NFTHeroCard from '@/components/cards/NFTHeroCard'
import NavBar from '@/components/layouts/nav-bar'
import { CarouselItem } from '@/components/ui/carousel'
import { getTopCollections } from '@/lib/simple-hash'
import Link from 'next/link'

type PagePropsParams = {
  params: Promise<{ chain: string }>
}

export default async function Chain({ params }: PagePropsParams) {
  const { chain } = await params
  const topCollections = await getTopCollections(chain);

  return (
    <div>
      <NavBar />
      <CarouselComponent
        className='bg-gradient-to-b from-navbg via-violet-500 to-background pl-6 py-6'
        data={topCollections.collections}
        renderItem={(col) => (
          <CarouselItem key={col.collection_id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Link href={`/`} className="p-1">
              <NFTHeroCard collection={col} />
            </Link>
          </CarouselItem>
      )}/>
    </div>
  )
}
