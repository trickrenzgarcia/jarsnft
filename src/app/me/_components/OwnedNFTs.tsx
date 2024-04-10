"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlchemyNFTs } from "@/lib/core/types";
import { ipfsToCfIpfs } from "@/lib/utils";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type OwnedNFTsProps = {
  nfts: AlchemyNFTs | undefined;
  userLoading: boolean;
  loadingNfts: boolean;
  numCards: number;
};

export default function OwnedNFTs({
  nfts,
  userLoading,
  loadingNfts,
  numCards,
}: OwnedNFTsProps) {
  return (
    <div className="flex w-full flex-col rounded-2xl border p-2">
      <div className="ml-3 text-lg font-bold">
        Owned Item{(nfts?.totalCount || 0 > 1) && "s"}: {nfts?.totalCount || 0}
      </div>
      {userLoading || loadingNfts ? (
        <div className="grid w-full grid-cols-2 justify-center gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="w-full" key={i}>
              <Skeleton className="h-[200px] w-full md:h-[250px]" />
            </div>
          ))}
        </div>
      ) : (
        (nfts && (
          <div className="w-full columns-2 space-y-4 p-5 sm:columns-3 md:columns-4 lg:columns-5 xl:grid-cols-5 2xl:grid-cols-6">
            {nfts?.ownedNfts.map((nft) => (
              <div key={nft.name + nft.tokenId} className="w-full rounded-2xl">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link href={`${nft.contract.address}/${nft.tokenId}`}>
                      <Image
                        isBlurred
                        width={512}
                        height={512}
                        src={ipfsToCfIpfs(nft.image.originalUrl)}
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
                      src={ipfsToCfIpfs(nft.image.originalUrl)}
                      alt={nft.name}
                    />
                    <div className="flex w-full max-w-72 flex-col px-2">
                      <div className="truncate text-lg font-bold">
                        {nft.name}asd awdawdawdka whdkjha
                        wkjdhkjawhdjkawhjdhajkdh
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
            <div className="relative grid w-auto grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
              {Array.from({ length: numCards }).map((_, i) => (
                <div key={i} className="w-full">
                  <Card className="border bg-muted/50 p-2">
                    <CardContent className="h-[200px] w-full"></CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="absolute block  w-full">
              <h1 className="bottom-0 top-0 h-full w-full text-center">
                awdSADAWD
              </h1>
            </div>
          </div>
        )
      )}
    </div>
  );
}
