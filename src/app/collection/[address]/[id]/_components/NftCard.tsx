"use client";

import React, { useEffect, useState } from "react";
import { useNftContext } from "./nft-provider";
import {
  NFT,
  useContractEvents,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew, MdVerified } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BoringAvatar } from "@/components/(interfaces)";
import { displayName } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import BuyButton from "./BuyButton";
import { getMaticPriceInPHP } from "@/lib/core/coingecko";
import SellButton from "./SellButton";
import PlaceBidButton from "./PlaceBidButton";
import AuctionEndTime from "./AuctionEndTime";
import { FaRegEye } from "react-icons/fa";
import TiltCard from "./TiltCard";

import CancelListingButton from "./CancelListingButton";
import NftMetadata from "./NftMetadata";
import Favorite from "./Favorite";
import { updateNftViews } from "@/app/actions/updateNftViews";
import DisplayBidders from "./DisplayBidders";
import DisplayActivities from "./DisplayActivities";

type NftCardProps = {
  address: string;
  id: string;
  likes: {
    count: number;
  };
  views: {
    view_count: number;
  };
};

export default function NftCard({ address, id, likes, views}: NftCardProps) {
  const [amountInPhp, setAmountInPhp] = useState<string>("");
  const [filteredNft, setFilteredNft] = useState<NFT | undefined>();
  const {
    nft,
    nftContract,
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
    if (ownedNFTs) {
      setFilteredNft(ownedNFTs.find((nft) => nft.metadata.id === id));
    }
  }, [ownedNFTs, loadingOwnedNFTs, connectedAddress]);

  useEffect(() => {
    const updateViewCount = async () => {
      const views = await updateNftViews(address, id);
      console.log(views);
    };

    updateViewCount();
    
  }, []);

  const { data: transfer, isLoading } = useContractEvents(nftContract, "Transfer", {
    queryFilter: {
      filters: {
        tokenId: id
      }
    }
  });

  const { data: newListing, isLoading: loadingNewListing } = useContractEvents(marketPlaceContract, "NewListing", {
    queryFilter: {
      filters: {
        assetContract: address,
      },
      order: "desc"
    },
  });

  useEffect(() => {
    if(newListing) {
      
      //const filteredNewListing = newListing.map((event) => event.data.listing)
      //const nftList = filteredNewListing.filter((listing) => listing.tokenId == id);
      //nftList.map((nft) => {
        // console.table(
        //   {
        //     assetContract: nft.assetContract,
        //     tokenId: nft.tokenId.toString(),
        //     startTimestamp: new Date(BigNumber.from(nft.startTimestamp._hex).toNumber() * 1000),
        //     endTimestamp: new Date(BigNumber.from(nft.endTimestamp._hex).toNumber() * 1000),
        //     pricePerToken: ethers.utils.formatEther(BigNumber.from(nft.pricePerToken._hex)).toString(),
        //     listingCreator: nft.listingCreator,
        //   }
        // )
      //})
    }
  }, [newListing, loadingNewListing]);

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
      <div className="mx-4 mt-4 flex flex-col md:flex-row items-start justify-around gap-8">
        <div className="w-full md:w-[50svw] lg:w-[50svw] xl:w-[50svw]">
          <div className="flex w-full flex-col gap-4 py-4">
            {nft ? (
              <h1 className="text-4xl font-bold">{nft.metadata.name}</h1>
            ) : (
              <Skeleton className="h-9 w-28" />
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BoringAvatar name={nft?.owner} size={35} />
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Owned by
                  </p>
                  {nft ? (
                    <Link
                      href={`/user/${listings && listings[0] ? listings[0].creatorAddress : auctionListing && auctionListing[0] ? auctionListing[0].creatorAddress : nft.owner}`}
                    >
                      <p className="cursor-pointer text-medium font-bold hover:underline">
                        {nft.owner
                          ? listings && listings[0] && listings[0].creatorAddress
                            ? displayName(listings[0].creatorAddress)
                            : auctionListing &&
                                auctionListing[0] &&
                                auctionListing[0].creatorAddress
                              ? displayName(auctionListing[0].creatorAddress)
                              : displayName(nft.owner)
                          : displayName(nft.owner)}
                      </p>
                    </Link>
                  ) : (
                    <Skeleton className="h-4 w-8" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  <FaRegEye className="text-2xl" />
                  <p>{views ? views.view_count : '--'}</p>
                </div>
                  <Favorite 
                    favorite={likes}
                    address={address}
                    id={id}
                  />
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
                        <div className="flex items-baseline gap-4">
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
                        <div className="flex flex-col gap-4">
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
                        {filteredNft && listings && !listings[0] ? (
                          <SellButton nft={nft} contractAddress={address} />
                        ) : (
                          !filteredNft && (listings && listings[0]) && (
                            <BuyButton
                              nft={nft}
                              listings={listings}
                              auctionListing={auctionListing}
                            />
                          )
                        )}
                        {auctionListing && auctionListing[0] && !filteredNft && (auctionListing[0].creatorAddress != connectedAddress) && (
                          <BuyButton
                            nft={nft}
                            listings={listings}
                            auctionListing={auctionListing}
                          />
                        )}
                        {auctionListing && auctionListing[0] && !filteredNft && (auctionListing[0].creatorAddress != connectedAddress) && (
                          <PlaceBidButton
                            nft={nft}
                            auctionListing={auctionListing}
                            loadingAuction={loadingAuction}
                          />
                        )}
                        {filteredNft && (listings && listings[0]) && (
                          <CancelListingButton
                            nft={nft}
                            listings={listings}
                            auctionListing={auctionListing}
                            contractAddress={connectedAddress}
                          />
                        )}
                        {auctionListing && auctionListing[0] && (auctionListing[0].creatorAddress == connectedAddress) && (
                          <CancelListingButton
                            nft={nft}
                            listings={listings}
                            auctionListing={auctionListing}
                            contractAddress={connectedAddress}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <DisplayBidders /> */}
            {auctionListing && auctionListing[0] && (
              <DisplayBidders
                contractAddress={address}
                auctionListing={auctionListing}
                marketPlaceContract={marketPlaceContract}
              />
            )}

            {/*  */}
            <DisplayActivities
              tokenId={id}
              contractAddress={address}
              nftContract={nftContract}
              directListing={listings}
              auctionListing={auctionListing}
              marketPlaceContract={marketPlaceContract}
            />
            
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[350px] lg:w-[350px] xl:w-[24svw] justify-start items-start gap-4">
          <TiltCard />
          {/* More NFT Details */}
          {loadingNft ? (
            <div className="w-full">
              <Skeleton className="h-7 w-full" />
            </div>
          ) : (
            <NftMetadata />
          )}
        </div>
      </div>
    </div>
  );
}
