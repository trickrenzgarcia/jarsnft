"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import Image from "next/image"
import ApprovePurchase from "./ApprovePurchase"

type BuyButtonType = {
  nftImageLink: string;
  nftName: string;
  nftCollectionName: string;
  isVerified: boolean;
  lastSalePrice: number;
  nftPrice: number;
  nftQuantity: number;
  nftPriceInDollars: number;
  userBalance: number;
  networkChain: string;
}

export default function BuyButton({
  nftImageLink, nftName, nftCollectionName, isVerified, lastSalePrice,
  nftPrice, nftQuantity, nftPriceInDollars, userBalance, networkChain,
}: BuyButtonType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-foreground-900 hover:bg-foreground-700 text-background hover:text-background min-w-[200px]">Buy Now</Button>
      </DialogTrigger>

      <DialogContent className="min-w-[550px] p-0">
        {/* Header */}
        <DialogHeader className="px-8 pt-8">
          <DialogTitle className="text-2xl font-bold">Checkout</DialogTitle>
          <DialogDescription>
            Verify your purchase here. Click &quot;CONFIRM AND PAY&quot; to proceed.
          </DialogDescription>
        </DialogHeader>

        {/* Body */}
        <div className="flex justify-between px-8 py-4">
          <Image src={nftImageLink} width={150} height={150} alt="image of an NFT" />

          <div className="flex flex-col py-4">
            <h1 className="text-2xl font-bold mb-2">{nftName}</h1>
            <div className="flex gap-2">
              <h2>{nftCollectionName}</h2>
              {isVerified && <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" />}
            </div>
            <p className="mt-auto">Last sale: {lastSalePrice} MATIC</p>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex sm:flex-col sm:space-x-0 bg-neutral-200 dark:bg-neutral-800 rounded-t-3xl px-6 py-8">
          <div className="flex justify-between text-xl font-bold px-4">
            <p>You pay</p>
            <p>{nftPrice} MATIC</p>
          </div>
          <div className="flex justify-between px-4">
            <p>for {nftQuantity} NFT</p>
            <p>${nftPriceInDollars}</p>
          </div>
          <div className="flex justify-between my-6 px-4">
            <p>Your MATIC balance</p>
            <p>{userBalance} MATIC</p>
          </div>
          <ApprovePurchase nftImageLink={nftImageLink} nftName={nftName} nftCollectionName={nftCollectionName}
            isVerified={isVerified} networkChain={networkChain} nftPrice={nftPrice} nftQuantity={nftQuantity}
            nftPriceInDollars={nftPriceInDollars} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}