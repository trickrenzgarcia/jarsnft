"use client";

import { shortenAddress } from "@/lib/utils";
import { ButtonGroup, Tooltip } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  address: string;
  content: string;
};

export default function AddressClipboard({ address, content }: Props) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [message, setMessage] = useState(address);

  useEffect(() => {
    if (message !== address) {
      setTimeout(() => {
        setMessage(address);
      }, 2000);
    }
  }, [message]);

  return (
    <ButtonGroup className="gap-[2px]" radius="sm">
      <Tooltip isOpen={isTooltipOpen} onOpenChange={(open) => setIsTooltipOpen(open)} content={content} placement="bottom">
        <Button
          variant="outline"
          className="w-28 rounded-br-none rounded-tr-none text-xs font-bold"
          onClick={() => {
            navigator.clipboard.writeText(address);
            setMessage("Copied!");
          }}
        >
          {shortenAddress(message)}
        </Button>
      </Tooltip>

      <Button variant="outline" className="rounded-bl-none rounded-tl-none px-3 font-bold">
        <Link href={`https://polygonscan.com/address/${address}`} target="_blank" className="flex h-full w-full items-center justify-center">
          <FaExternalLinkAlt className="text-sm dark:text-gray-400" />
        </Link>
      </Button>
    </ButtonGroup>
  );
}
