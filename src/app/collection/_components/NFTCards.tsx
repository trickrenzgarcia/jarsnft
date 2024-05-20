"use client";

import {
  useActiveListings,
  useContract,
  useNFTs,
  useValidDirectListings,
} from "@thirdweb-dev/react";
import ErrorNFTCards from "./ErrorNFTCards";
import LoadingNFTCards from "./LoadingNFTCards";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
// import { useEffect } from "react";
// import { jars } from "@/lib/core/api";

export default function NFTCards({ address }: { address: string }) {
  const { contract } = useContract(address);
  const { contract: marketPlaceContract } = useContract(
    "0x69b05D8ed116Bb160B8a268a4315D2767123eFA1",
    "marketplace-v3",
  );
  const { data: nfts, isError, isLoading } = useNFTs(contract);
  const { data: listings, isLoading: loadingListings } = useValidDirectListings(
    marketPlaceContract,
    {
      count: 100,
      start: 0,
      tokenContract: address,
    },
  );
  //marketPlaceContract?.directListings

  if (isError) return <ErrorNFTCards />;

  if (isLoading) return <LoadingNFTCards />;

  if (loadingListings)
    return (
      <>
        <div className="flex w-full items-start">
          <section className="relative p-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
              <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
              <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
              <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
              <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
              <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
            </div>
          </section>
        </div>
      </>
    );

  if (nfts)
    return (
      <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {nfts.map((nft, i) => (
          <Link key={i} href={`/collection/${address}/${nft.metadata.id}`}>
            <Card className="rounded-xl hover:-translate-y-1">
              <CardContent className="flex aspect-[1/1] items-center justify-center ">
                <Image
                  src={
                    nft.metadata.image ||
                    "/assets/placeholder/nft_placeholder.svg"
                  }
                  alt="nft image"
                  className="h-full w-full rounded-t-2xl"
                  width={500}
                  height={500}
                  loading="eager"
                  style={{
                    objectFit: "cover",
                    minWidth: "280px",
                    minHeight: "280px",
                  }}
                />
              </CardContent>
              <CardFooter className="mt-3">
                <div className="flex w-full flex-col">
                  <h1 className="truncate text-sm font-semibold">
                    {nft.metadata.name}
                  </h1>
                  <p>Price: </p>
                  <p>Last Sale: </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    );
}
