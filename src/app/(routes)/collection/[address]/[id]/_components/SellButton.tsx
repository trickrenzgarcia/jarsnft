"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { type NFT, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { MdVerified } from "react-icons/md";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import CreateDirectListing from "./CreateDirectListing";
import CreateAuction from "./CreateAuction";
import Image from "next/image";
import { useContractContext } from "@/components/hooks/use-context";

type SellButtonProps = {
  nft: NFT | undefined;
  contractAddress: string;
};

export default function SellButton({ nft }: SellButtonProps) {
  const router = useRouter();
  const { collection } = useContractContext();
  const [sellState, setSellState] = useState<"idle" | "confirmation" | "success">("idle");

  return (
    <AlertDialog>
      {/* Trigger Sell Button */}
      <AlertDialogTrigger asChild>
        <Button className="h-[3] w-full text-lg font-semibold">Sell</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="w-3/4 p-0">
        {/* Header */}
        <AlertDialogHeader className="px-8 pt-8">
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="text-2xl font-bold">Sell</AlertDialogTitle>
            <AlertDialogCancel className="rounded-full" disabled={sellState != "idle"}>
              x
            </AlertDialogCancel>
          </div>
          <AlertDialogDescription>Enter the price of the item. Click &quot;CONFIRM AND SELL&quot; to proceed.</AlertDialogDescription>
        </AlertDialogHeader>

        {/* Body */}
        <div className="flex justify-between gap-5 px-8 py-4">
          {(nft?.metadata.image && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              width="100px"
              height="100px"
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                minWidth: "100px",
                minHeight: "100px",
              }}
              requireInteraction
              className="rounded-lg border border-accent bg-accent/50"
            />
          )) || (
            <Image
              src="/assets/placeholder/nft_placeholder.svg"
              width={100}
              height={100}
              alt="image of an NFT"
              className="rounded-lg border border-accent bg-accent/50"
            />
          )}

          <div className="flex w-full flex-col gap-2 py-4">
            <h1 className="text-xl font-bold">{nft?.metadata.name}</h1>
            <p className="flex items-center gap-1 text-sm text-gray-400">
              {collection.name}
              <MdVerified className="text-blue-500" />
            </p>
          </div>
        </div>

        {/* Footer */}
        <AlertDialogFooter className="flex flex-col rounded-b-lg rounded-t-3xl bg-neutral-200 px-6 py-8 dark:bg-neutral-800 sm:flex-col sm:space-x-0">
          <Tabs variant="underlined" aria-label="Options" isDisabled={sellState != "idle"}>
            <Tab key="direct" title="Direct Listing">
              <CreateDirectListing sellState={sellState} setSellState={setSellState} />
            </Tab>
            <Tab key="auction" title="Auction">
              <CreateAuction sellState={sellState} setSellState={setSellState} />
            </Tab>
          </Tabs>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
