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
import Image from "next/image";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

type PurchaseCompleteType = {
  nftImageLink: string;
  nftName: string;
  nftCollectionName: string;
  transactionID: string;
  viewItemLink: string;
};

export default function PurchaseComplete({
  nftImageLink,
  nftName,
  nftCollectionName,
  transactionID,
  viewItemLink,
}: PurchaseCompleteType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[200px] bg-foreground-900 text-background 
        hover:bg-foreground-700 hover:text-background"
        >
          Test Purchase Complete
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-[550px] p-0">
        {/* Body */}
        <div className="flex flex-col items-center justify-center py-10">
          <Image
            className="mb-8"
            src={nftImageLink}
            width={150}
            height={150}
            alt="image of an NFT"
          />
          <div className="px-24 text-center">
            <h1 className="text-2xl font-bold">Your purchase is complete!</h1>
            <p className="text-neutral-500">
              You purchased <span className="text-purple-500">{nftName}</span>{" "}
              from the{" "}
              <span className="text-purple-500">{nftCollectionName}</span>{" "}
              collection.
            </p>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex rounded-t-3xl bg-neutral-200 px-6 py-8 dark:bg-neutral-800 sm:flex-col sm:space-x-0">
          <div className="mb-8 text-center">
            <p>Transaction ID</p>
            <p className="text-purple-500">{transactionID}</p>
          </div>
          <Link href={viewItemLink}>
            <Button
              variant="outline"
              className="flex w-full gap-1 bg-foreground-900 align-middle
                     font-bold text-background hover:bg-foreground-700 hover:text-background"
            >
              <p>View Item </p>
              <IoOpenOutline size={20} />
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
