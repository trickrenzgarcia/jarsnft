"use client";

import React, { useState, useEffect } from "react";
import { NFTCollection } from "@/types";
import { useContract, useContractEvents, useContractMetadata, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import NFTBannerLoading from "./NFTBannerLoading";
import { NFT_MARKETPLACE } from "@/lib/constant";
import Image from "next/image";
import { cn, formatNumber } from "@/lib/utils";
import { TooltipMsg } from "@/components/(interfaces)";
import { MdVerified } from "react-icons/md";
import { ReadMore } from "./ReadMore";
import { SiPolygon } from "react-icons/si";
import { BigNumber, ethers } from "ethers";
import { Spinner } from "@nextui-org/spinner";
import { useMarketPlaceContext, useListingsContext } from "@/components/hooks/use-context";
import { shortenWalletAddress } from "@/lib/utils";
import useOwnersLength from "@/hooks/useOwnersLength";

type NFTBannerProps = {
  address: string;
  collection: NFTCollection;
};

type Details = {
  detail: string;
  value?: number;
  currency?: "POL";
};

export default function NFTBanner({ address, collection }: NFTBannerProps) {
  const [details, setDetails] = useState<Details[]>();
  const { directListings, auctionListings } = useListingsContext();
  const { contract } = useContract(address);
  const { data: metadata, isLoading: loadingMetadata, isError: errorMetadata } = useContractMetadata(contract);
  const { marketPlaceContract, loadingMarketPlace } = useMarketPlaceContext();
  const { ownersLength } = useOwnersLength(collection.contract);

  const {
    data: sales,
    isLoading: salesLoading,
    isError: salesError,
  } = useContractEvents(marketPlaceContract, "NewSale", {
    queryFilter: {
      filters: {
        assetContract: address,
      },
    },
  });

  useEffect(() => {
    const listingCount = (directListings?.length || 0) + (auctionListings?.length || 0);
    if (sales && sales.length > 0) {
      const totalSalesPrice = sales.reduce((total, sale) => {
        const price = BigNumber.from(sale.data.totalPricePaid);
        return total.add(price);
      }, BigNumber.from(0));

      const floorPrice = sales
        .reduce((min, sale) => {
          const price = BigNumber.from(sale.data.totalPricePaid);
          return price.lt(min) ? price : min;
        }, BigNumber.from(sales[0].data.totalPricePaid))
        .toString();

      setDetails([
        {
          detail: "Total Volume",
          value: totalSalesPrice ? parseFloat(ethers.utils.formatEther(totalSalesPrice)) : 0,
          currency: "POL",
        },
        {
          detail: "Floor Price",
          value: floorPrice ? parseFloat(ethers.utils.formatEther(floorPrice)) : 0,
          currency: "POL",
        },
        {
          detail: "Listed",
          value: listingCount,
        },
        { detail: "Owners(Unique)", value: ownersLength },
      ]);
    } else {
      setDetails([
        {
          detail: "Total Volume",
          value: 0,
          currency: "POL",
        },
        {
          detail: "Floor Price",
          value: 0,
          currency: "POL",
        },
        {
          detail: "Listed",
          value: listingCount,
        },
        { detail: "Owners(Unique)", value: 0 },
      ]);
    }
  }, [sales, address, collection, directListings, auctionListings]);

  if (loadingMetadata || !metadata || salesLoading) {
    return <NFTBannerLoading />;
  }

  return (
    <main className="flex w-full flex-col bg-slate-600 text-white dark:bg-background">
      <div className="relative h-[400px] min-h-[200px] w-auto">
        <Image
          src={metadata.image || "/assets/collection_banner_placeholder.png"}
          fill
          style={{
            objectFit: "cover",
          }}
          alt="Collection Banner"
          className="opacity-65 blur-lg dark:opacity-30"
        />
      </div>
      <div className="absolute block h-[26rem] w-full p-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)] sm:h-[410px]">
        <section className="flex justify-between p-6">
          <div className="flex w-full items-center gap-3">
            <Image
              src={metadata.image || "/assets/image_not_found.jpg"}
              width={125}
              height={125}
              alt=""
              className="aspect-square rounded-xl border bg-background object-fill"
            />
            <div className={cn("w-[500px]")}>
              <div className="flex w-full items-center gap-1 text-2xl font-semibold">
                <div className="flex flex-row">
                  <h2 className="truncate">{metadata.name}</h2>
                  {collection.isVerified ? (
                    <TooltipMsg message="Verified">
                      <div className="cursor-pointer rounded-sm p-1 hover:bg-slate-500/30">
                        <MdVerified className="text-blue-500" />
                      </div>
                    </TooltipMsg>
                  ) : null}
                </div>
              </div>
              <p className="w-full text-sm text-gray-500 lg:text-2xl">{shortenWalletAddress(address)}</p>
            </div>
          </div>
        </section>
        <section className="mt-6 w-full justify-between px-6 lg:mt-4 lg:flex">
          <div className="h-[75px] overflow-x-hidden text-sm font-semibold dark:text-gray-300 lg:h-[160px] lg:w-[500px]">
            <ReadMore id="collection-description" text={metadata.description || ""} amountOfWords={24} />
          </div>
          {/* Placeholder for data will get in Simplehash */}
          <div className="mt-8 flex items-end gap-4 overflow-x-auto">
            {details &&
              details.map((detail: Details, i) => (
                <div key={i} className={cn("w-full flex-col items-center")}>
                  <div className="flex justify-center gap-2 text-2xl font-semibold">
                    {detail.currency && <SiPolygon className="text-violet-500" />}
                    <p>{detail.value !== undefined ? formatNumber(detail.value) : <Spinner />}</p>
                    {detail.currency && <p>{detail.currency}</p>}
                  </div>
                  <p className="text-center text-sm font-normal text-gray-300 dark:text-gray-500">{detail.detail}</p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
