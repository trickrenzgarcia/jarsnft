import CarouselComponent from '@/components/cards/CarouselComponent'
import NavBar from '@/components/layouts/nav-bar'
import { Card, CardContent } from '@/components/ui/card'
import { CarouselItem } from '@/components/ui/carousel'
import { getTopCollections } from '@/lib/simple-hash'
import Image from 'next/image'
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
        data={topCollections.collections}
        renderItem={(col) => (
          <CarouselItem key={col.collection_id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Link href={`/`} className="p-1">
              <Card>
                <CardContent className="flex w-full aspect-square p-0 overflow-hidden rounded-xl">
                  <div className='relative w-full h-full z-10 group'>
                    {col.collection_details.image_url && <Image
                      src={col.collection_details.image_url} fill alt={`${col.collection_details.name}.${col.collection_id}`}
                      className='object-cover rounded-xl select-none transition-transform duration-300 ease-in-out group-hover:scale-110'
                    />}
                    <div className='absolute flex p-4 shadow-inner-bottom items-end w-full h-full z-50 hover:bg-background/60'>
                      <h1 className='font-bold text-xl select-none'>{col.collection_details.name}</h1>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
      )}/>
    </div>
  )
}
