"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { NFTCollection } from '@/types'

import Image from 'next/image'
import Link from 'next/link'
import { MdVerified } from 'react-icons/md'
import { useCollectionsContext } from '@/components/(providers)/context'

interface NFTCarouselProps {
  collections: NFTCollection[]
}

export default function NFTCarousel({ collections }: NFTCarouselProps) {

  return (
    <Carousel className="w-full" 
      opts={{
        align: "start"
      }}
      >
      <CarouselContent className='py-2 px-2 md:px-0'>
        {collections.map((collection, index) => (
          <CarouselItem key={index} className='basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6'>
            <div className="cursor-pointer hover:-translate-y-1 duration-100 ease-out">
            <Link href={`/collection/${collection.contracts[0].address}`} >
              <Card className='hover:bg-opacity-65 rounded-xl'>
                <CardContent className="flex aspect-[1.25/1] items-center justify-center">
                  <Image src={collection.image_url || "https://st7yvhbtkj4kdnf3vwyncrotnch5e5b5yuga3um6thhfhgg7fwgq.arweave.net/lP-KnDNSeKG0u62w0UXTaI_SdD3FDA3RnpnOU5jfLY0?ext=png"} alt='' width={2000} height={2000} loading='eager' style={{objectFit: "cover"}} className='w-full h-full rounded-t-xl'/>
                </CardContent>
                <CardFooter className='pt-1'>
                  <p className="truncate">{collection.name}</p>
                  <MdVerified className='mx-1' />
                </CardFooter>
              </Card>
            </Link>
            </div>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      {(collections.length > 6) && (<>
        <CarouselPrevious />
        <CarouselNext />
      </>)}
    </Carousel>
  )
}