"use client";

import React, { useEffect, useState } from "react";
import { useNftContext } from "./nft-provider";
import {
  NFT,
  ThirdwebNftMedia,
  useEnglishAuctionWinningBid,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew, MdVerified } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BoringAvatar } from "@/components/(interfaces)";
import { displayName, shortenAddress, truncate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import BuyButton from "./BuyButton";
import { getMaticPriceInPHP } from "@/lib/core/coingecko";
import SellButton from "./SellButton";
import PlaceBidButton from "./PlaceBidButton";
import AuctionEndTime from "./AuctionEndTime";
import { MdOutlineLocalOffer } from "react-icons/md";
import TiltCard from "./TiltCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function NftCard({
  address,
  id,
}: {
  address: string;
  id: string;
}) {
  const [amountInPhp, setAmountInPhp] = useState<string>("");
  const [filteredNft, setFilteredNft] = useState<NFT | undefined>();
  const {
    nft,
    loadingNft,
    collection,
    loadingCollection,
    marketPlaceContract,
    loadingMarketplace,
    connectedAddress,
    ownedNFTs,
    loadingOwnedNFTs,
  } = useNftContext();
  const { data: listings, isLoading: loadingListings } = useValidDirectListings(
    marketPlaceContract,
    {
      tokenContract: address,
      tokenId: id,
    },
  );

  const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketPlaceContract, {
      tokenContract: address,
      tokenId: id,
    });

  const router = useRouter();


  useEffect(() => {
    if (listings && listings[0]) {
      getMaticPriceInPHP(listings[0].currencyValuePerToken.displayValue).then(
        (result) => {
          setAmountInPhp(result);
        },
      );
    }
  }, [listings, auctionListing]);

  useEffect(() => {
    async function fetchOffers() {
      if (auctionListing && auctionListing[0] && marketPlaceContract) {
        try { 
          const offers = await marketPlaceContract.abi;
          console.log(offers);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchOffers();
  }, [auctionListing, loadingAuction, marketPlaceContract, loadingMarketplace]);

  useEffect(() => {
    if (ownedNFTs) {
      setFilteredNft(ownedNFTs.find((nft) => nft.metadata.id === id));
    }
  }, [ownedNFTs, loadingOwnedNFTs, connectedAddress]);

  if (loadingCollection) {
    return <div>Loading collection...</div>;
  }

  if (loadingMarketplace) {
    return <div>Loading marketplace...</div>;
  }

  return (
    <div className="mt-4 flex flex-col">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="rounded-full px-3"
          onClick={(e) => router.back()}
        >
          <MdArrowBackIosNew className="text-medium" />
        </Button>
        <Image
          className="rounded-full"
          src={collection.image}
          width={25}
          height={25}
          alt=""
        />
        <p className="hover:underline">
          <Link href={`/collection/${address}`}>{collection.name}</Link>
        </p>
        <MdVerified className="text-lg text-blue-500" />
      </div>
      <div className="w-full mx-4 mt-4 flex flex-col lg:flex-row items-center lg:items-stretch justify-center md:justify-between gap-4 lg:gap-16">
        <div className="md:w-[60svw] w-full">
          <div className="flex w-full flex-col gap-4 py-4">
            {nft ? (
              <h1 className="text-4xl font-bold">{nft.metadata.name}</h1>
            ) : (
              <Skeleton className="h-9 w-28" />
            )}

            <div className="flex items-center gap-2">
              <BoringAvatar name={nft?.owner} size={35} />
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Owned by
                </p>
                {nft ? (
                  <p className="cursor-pointer text-medium font-bold hover:underline">
                    {nft.owner ? (
                      listings && listings[0] && listings[0].creatorAddress ? (
                        displayName(listings[0].creatorAddress)
                      ) : auctionListing && auctionListing[0] && auctionListing[0].creatorAddress ? (
                        displayName(auctionListing[0].creatorAddress)
                      ) : (
                        "Not listed"
                      )
                    ) : (
                      "Not logged in"
                    )}
                  </p>
                ) : (
                  <Skeleton className="h-4 w-8" />
                )}
              </div>
            </div>

            <Card className="mt-4">
              <CardContent className="w-full p-5">
                <div className="grid grid-cols-2 gap-3 md:gap-0">
                  <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {listings && listings[0]
                        ? "Current Price"
                        : auctionListing && auctionListing[0]
                          ? "Buyout Price"
                          : "Current Price"}
                    </p>
                    <div className="flex flex-col justify-center gap-1">
                      {loadingListings ? (
                        <Skeleton className="h-10 w-28" />
                      ) : listings && listings[0] ? (
                        <div className="flex items-baseline gap-1">
                          <Image
                            src="/assets/cryptocurrency/polygon-matic.png"
                            width={20}
                            height={20}
                            alt="Polygon"
                          />
                          <p className="flex flex-col text-2xl font-bold">
                            {listings[0].currencyValuePerToken.displayValue}{" "}
                            {listings[0].currencyValuePerToken.symbol}
                            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                              {" "}
                              (PHP {amountInPhp})
                            </span>
                          </p>
                        </div>
                      ) : auctionListing && auctionListing[0] ? (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <Image
                              src="/assets/cryptocurrency/polygon-matic.png"
                              width={20}
                              height={20}
                              alt="Polygon"
                            />
                            <p className="text-2xl font-bold">
                              {
                                auctionListing[0].buyoutCurrencyValue
                                  .displayValue
                              }{" "}
                              {auctionListing[0].buyoutCurrencyValue.symbol}
                              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                                {" "}
                                (PHP {amountInPhp})
                              </span>
                            </p>
                          </div>

                          <AuctionEndTime
                            endTimeInSeconds={
                              auctionListing[0].endTimeInSeconds
                            }
                          />
                        </div>
                      ) : (
                        <p className="text-2xl font-bold">
                          N/A
                          <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                            (Not Listed)
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1 ">
                    {loadingListings || loadingAuction ? (
                      <div className="flex w-full flex-col gap-2">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {filteredNft ? (
                          <SellButton nft={nft} contractAddress={address} />
                        ) : (
                          ((listings && listings[0]) ||
                            (auctionListing && auctionListing[0])) && (
                            <BuyButton
                              nft={nft}
                              listings={listings}
                              auctionListing={auctionListing}
                            />
                          )
                        )}
                        {auctionListing && auctionListing[0] && (
                          <PlaceBidButton
                            nft={nft}
                            auctionListing={auctionListing}
                            loadingAuction={loadingAuction}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="border px-4 rounded-md bg-card">
                  <div className="flex gap-2 items-center">
                    <MdOutlineLocalOffer className="text-xl"/>
                    <span>Offers</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 border pt-4 rounded-b-md">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
        <div className="h-[80svh] md:w-[40svw] w-full flex justify-center md:justify-start">
          <TiltCard />
        </div>
      </div>
    </div>
  );
}
