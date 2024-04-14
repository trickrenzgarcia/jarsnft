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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

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
}

export default function BuyButton({
  nftImageLink, nftName, nftCollectionName, isVerified, lastSalePrice,
  nftPrice, nftQuantity, nftPriceInDollars, userBalance,
}: BuyButtonType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-background">Buy Now</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[550px] p-0">
        <DialogHeader className="px-8 pt-8">
          <DialogTitle className="text-2xl font-bold">Checkout</DialogTitle>
          <DialogDescription>
            Verify your purchase here. Click "CONFIRM AND PAY" to proceed.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter className="flex sm:flex-col sm:space-x-0 bg-green dark:bg-gray-900 rounded-t-3xl p-4">
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
          <Button>CONFIRM AND PAY</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}