import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import { CollectionData } from "@/utils/getCollections";
import Link from "next/link";
import { CollectionCard } from "@/components/(interfaces)";

type AlignmentOptionType = "start" | "center" | "end" | ((viewSize: number, snapSize: number, index: number) => number);

type NFTCarouselProps = {
  collections: CollectionData[];
  withExtra?: boolean;
  align?: AlignmentOptionType;
};

export default function NFTCarousel({ collections, withExtra = false, align = "start" }: NFTCarouselProps) {
  return (
    // <div>
    //   <Carousel className="w-full " opts={{ align: align }}>
    //     <CarouselContent className="">
    //       {collections.map((data, index) => (
    //         <CarouselItem key={index} className={cn(`basis-[60%] md:basis-1/2 lg:basis-1/3`)}>
    //           <NFTCard
    //             collectionLink={data.contract}
    //             itemLink={data.contract}
    //             logo={data.image}
    //             image={data.image}
    //             name={data.name}
    //             verified={false}
    //             floor={faker.number.float({
    //               min: 1,
    //               max: 50,
    //               fractionDigits: 2,
    //             })}
    //             volume={faker.number.float({
    //               min: 100,
    //               max: 500,
    //               fractionDigits: 2,
    //             })}
    //           />
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //     <CarouselPrevious className={cn("hidden", collections.length > 4 ? "md:block" : withExtra ? "md:block" : "hidden")} />
    //     <CarouselNext className={cn("hidden", collections.length > 4 ? "md:block" : withExtra ? "md:block" : "hidden")} />
    //   </Carousel>
    // </div>
    <Carousel className="m-auto w-[100%]">
      <CarouselContent className="px-2 py-2 md:px-0">
        {collections.map((collection, index) => (
          <CarouselItem key={index} className="basis-[50%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
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
                        <p className="truncate font-medium">{collection.name}</p>
                      </div>
                      <div>
                        <MdVerified className="text-xl" />
                      </div>
                    </div>
                    <div className="flex w-full justify-between gap-1 text-sm">
                      <div>
                        <p className="">Floor</p>
                        <p className="font-semibold">{0.1} MATIC</p>
                      </div>
                      <div>
                        <p className="">Total Volume</p>
                        <p className="font-semibold">{100} MATIC</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card> */}
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div>
        {collections.length > 6 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </div>
    </Carousel>
  );
}
