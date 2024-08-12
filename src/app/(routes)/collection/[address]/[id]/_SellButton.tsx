"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

type SellButtonProps = {
  image: string | null | undefined;
  name: string | number | null | undefined;
  collection?: string;
  isVerified: boolean;
}

export default function SellButton({
  image,
  name,
  collection,
  isVerified
}: SellButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="min-w-[200px] bg-foreground-900 text-background hover:bg-foreground-700 hover:text-background"
        >
          Sell Now
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-[550px] p-0">
        {/* Header */}
        <DialogHeader className="px-8 pt-8">
          <DialogTitle className="text-2xl font-bold">Sell</DialogTitle>
          <DialogDescription>
            Enter the price of the item. Click &quot;CONFIRM AND SELL&quot; to
            proceed.
          </DialogDescription>
        </DialogHeader>

        {/* Body */}
        <div className="flex justify-between px-8 py-4">
          <Image
            src={image || ""}
            width={150}
            height={150}
            alt="image of an NFT"
          />

          <div className="flex flex-col py-4">
            <h1 className="mb-2 text-2xl font-bold">{name}</h1>
            <div className="flex gap-2">
              <h2>{collection}</h2>
              {isVerified && (
                <Image
                  src="/assets/verify.png"
                  width={20}
                  height={20}
                  alt="verified logo"
                />
              )}
            </div>
            <p className="mt-auto">Last sale: 000 MATIC</p>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="flex space-y-10 rounded-t-3xl bg-neutral-200 px-6 py-8 dark:bg-neutral-800 sm:flex-col sm:space-x-0">
          <Input type="number" placeholder="Sell Price" />
          <Button
            variant="outline"
            className="bg-foreground-900 text-background
         hover:bg-foreground-700 hover:text-background"
          >
            CONFIRM AND SELL
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}