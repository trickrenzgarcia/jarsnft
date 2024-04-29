"use client";

import { useContract, useNFTs } from "@thirdweb-dev/react";
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
import { useEffect } from "react";
import { jars } from "@/lib/core/api";

export default function NFTCards({ address }: { address: string }) {
  const { contract } = useContract(address);
  const { data: nfts, isError, isLoading } = useNFTs(contract);

  if (isError) return <ErrorNFTCards />;

  if (isLoading) return <LoadingNFTCards />;

  useEffect(() => {
    async function updateViewCount() {
      const view = await jars.collection.updateCollectionViewCount(address);
      console.log(view);
      return view;
    }
    if (nfts) {
      updateViewCount();
    }
  }, []);

  if (nfts)
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
                  style={{ objectFit: "cover" }}
                />
              </CardContent>
              <CardFooter className="mt-3">
                <div className="flex w-full flex-col">
                  <h1 className="truncate text-sm font-semibold">
                    {nft.metadata.name}
                  </h1>
                  <h1 className="">Price {0}</h1>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    );
}
