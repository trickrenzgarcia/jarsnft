"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CollectionPopularData } from "@/types";
import Link from "next/link";
import CollectionCard from "./CollectionCard";

type NFTCarouselProps = {
  nftCollections: CollectionPopularData[];
};

export default function NFTCarousel({ nftCollections }: NFTCarouselProps) {
  return (
    <Carousel className="m-auto w-[95%]">
      <CarouselContent className="px-2 py-2 md:px-0">
        {nftCollections.map((collection, index) => (
          <CarouselItem
            key={index}
            className="basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <div className="animate-fade animate-once animate-duration-[1200ms] animate-ease-in cursor-pointer duration-100 ease-out hover:-translate-y-1">
              <Link href={`/collection/${collection.contract}`}>
                <CollectionCard item={collection} hideFloorPrice={false} />
                {/* <Card className="rounded-2xl hover:bg-opacity-65">
                  <CardContent className="flex aspect-[1.25/1] items-center justify-center">
                    <Image
                      src={
                        collection.image ||
                        "https://st7yvhbtkj4kdnf3vwyncrotnch5e5b5yuga3um6thhfhgg7fwgq.arweave.net/lP-KnDNSeKG0u62w0UXTaI_SdD3FDA3RnpnOU5jfLY0?ext=png"
                      }
                      alt=""
                      width={600}
                      height={600}
                      loading="eager"
                      style={{ objectFit: "cover" }}
                      className="h-full w-full rounded-t-2xl"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 pt-2">
                    <div className="flex w-full items-center gap-1">
                      <div className="truncate">
                        <p className="truncate font-medium">
                          {collection.name}
                        </p>
                      </div>
                      <div>
                        <MdVerified className="text-xl" />
                      </div>
                    </div>
                    <div className="flex w-full justify-between gap-1 text-sm">
                      <div>
                        <p className="">Floor</p>
                        <p className="font-semibold">{0.1} POL</p>
                      </div>
                      <div>
                        <p className="">Total Volume</p>
                        <p className="font-semibold">{100} POL</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card> */}
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden lg:block">
      {nftCollections.length > 6 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </> 
      )}
      </div>
    </Carousel>
  );
}
