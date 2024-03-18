import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import NFTCard from "./NFTCard";

type AlignmentOptionType =
  | "start"
  | "center"
  | "end"
  | ((viewSize: number, snapSize: number, index: number) => number);

type NFTCarouselProps = {
  collections?: any[];
  withExtra?: boolean;
  align?: AlignmentOptionType;
};

export default function NFTCarousel({
  collections,
  withExtra = false,
  align = "start",
}: NFTCarouselProps) {
  return (
    <div>
      <Carousel className="w-full " opts={{ align: align }}>
        <CarouselContent className="">

          <CarouselItem className={cn("basis-[75%] md:basis-1/2 lg:basis-1/4", withExtra && ("flex") || ("hidden"))}>
            <Card className={cn("flex-col justify-around mx-auto h-[480px]")}>
              <CardHeader>
                <CardTitle className="text-3xl">
                  Get Your Digital Assets Now
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 mb-14">
                <p>
                  Dive into our curated collection of one-of-a-kind digital
                  assets! Explore, buy, and sell unique NFTs within our vibrant
                  marketplace.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="px-6 py-3 hover:bg-neutral-800 bg-neutral-900 active:bg-neutral-950 text-white rounded-md"
                  href="#"
                >
                  Explore
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>

          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(`basis-[75%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4`)}
            >
            <NFTCard
              collectionLink="#"
              itemLink="#"
              logo="/assets/jars256.png"
              image="/assets/ex2.png"
              name="Azuki"
              verified={false}
              floor="5.6K"
              volume="109.5K"
            />
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
}
