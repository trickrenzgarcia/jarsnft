"use client"

import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import type { DirectListingV3, EnglishAuction, MarketplaceV3, SmartContract } from '@thirdweb-dev/sdk';
import React from 'react'
import { LuActivitySquare } from "react-icons/lu";
import EventChip from './EventChip';
import Link from 'next/link';
import { displayName } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { useContractEvents } from '@thirdweb-dev/react';
import { Button } from '@/components/ui/button';
import { RiExternalLinkLine } from "react-icons/ri";
import { useContractContext } from '@/components/hooks/use-context';

type Props = {
  tokenId: string;
  contractAddress: string;
  directListing: DirectListingV3[] | undefined;
  auctionListing: EnglishAuction[] | undefined;
  marketPlaceContract: MarketplaceV3 | undefined;
}

export default function DisplayActivities({ tokenId, contractAddress, directListing, auctionListing, marketPlaceContract }: Props) {
  const { contract } = useContractContext()
  const { data: transfers, isLoading: loadingTransfers } = useContractEvents(contract, "Transfer", {
    queryFilter: {
      filters: {
        tokenId: tokenId
      },
      order: "desc",
      fromBlock: 0,
      toBlock: 10000000
    }
  });

  if(loadingTransfers) return (
    <div>Loading...</div>
  )

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="border px-4 rounded-md bg-card">
          <div className="flex gap-2 items-center">
            <LuActivitySquare className="text-xl"/>
            <p>NFT Activities</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 border pt-4 rounded-b-md bg-card h-fit max-h-[350px] overflow-y-scroll">
          {transfers && transfers[0] ? transfers.map((tf, i) => (
            <div key={i} className='py-2'>
              <section className="flex justify-between items-center pb-3">
                <div className='flex flex-col gap-2'>
                  {tf.data.from !== "0x0000000000000000000000000000000000000000" ? (
                    <EventChip eventName={`${tf.eventName}`} color="purple" />
                  ) : (
                    <EventChip eventName="Minted" color="blue" />
                  )}
                  
                  
                  <div className='flex items-center gap-3'>
                    <p className="text-sm text-muted-foreground">From <span className='font-semibold text-foreground'>
                      {tf.data.from === "0x0000000000000000000000000000000000000000" ? (
                        displayName(tf.data.from)
                      ): (
                        <Link target='_blank' href={`/user/${tf.data.from}`} className='cursor-pointer hover:underline'>
                          {displayName(tf.data.from)}
                        </Link>
                      )}
                      
                    </span></p>
                    <p className="text-sm text-muted-foreground">To <span className='font-semibold text-foreground'>
                      <Link target='_blank' href={`/user/${tf.data.to}`} className='cursor-pointer hover:underline'>
                      {displayName(tf.data.to)}
                      </Link>
                    </span></p>
                  </div>
                </div>
                <div>
                  <Link target='_blank' href={`https://polygonscan.com/tx/${tf.transaction.transactionHash}`}>
                    <Button variant="outline" className='p-2'>
                      <RiExternalLinkLine className='text-xl' />
                    </Button>
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
