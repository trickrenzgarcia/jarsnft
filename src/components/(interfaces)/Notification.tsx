"use client";

import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { IoIosNotifications } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ContractEvent, useAddress, useContract, useContractEvents } from "@thirdweb-dev/react";
import { NFT_MARKETPLACE } from "@/lib/constant";
import { BigNumber } from "ethers";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import { polygonScanTx } from "@/lib/utils";

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
          <div className="flex items-center justify-start border-b border-gray-200 p-4 dark:border-gray-600">
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          {loadingEvents && (
            <div className="flex items-center justify-center p-4">
              <AiOutlineLoading className="h-10 w-10 animate-spin" />
            </div>
          )}
          {events && auctionClosed && (
            <ScrollArea className="flex h-80 w-full flex-col p-4">
              {auctionClosed.map((event, index) => (
                <Link href={polygonScanTx(event.transaction.transactionHash)} key={event.transaction.transactionHash}>
                  <div className="flex items-center gap-2">
                    {/* <Image src={''} alt='Pic' height={40} width={40} /> */}
                    <div>
                      <p className="text-sm font-semibold">You have won the bidding</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-400 dark:text-gray-500">NFT Item</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Bid: 0.1 POL</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </ScrollArea>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
