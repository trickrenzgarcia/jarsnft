"use client";

import { BoringAvatar } from "@/components/(interfaces)";
import { useContractContext, useMarketPlaceContext, useNFTContext } from "@/components/hooks/use-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { displayName, polygonScan, shortenWalletAddress } from "@/lib/utils";
import { useBalance, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdArrowBackIosNew, MdVerified } from "react-icons/md";
import AuctionEndTime from "./AuctionEndTime";
import SellButton from "./SellButton";
import BuyButton from "./BuyButton";
import PlaceBidButton from "./PlaceBidButton";
import CancelListingButton from "./CancelListingButton";
import DisplayBidders from "./DisplayBidders";
import DisplayActivities from "./DisplayActivities";
import NftMetadata from "./NftMetadata";
import TiltCard from "./TiltCard";
import { getMaticPriceInPHP } from "@/lib/coingecko";
import { useState, useEffect } from "react";

export default function NFTItem() {
  const router = useRouter();
  const { collection, loadingCollection, errorCollection } = useContractContext();
  const { marketPlaceContract, loadingMarketPlace, errorMarketPlace } = useMarketPlaceContext();
  const { address, tokenId, nft, loadingNFT, errorNFT, ownedNFTs, filteredNFT, connectedAddress } = useNFTContext();
  const { data: balance, isLoading: loadingBalance } = useBalance();
  const [phpPrices, setPhpPrices] = useState<string[] | null>(null);

  const {
    data: directListings,
    isLoading: loadingDirectListings,
    isError: errorDirectListings,
  } = useValidDirectListings(marketPlaceContract, {
    tokenContract: address,
    tokenId: tokenId,
  });

  const {
    data: auctionListings,
    isLoading: loadingAuctionListings,
    isError: errorAuctionListings,
  } = useValidEnglishAuctions(marketPlaceContract, {
    tokenContract: address,
    tokenId: tokenId,
  });

  useEffect(() => {
    async function fetchPrices() {
      if (directListings) {
        const pricesInPHP = await Promise.all(
          directListings.map(async (listing) => {
            const phpPrice = await getMaticPriceInPHP(listing.currencyValuePerToken.displayValue);
            return phpPrice;
          }),
        );
        setPhpPrices(pricesInPHP);
      }
    }

    fetchPrices();
  }, [directListings]);

  // if (loadingCollection) {
  //   return <div>Loading Collection...</div>;
  // } else if (errorCollection) {
  //   return <div>Error Collection...</div>;
  // }

  // if (loadingMarketPlace) {
  //   return <div>Loading MarketPlace...</div>;
  // } else if (errorMarketPlace) {
  //   return <div>Error MarketPlace...</div>;
  // }

  // if (loadingNFT) {
  //   return <div>Loading NFT...</div>;
  // } else if (errorNFT) {
  //   return <div>Error NFT...</div>;
  // }

  return (
    <div className="mt-4 flex flex-col">
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="rounded-full px-3" onClick={(e) => router.back()}>
          <MdArrowBackIosNew className="text-medium" />
        </Button>
        {loadingCollection ? (
          <Skeleton className="size-12" />
        ) : (
          <Image className="size-12 rounded-full" src={collection.image} width={25} height={25} alt="" />
        )}
        <p className="hover:underline">
          {loadingCollection ? <Skeleton className="h-[20px] w-20" /> : <Link href={`/collection/${address}`}>{collection.name}</Link>}
        </p>
      </div>

      <div className="flex flex-col items-start justify-around gap-8 p-6 md:flex-row">
        <div className="w-full md:w-[50svw] lg:w-[50svw] xl:w-[50svw]">
          <div className="flex w-full flex-col gap-4">
            <Card>
              <CardContent className="w-full p-5">
                <div className="flex basis-full flex-col items-start justify-between sm:flex-row sm:items-center">
                  <div className="mb-4 flex flex-col sm:mb-0">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      {directListings && directListings[0]
                        ? "Current Price"
                        : auctionListings && auctionListings[0]
                          ? "Buyout Price"
                          : "Current Price"}
                    </p>
                    <div className="flex flex-col justify-center gap-1">
                      {loadingDirectListings ? (
                        <Skeleton className="h-10 w-28" />
                      ) : directListings && directListings[0] ? (
                        <div className="flex items-baseline gap-4">
                          <Image src="/assets/cryptocurrency/polygon-matic.png" width={20} height={20} alt="Polygon" />
                          <p className="flex flex-col text-2xl font-bold">
                            {directListings[0].currencyValuePerToken.displayValue} {directListings[0].currencyValuePerToken.symbol}
                            {/* text-xs font-normal text-gray-500 dark:text-gray-400 */}
                            {directListings.map((listing, index) => (
                              <span key={listing.id} className="text-xs font-normal text-gray-500 dark:text-gray-400">
                                <p>{phpPrices && phpPrices[index] ? `${phpPrices[index]} PHP` : "Loading PHP price..."}</p>
                              </span>
                            ))}
                          </p>
                        </div>
                      ) : auctionListings && auctionListings[0] ? (
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-1">
                            <Image src="/assets/cryptocurrency/polygon-matic.png" width={20} height={20} alt="Polygon" />
                            <p className="space-x-4 text-2xl font-bold">
                              {auctionListings[0].buyoutCurrencyValue.displayValue} {auctionListings[0].buyoutCurrencyValue.symbol}
                              <span className="text-xs font-normal text-gray-500 dark:text-gray-400"> (PHP {0})</span>
                            </p>
                          </div>

                          <AuctionEndTime endTimeInSeconds={auctionListings[0].endTimeInSeconds} />
                        </div>
                      ) : (
                        <p className="text-2xl font-bold">
                          N/A
                          <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">(Not Listed)</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full sm:w-1/4">
                    {/* {(directListings && loadingDirectListings) || (auctionListings && loadingAuctionListings) ? (
                      <div className="flex w-full flex-col gap-2">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                      </div> */}
                    {
                      <div className="flex flex-col gap-3">
                        {filteredNFT && directListings && !directListings[0] ? (
                          <SellButton nft={nft} contractAddress={address} />
                        ) : (
                          !filteredNFT &&
                          directListings &&
                          directListings[0] && <BuyButton nft={nft} listings={directListings} auctionListing={auctionListings} />
                        )}
                        {auctionListings && auctionListings[0] && !filteredNFT && auctionListings[0].creatorAddress != connectedAddress && (
                          <BuyButton nft={nft} listings={directListings} auctionListing={auctionListings} />
                        )}
                        {auctionListings && auctionListings[0] && !filteredNFT && auctionListings[0].creatorAddress != connectedAddress && (
                          <PlaceBidButton nft={nft} auctionListing={auctionListings} loadingAuction={loadingAuctionListings} />
                        )}
                        {filteredNFT && directListings && directListings[0] && (
                          <CancelListingButton
                            nft={nft}
                            listings={directListings}
                            auctionListing={auctionListings}
                            contractAddress={connectedAddress}
                          />
                        )}
                        {auctionListings && auctionListings[0] && auctionListings[0].creatorAddress == connectedAddress && (
                          <CancelListingButton
                            nft={nft}
                            listings={directListings}
                            auctionListing={auctionListings}
                            contractAddress={connectedAddress}
                          />
                        )}
                      </div>
                    }
                  </div>
                </div>
              </CardContent>
            </Card>
            <div>
              <TiltCard />
            </div>

            {/* <DisplayBidders /> */}
            {auctionListings && auctionListings[0] && (
              <DisplayBidders contractAddress={address} auctionListing={auctionListings} marketPlaceContract={marketPlaceContract} />
            )}
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-4 md:w-[350px] lg:w-[350px] xl:w-[24svw]">
          {nft ? <h1 className="text-4xl font-bold">{nft.metadata.name}</h1> : <Skeleton className="h-[40px] w-28" />}
          <div className="flex items-center gap-6">
            <BoringAvatar name={nft?.owner} size={35} />
            <div className="flex flex-col">
              <p className="text-xs text-gray-500 dark:text-gray-400">Owned by</p>
              {nft ? (
                <Link
                  href={polygonScan(
                    directListings && directListings[0]
                      ? directListings[0].creatorAddress
                      : auctionListings && auctionListings[0]
                        ? auctionListings[0].creatorAddress
                        : nft.owner,
                  )}
                >
                  <p className="cursor-pointer text-medium font-bold hover:underline">{shortenWalletAddress(nft.owner)}</p>
                </Link>
              ) : (
                <Skeleton className="h-[24px] w-[136px]" />
              )}
            </div>
            <div>
              <FaRegEye className="text-2xl" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">{/* <p>{views ? views.viewCount : "--"}</p> */}</div>
            {/* <Favorite favorite={likes} address={address} id={id} /> */}
          </div>

          <NftMetadata />
          <DisplayActivities
            tokenId={tokenId}
            contractAddress={address}
            directListing={directListings}
            auctionListing={auctionListings}
            marketPlaceContract={marketPlaceContract}
          />
        </div>
      </div>
    </div>
  );
}
