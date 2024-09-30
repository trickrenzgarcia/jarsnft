"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { SimpleHashNFT } from "@/types/simple-hash/nft";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type OwnedNFTsProps = {
  nfts: SimpleHashNFT[] | undefined;
  userLoading: boolean;
  loadingNfts: boolean;
};

export default function OwnedNFTs({
  nfts,
  userLoading,
  loadingNfts,
}: OwnedNFTsProps) {
  return (
    <div className="flex w-full flex-col rounded-2xl border p-2">
      <div className="m-4 text-lg font-bold">
        Owned Item{(nfts?.length || 0 > 1) && "s"}: {nfts?.length || 0}
      </div>
      {userLoading || loadingNfts ? (
        <div className="container grid w-full grid-cols-2 place-items-center gap-5 py-8 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton className="size-72" key={i} />
          ))}
        </div>
      ) : (
        (nfts && (
          <div className="w-full columns-2 space-y-4 p-5 sm:columns-3 md:columns-4 lg:columns-5 xl:grid-cols-5 2xl:grid-cols-6">
            {nfts?.map((nft) => (
              <div key={nft.name + nft.token_id} className="w-full rounded-2xl">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link
                      href={`/collection/${nft.contract_address}/${nft.token_id}`}
                    >
                      <Image
                        width={512}
                        height={512}
                        src={
                          nft.image_url ||
                          "/assets/placeholder/nft_placeholder.svg"
                        }
                        alt={nft.name}
                        className="hover:-translate-y-[2px] hover:border-2"
                      />
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="flex w-fit bg-background">
                    <Image
                      isBlurred
                      width={100}
                      height={100}
                      src={
                        nft.image_url ||
                        "/assets/placeholder/nft_placeholder.svg"
                      }
                      alt={nft.name}
                    />
                    <div className="flex w-full max-w-72 flex-col px-2">
                      <div className="truncate text-lg font-bold">
                        {nft.name}
                      </div>
                      <div className="truncate text-sm">
                        {nft.contract.name}
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        )) || (
          <div className="mx-auto flex w-full flex-col p-5">
            <div className="block mb-5 w-full">
              <h1 className="bottom-0 top-0 h-full w-full text-center">
                No NFTs Found
              </h1>
            </div>
            <div className="relative grid w-auto grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-full">
                  <Card className="border bg-muted/50 p-2">
                    <CardContent className="h-[200px] w-full"></CardContent>
                  </Card>
                </div>
              ))} 
            </div>
          </div>
        )
      )}
    </div>
  );
}
