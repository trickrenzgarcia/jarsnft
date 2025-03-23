"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { DirectListingV3, EnglishAuction, MarketplaceV3, SmartContract } from "@thirdweb-dev/sdk";
import React from "react";
import { LuSquareActivity } from "react-icons/lu";
import EventChip from "./EventChip";
import Link from "next/link";
import { displayName } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { Button } from "@/components/ui/button";
import { RiExternalLinkLine } from "react-icons/ri";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  tokenId: string;
  contractAddress: string;
  directListing: DirectListingV3[] | undefined;
  auctionListing: EnglishAuction[] | undefined;
  marketPlaceContract: MarketplaceV3 | undefined;
};

export default function DisplayActivities({ tokenId, contractAddress, directListing, auctionListing, marketPlaceContract }: Props) {
  const { contract } = useContract(contractAddress);
  const { data: transfers, isLoading: loadingTransfers } = useContractEvents(contract, "Transfer", {
    queryFilter: {
      filters: {
        tokenId: tokenId,
      },
      order: "desc",
    },
  });

  if (loadingTransfers) return <Skeleton className="h-[58px] w-[461px]" />;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="rounded-md border bg-card px-4">
          <div className="flex items-center gap-2">
            <LuSquareActivity className="text-xl" />
            <p>NFT Activities</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="h-fit max-h-[350px] overflow-y-scroll rounded-b-md border bg-card px-4 pt-4">
          {transfers && transfers[0] ? (
            transfers.map((tf, i) => (
              <div key={i} className="py-2">
                <section className="flex items-center justify-between pb-3">
                  <div className="flex flex-col gap-2">
                    {tf.data.from !== "0x0000000000000000000000000000000000000000" ? (
                      <EventChip eventName={`${tf.eventName}`} color="purple" />
                    ) : (
                      <EventChip eventName="Minted" color="blue" />
                    )}

                    <div className="flex items-center gap-3">
                      <p className="text-sm text-muted-foreground">
                        From{" "}
                        <span className="font-semibold text-foreground">
                          {tf.data.from === "0x0000000000000000000000000000000000000000" ? (
                            displayName(tf.data.from)
                          ) : (
                            <Link target="_blank" href={`/user/${tf.data.from}`} className="cursor-pointer hover:underline">
                              {displayName(tf.data.from)}
                            </Link>
                          )}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        To{" "}
                        <span className="font-semibold text-foreground">
                          <Link target="_blank" href={`/user/${tf.data.to}`} className="cursor-pointer hover:underline">
                            {displayName(tf.data.to)}
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Link target="_blank" href={`https://polygonscan.com/tx/${tf.transaction.transactionHash}`}>
                      <Button variant="outline" className="p-2">
                        <RiExternalLinkLine className="text-xl" />
                      </Button>
                    </Link>
                  </div>
                </section>
                <Separator />
              </div>
            ))
          ) : (
            <div>No Activities</div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
