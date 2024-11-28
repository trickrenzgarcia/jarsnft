"use client";

import { Button } from "@/components/ui/button";
import { polygonScan, shortenWalletAddress } from "@/lib/utils";
import { ExternalLinkIcon, LinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  address: string;
};

export default function AddressButton({ address }: Props) {
  return (
    <Button
      className="flex w-fit items-center gap-2 rounded-sm border-muted-foreground bg-[#F3F3F3] p-2 text-sm text-[#272727] hover:bg-[#f3f3f3d5] dark:bg-[#272727] dark:text-[#F3F3F3] dark:hover:dark:bg-[#272727d7]"
      onClick={() => {
        const url = polygonScan(address);
        window.open(url, "_blank", "noopener,noreferrer");
      }}
    >
      <p>{shortenWalletAddress(address)}</p>
      <ExternalLinkIcon className="h-4 w-4" />
    </Button>
  );
}
