import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { NFTCard as NFTCardType } from "../_types";

type AlignmentOptionType =
  | "start"
  | "center"
  | "end"
  | ((viewSize: number, snapSize: number, index: number) => number);

type NFTCarouselProps = {
  collections: NFTCardType[];
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
          <CarouselItem
            className={cn(
              "basis-[75%] md:basis-1/2 lg:basis-1/4",
              (withExtra && "flex") || "hidden",
            )}
          >
            <Card className={cn("mx-auto h-[480px] flex-col justify-around")}>
              <CardHeader>
                <CardTitle className="text-3xl">
                  Get Your Digital Assets Now
                </CardTitle>
              </CardHeader>
              <CardContent className="mb-14 px-6">
                <p>
                  Dive into our curated collection of one-of-a-kind digital
                  assets! Explore, buy, and sell unique NFTs within our vibrant
                  marketplace.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  className="rounded-md bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-800 active:bg-neutral-950"
                  href="#"
                >
                  Explore
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
          {collections.map((data, index) => (
            <CarouselItem
              key={index}
              className={cn(
                `basis-[75%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4`,
              )}
            >
              <NFTCard
                collectionLink={data.collection}
                itemLink={data.itemLink}
                logo={data.logo}
                image={data.image}
                name={data.name}
                verified={data.is_verified}
                floor={data.floor_price}
                volume={data.volume}
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
            collections.length >= 4 && withExtra && "md:block",
          )}
        />
      </Carousel>
    </div>
  );
}
