"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

type ApprovePurchaseType = {
  nftImageLink: string;
  nftName: string;
  nftCollectionName: string;
  isVerified: boolean;
  networkChain: string;
  nftPrice: number;
  nftQuantity: number;
  nftPriceInDollars: number;
};

export default function ApprovePurchase({
  nftImageLink,
  nftName,
  nftCollectionName,
  isVerified,
  networkChain,
  nftPrice,
  nftQuantity,
  nftPriceInDollars,
}: ApprovePurchaseType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-foreground-900 text-background hover:bg-foreground-700
         hover:text-background"
        >
          CONFIRM AND PAY
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-[550px] p-0">
        {/* Header */}
        <DialogHeader className="px-8 pt-8">
          <DialogTitle className="text-2xl font-bold">
            Approve Purchase
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="flex justify-between px-8 py-4">
          <Image
            src={nftImageLink}
            width={150}
            height={150}
            alt="image of an NFT"
          />

          <div className="flex flex-col py-4">
            <h1 className="mb-2 text-2xl font-bold">{nftName}</h1>
            <div className="flex gap-2">
              <h2>{nftCollectionName}</h2>
              {isVerified && (
                <Image
                  src="/assets/verify.png"
                  width={20}
                  height={20}
                  alt="verified logo"
                />
              )}
            </div>
            <p className="mt-auto">Chain: {networkChain}</p>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex rounded-t-3xl bg-neutral-200 px-6 py-8 dark:bg-neutral-800 sm:flex-col sm:space-x-0">
          <div className="flex justify-between px-4 text-xl font-bold">
            <p>You pay</p>
            <p>{nftPrice} MATIC</p>
          </div>
          <div className="flex justify-between px-4">
            <p>for {nftQuantity} NFT</p>
            <p>${nftPriceInDollars}</p>
          </div>
          <Separator className="my-8" />
          <p className="px-4 text-neutral-500">Go to your wallet.</p>
          <p className="mb-4 px-4 text-neutral-500">
            You&apos;ll be asked to approve this purchase from your wallet.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
