"use client"

import { shortenAddress } from "@/lib/utils";
import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
    address: string;
    content: string;
}

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
          onClick={(e) => {
            navigator.clipboard.writeText(address);
          }}
        >
          {shortenAddress(address)}
        </Button>
      </Tooltip>

      <Button isIconOnly variant="ghost">
        <Link
          href={`https://sepolia.etherscan.io/address/${address}`}
          target="_blank"
          className="w-full h-full flex items-center justify-center"
        >
          <FaExternalLinkAlt className="text-lg text-gray-400" />
        </Link>
      </Button>
    </ButtonGroup>
  );
}
