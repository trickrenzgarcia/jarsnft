"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import NFTCard from "./NFTCard";
import { faker } from "@faker-js/faker";
import { CollectionData } from "@/types";


type AlignmentOptionType =
  | "start"
  | "center"
  | "end"
  | ((viewSize: number, snapSize: number, index: number) => number);

type NFTCarouselProps = {
  collections: CollectionData[];
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
          {collections.map((data, index) => (
            <CarouselItem
              key={index}
              className={cn(
                `max-[490px]:basis-full basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 pt-1`,
              )}
            >
              <NFTCard
                item={data}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={cn(
            "hidden",
            collections.length > 4
              ? "md:block"
              : withExtra
                ? "md:block"
                : "hidden",
          )}
        />
        <CarouselNext
          className={cn(
            "hidden",
            collections.length > 4
              ? "md:block"
              : withExtra
                ? "md:block"
                : "hidden",
          )}
        />
      </Carousel>
    </div>
  );
}
