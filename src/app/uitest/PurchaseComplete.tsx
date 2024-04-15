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
import Link from "next/link"
import { IoOpenOutline } from "react-icons/io5"

type BuyButtonType = {
  nftImageLink: string;
  nftName: string;
  nftCollectionName: string;
  transactionID: string;
  viewItemLink: string;
}

export default function PurchaseComplete({
  nftImageLink, nftName, nftCollectionName, transactionID, viewItemLink
}: BuyButtonType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-foreground-900 hover:bg-foreground-700 text-background 
        hover:text-background min-w-[200px]">Test Purchase Complete</Button>
      </DialogTrigger>

      <DialogContent className="min-w-[550px] p-0">
        {/* Body */}
        <div className="flex flex-col items-center justify-center py-10">
          <Image className="mb-8" src={nftImageLink} width={150} height={150} alt="image of an NFT" />
          <div className="text-center px-24">
            <h1 className="text-2xl font-bold">Your purchase is complete!</h1>
            <p className="text-neutral-500">You purchased <span className="text-purple-500">{nftName}</span> from the <span className="text-purple-500">{nftCollectionName}</span> collection.</p>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex sm:flex-col sm:space-x-0 bg-neutral-200 dark:bg-neutral-800 rounded-t-3xl px-6 py-8">
          <div className="text-center mb-8">
            <p>Transaction ID</p>
            <p className="text-purple-500">{transactionID}</p>
          </div>
          <Link href={viewItemLink}>
            <Button variant="outline" className="flex align-middle bg-foreground-900 hover:bg-foreground-700 text-background
                     hover:text-background font-bold w-full gap-1">
              <p>View Item </p>
              <IoOpenOutline size={20} />
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}