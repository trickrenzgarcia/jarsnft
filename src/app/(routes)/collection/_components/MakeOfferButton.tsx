"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SimpleHashNFT } from "@/types/simple-hash/nft";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";

type MakeOfferButtonProps = {
  contractAddress: string;
  tokenId: string;
  nft: SimpleHashNFT;
};

type ExpiredAfter = "1h" | "3h" | "6h" | "1d" | "3d" | "7d" | "14d" | "30d" | "90d" | "180d";

export default function MakeOfferButton({ nft, contractAddress, tokenId }: MakeOfferButtonProps) {

  const [expiredAfter, setExpiredAfter] = React.useState<ExpiredAfter>();

  React.useEffect(() => {
    console.log(expiredAfter);
  }, [expiredAfter])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-500">Make Offer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Make Offer</DialogTitle>
        </DialogHeader>

        <Separator />

        <div className="">
          <p className="mb-2">Item</p>
          <div className="mb-4 flex items-center gap-2">
            <Image
              src={nft.image_url}
              width={48}
              height={48}
              alt={nft.name}
              className="rounded-sm"
            />
            <div className="flex flex-col justify-center">
              <p className="flex items-center gap-1 text-sm">
                {nft.contract.name}
                <MdVerified className="text-blue-500" />
              </p>
              <p className="font-bold">{nft.name}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">Price</p>
            <Input type="number" placeholder="0.0" className="w-full" />
          </div>

          <div className="mb-2">
            <p className="mb-2">Expires after</p>
            <Select onValueChange={(value: ExpiredAfter) => setExpiredAfter(value)}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select an expiration day" className="w-full min-w-full max-w-full" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
              
                  <SelectItem value="1h">
                    1 hour
                  </SelectItem>
                  <SelectItem value="3h">
                    3 hours
                  </SelectItem>
                  <SelectItem value="6h">
                    6 hours
                  </SelectItem>
                  <SelectItem value="1d">
                    1 day
                  </SelectItem>
                  <SelectItem value="3d">
                    3 days
                  </SelectItem>
                  <SelectItem value="7d">
                    7 days
                  </SelectItem>
                  <SelectItem value="14d">
                    14 days
                  </SelectItem>
                  <SelectItem value="30d">
                    30 days
                  </SelectItem>
                  <SelectItem value="90d">
                    90 days
                  </SelectItem>
                  <SelectItem value="180d">
                    180 days
                  </SelectItem>
                </SelectGroup>
                
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <div className="w-full flex flex-col gap-2">
            {/* <Button type="submit" className="w-full bg-blue-500">
              Make Offer
            </Button> */}
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="w-full">Close</Button>
            </DialogClose>
          </div>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
