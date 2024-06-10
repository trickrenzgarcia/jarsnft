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
import { NFTCard as NFTCardType } from "../_types";
import { NFTCollection } from "@/lib/core/types";
import { faker } from "@faker-js/faker";
import { CollectionData } from "@/utils/getCollections";

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
                `basis-[75%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4`,
              )}
            >
              <NFTCard
                collectionLink={data.contract}
                itemLink={data.contract}
                logo={data.image}
                image={data.image}
                name={data.name}
                verified={false}
                floor={faker.number.float({
                  min: 1,
                  max: 50,
                  fractionDigits: 2,
                })}
                volume={faker.number.float({
                  min: 100,
                  max: 500,
                  fractionDigits: 2,
                })}
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
