"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MdOutlineLocalOffer } from "react-icons/md";
import { type MarketplaceV3, type EnglishAuction } from '@thirdweb-dev/sdk';
import { useContractEvents } from '@thirdweb-dev/react';
import { NewBid } from '@/types/data';
import { BigNumber, ethers } from 'ethers';
import EventChip from './EventChip';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { displayName } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  contractAddress: string;
  auctionListing: EnglishAuction[];
  marketPlaceContract: MarketplaceV3 | undefined;
}

export default function DisplayBidders({ marketPlaceContract, contractAddress, auctionListing }: Props) {

  const { data: newBid, isLoading: loadingNewBid } = useContractEvents(marketPlaceContract, "NewBid", {
    queryFilter: {
      filters: {
        assetContract: contractAddress,
        auctionId: auctionListing?.[0].id
      },
      order: "desc",
    },
  });

  if(loadingNewBid) return (
    <div>Loading...</div>
  )

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="border px-4 rounded-md bg-card">
          <div className="flex gap-2 items-center">
            <MdOutlineLocalOffer className="text-xl"/>
            <p>Auction Bids</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 border pt-4 rounded-b-md bg-card">
          {newBid && newBid[0] ? newBid.map((bid, i) => (
            <div key={i} className='py-2'>
              <section className="flex justify-between items-center pb-3">
                <div className='flex flex-col gap-2'>
                  <EventChip eventName={`${bid.eventName}`} color="orange" />
                  <div className='flex items-baseline gap-1'>
                    <Image
                      src="/assets/cryptocurrency/polygon-matic.png"
                      width={14}
                      height={14}
                      alt="Polygon"
                    />
                    <p className="text-sm font-semibold">{ethers.utils.formatEther(bid.data.bidAmount)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">From <span className='font-semibold text-foreground'>
                      <Link target='_blank' href={`/user/${bid.data.bidder}`} className='cursor-pointer hover:underline'>
                      {displayName(bid.data.bidder)}
                      </Link>
                    </span></p>
                    <p>{}</p>
                  </div>
                </div>
                <div>
                  <Link target='_blank' href={`https://polygonscan.com/tx/${bid.transaction.transactionHash}`}>
                    Scan
                  </Link>
                  
                </div>
              </section>
              <Separator />
            </div>
          )) : (
            <div>No Bids</div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
