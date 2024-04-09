"use client";

import { shortenAddress } from "@/lib/utils";
import { ButtonGroup, Tooltip } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  address: string;
  content: string;
};

export default function AddressClipboard({ address, content }: Props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  return (
    <ButtonGroup className="gap-[2px]" radius="sm">
      <Tooltip
        isOpen={isTooltipOpen}
        onOpenChange={(open) => setIsTooltipOpen(open)}
        content={content}
      >
        <Button
          variant="outline"
          className="rounded-br-none rounded-tr-none text-xs font-bold"
          onClick={() => {
            navigator.clipboard.writeText(address);
          }}
        >
          {shortenAddress(address)}
        </Button>
      </Tooltip>

      <Button
        variant="outline"
        className="rounded-bl-none rounded-tl-none px-3 font-bold"
      >
        <Link
          href={`https://sepolia.etherscan.io/address/${address}`}
          target="_blank"
          className="flex h-full w-full items-center justify-center"
        >
          <FaExternalLinkAlt className="text-sm text-gray-400" />
        </Link>
      </Button>
    </ButtonGroup>
  );
}
