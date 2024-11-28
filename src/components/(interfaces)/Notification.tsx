"use client";

import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { IoIosNotifications } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ContractEvent, useAddress, useContract, useContractEvents, useNFTs } from "@thirdweb-dev/react";
import { NFT_MARKETPLACE } from "@/lib/constant";
import { BigNumber } from "ethers";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import { polygonScanTx } from "@/lib/utils";
import NotificationResult from "./NotificationResult";

type AuctionEvent = {
  assetContract: string;
  auctionCreator: string;
  auctionId: BigNumber;
  closer: string;
  tokenId: BigNumber;
  winningBidder: string;
};

export default function Notification() {
  const address = useAddress();
  const { contract } = useContract(NFT_MARKETPLACE, "marketplace-v3");
  const { data: events, isLoading: loadingEvents } = useContractEvents(contract);
  const [auctionClosed, setAuctionClosed] = useState<ContractEvent<AuctionEvent>[] | undefined>(undefined);

  useEffect(() => {
    if (address && events) {
      const auctionClosed = events.filter((event) => event.eventName === "AuctionClosed") as ContractEvent<AuctionEvent>[];
      const auctionBidding = auctionClosed.filter((event) => event.data.winningBidder === address) as ContractEvent<AuctionEvent>[];
      setAuctionClosed(auctionBidding);
    }
  }, [events, address]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-[40px] w-[49px] rounded-2xl p-2" variant="ghost">
          <IoIosNotifications className="text-3xl" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col">
          <div className="flex items-center justify-start border-b border-gray-200 px-4 pb-2 dark:border-gray-600">
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          {loadingEvents && (
            <div className="flex items-center justify-center p-4">
              <AiOutlineLoading className="h-10 w-10 animate-spin" />
            </div>
          )}
          {events && auctionClosed && (
            <ScrollArea className="flex h-80 w-full flex-col p-4">
              {auctionClosed.map((event, index) => {
                return <NotificationResult event={event} key={index} />;
              })}
            </ScrollArea>
          )}
          {/* Read all & Clear All */}
          {/* <div className="flex justify-between">
            <Button variant="outline">Read All</Button> */}
          {/* add dialog box for confirmation */}
          {/* <Button variant="outline">Clear All</Button>
          </div> */}
        </div>
      </PopoverContent>
    </Popover>
  );
}
