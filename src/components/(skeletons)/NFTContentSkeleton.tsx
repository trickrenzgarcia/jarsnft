"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function NFTContentWrapper() {
  return (
    <section className="pb-12 pt-8">
      <h2 className="mb-3 text-center text-2xl font-bold md:text-left">
        Loading Collections...
      </h2>
      <NFTCarouselSkeleton />
    </section>
  );
}

function NFTCarouselSkeleton() {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="px-2 py-2 md:px-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
          >
            <div className="cursor-pointer duration-100 ease-out hover:-translate-y-1">
              <Card className="rounded-xl hover:bg-opacity-65">
                <CardContent className="flex aspect-[1.25/1] items-center justify-center">
                  <Skeleton className="h-full w-full rounded-t-xl" />
                </CardContent>
                <CardFooter className="flex flex-col items-start pb-5 pt-3">
                  <Skeleton className="h-5 w-full" />
                  <div className="grid w-full grid-cols-2 gap-2 pt-3">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-[80%]" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
