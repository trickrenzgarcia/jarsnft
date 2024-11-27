"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { LuTableProperties } from "react-icons/lu";
import { GrStatusInfo } from "react-icons/gr";
import { BsCollection } from "react-icons/bs";
import { useChain } from "@thirdweb-dev/react";
import { shortenAddress } from "@/lib/utils";
import Image from "next/image";
import { useContractContext, useNFTContext } from "@/components/hooks/use-context";
import { Skeleton } from "@/components/ui/skeleton";

type NftAttributes = {
  trait_type: string;
  value: string;
};

export default function NftMetadata() {
  const { collection } = useContractContext();
  const { nft, loadingNFT, address } = useNFTContext();
  const chain = useChain();

  if (loadingNFT)
    return (
      <div className="space-y-8">
        <Skeleton className="h-[40px] w-[320px]" />
        <Skeleton className="h-[93px] w-[453px]" />
      </div>
    );

  return (
    <Tabs variant="underlined" aria-label="Tabs variants" className="flex-col self-center sm:flex-row sm:self-start">
      <Tab key="Properties" title="Properties" className="w-full">
        <Card className="rounded-lg border-2 bg-card p-2">
          <CardHeader className="flex gap-3">
            <LuTableProperties />
            <p className="text-md">Properties</p>
          </CardHeader>
          <Divider />
          <CardBody>
            {nft &&
              nft.metadata.attributes &&
              (nft.metadata.attributes as NftAttributes[]).map((attr: NftAttributes, i: number) => (
                <div key={i} className="flex justify-between gap-2 rounded-lg px-4 py-3 text-gray-500 hover:bg-muted/50 dark:text-gray-400">
                  <p className="text-lg">{attr.trait_type}</p>
                  <p className="text-lg font-semibold">{attr.value}</p>
                </div>
              ))}
            {nft && !nft.metadata.attributes && (
              <div className="text-gray-500 dark:text-gray-400">
                <div className="flex justify-between gap-2 rounded-lg px-4 py-3 hover:bg-muted/50">
                  <p className="">NO PROPERTIES</p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Token Details" title="Token Details" className="w-full">
        <Card className="w-full rounded-lg border-2 bg-card p-2">
          <CardHeader className="flex gap-3">
            <GrStatusInfo />
            <p className="text-md">Token Details</p>
          </CardHeader>
          <Divider />
          <CardBody>
            {nft && (
              <div className="text-gray-500 dark:text-gray-400">
                <div className="flex justify-between gap-2 rounded-lg px-4 py-3 hover:bg-muted/50">
                  <p className="">Token Id :</p>
                  <p className="font-semibold">{nft.metadata.id}</p>
                </div>
                <div className="flex justify-between gap-2 rounded-lg px-4 py-3 hover:bg-muted/50">
                  <p className="">Blockchain :</p>
                  <p className="font-semibold">{chain && chain.name}</p>
                </div>
                <div className="flex justify-between gap-2 rounded-lg px-4 py-3 hover:bg-muted/50">
                  <p className="">Token Standard :</p>
                  <p className="font-semibold">{nft.type}</p>
                </div>
                <Divider />
                <div className="flex justify-between gap-2 rounded-lg px-4 py-3 hover:bg-muted/50">
                  <p className="">Contract: </p>
                  <p className="font-semibold hover:cursor-pointer hover:underline">{shortenAddress(address, 2, 4)}</p>
                </div>
                <div className="flex justify-between gap-2 rounded-lg px-4 py-3 hover:bg-muted/50">
                  <p className="">Creators Fee: </p>
                  <p className="font-semibold">{collection && collection.seller_fee_basis_points / 100}%</p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Collection" title="Collection" className="w-full">
        <Card className="w-full border-2 bg-card p-2">
          <CardHeader className="flex gap-3">
            <BsCollection />
            <p className="text-md">Collection Info</p>
          </CardHeader>
          <Divider />
          <CardBody>
            {collection && (
              <div className="flex">
                <div className="w-fit rounded-lg p-1 shadow-sm">
                  <Image src={collection.image} width={60} height={60} alt={collection.name} className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">
                    {collection.name} {collection.symbol && `(${collection.symbol})`}
                  </p>
                  <p>{shortenAddress(address, 2, 4)}</p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}
