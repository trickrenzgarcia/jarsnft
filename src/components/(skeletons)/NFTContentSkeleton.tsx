"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export default function NFTContentWrapper() {
  return (
    <section className='pt-8 pb-12'>
      <h2 className='font-bold text-2xl text-center md:text-left mb-3'>Loading Collections...</h2>
      <NFTCarouselSkeleton />
    </section>
  )
}

function NFTCarouselSkeleton() {
  return (
    <Carousel className="w-full" 
      opts={{
        align: "start"
      }}
      >
      <CarouselContent className='py-2 px-2 md:px-0'>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className='basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6'>
            <div className="cursor-pointer hover:-translate-y-1 duration-100 ease-out">
            
              <Card className='hover:bg-opacity-65 rounded-xl'>
                <CardContent className="flex aspect-[1.25/1] items-center justify-center">
                  <Skeleton className='w-full h-full rounded-t-xl'/>
                </CardContent>
                <CardFooter className='pt-1'>
                  <Skeleton className="w-full h-3"/>
                </CardFooter>
              </Card>
            </div>
            
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
