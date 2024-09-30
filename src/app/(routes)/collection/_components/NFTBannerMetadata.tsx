"use client";

import { open_sans, poppins } from "@/lib/fonts";
import { cn, formatNumber } from "@/lib/utils";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { ReadMore } from "./ReadMore";
import React, { useEffect } from "react";
import { SiPolygon } from "react-icons/si";
import TooltipMsg from "@/components/(interfaces)/TooltipMsg";
import { CustomContractMetadata } from "@thirdweb-dev/sdk";
import {
  useContract,
  useContractEvents,
  useContractMetadata,
  useMetadata,
  useNFTs,
} from "@thirdweb-dev/react";
import { Skeleton } from "@/components/ui/skeleton";
import { NFTCollection } from "@/types";
import { useCollectionContext } from "./CollectionProvider";
import { NFT_MARKETPLACE } from "@/lib/constant";
import { BigNumber, ethers } from "ethers";

type BannerMetadataProps = {
  address: string;
  collection: NFTCollection;
};
type QueryMetadata = {
  data: CustomContractMetadata;
  isLoading: boolean;
  isError: boolean;
};
export default function NFTBannerMetadata({
  address,
  collection,
}: BannerMetadataProps) {
  const { contract } = useContract(address);
  const { totalListingCount } = useCollectionContext();
  const { data, isLoading, isError } = useContractMetadata(
    contract,
  ) as QueryMetadata;
  const {
    data: nfts,
    isError: errorNfts,
    isLoading: loadingNfts,
  } = useNFTs(contract);

  const { contract: marketPlaceContract } = useContract(
    NFT_MARKETPLACE,
    "marketplace-v3",
  );
  const { data: sales } = useContractEvents(marketPlaceContract, "NewSale", {
    queryFilter: {
      filters: {
        assetContract: address,
      },
    },
  });

  const totalSalesPrice = !sales
    ? 0
    : sales.reduce((total, sale) => {
        const price = BigNumber.from(sale.data.totalPricePaid);
        return total.add(price);
      }, BigNumber.from(0));

  const floorPrice = !sales
    ? 0
    : sales
        .reduce((min, sale) => {
          const price = BigNumber.from(sale.data.totalPricePaid);
          return price.lt(min) ? price : min;
        }, BigNumber.from(sales[0].data.totalPricePaid))
        .toString();

  const [details, setDetails] = React.useState([
    {
      detail: "Total Volume",
      value: totalSalesPrice
        ? parseFloat(ethers.utils.formatEther(totalSalesPrice))
        : 0,
      currency: "MATIC",
    },
    {
      detail: "Floor Price",
      value: floorPrice ? parseFloat(ethers.utils.formatEther(floorPrice)) : 0,
      currency: "MATIC",
    },
    { detail: "Listed", value: totalListingCount ? totalListingCount : 0 },
    { detail: "Owners(Unique)", value: 1 },
  ]);

  useEffect(() => {
    setDetails((prevDetails) =>
      prevDetails.map((item) =>
        item.detail === "Listed" ? { ...item, value: totalListingCount } : item,
      ),
    );
  }, [totalListingCount]);

  if (isLoading) {
    return (
      <main className="flex w-full flex-col">
        <div className="relative h-[200px] w-auto md:h-[400px]"></div>
        <div className="absolute hidden h-[400px] w-full px-7 py-6 md:block">
          <section className="mb-4 flex justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-[125px] w-[125px] rounded-xl border" />
              <div
                className={cn(
                  "flex w-[500px] flex-col gap-2",
                  open_sans.className,
                )}
              >
                <Skeleton className="h-7 w-40 border" />
                <Skeleton className="h-5 w-32 border" />
              </div>
            </div>
          </section>
          <section className="mb-3 flex w-full justify-between">
            <div className="flex h-[160px] w-[500px] flex-col gap-1 overflow-x-hidden text-sm font-semibold">
              <Skeleton className="h-5 w-full border" />
              <Skeleton className="h-5 w-[80%] border" />
              <Skeleton className="h-5 w-[72%] border" />
              <Skeleton className="h-5 w-[85%] border" />
            </div>
            <div className="hidden items-center gap-6 pl-3 lg:flex">
              {details.map((detail, i) => (
                <div key={i} className={cn(poppins.className, "w-[110px]")}>
                  <Skeleton className="h-20 w-20 border" />
                </div>
              ))}
            </div>
          </section>
          <div className="mb-3 flex gap-3">
            <Skeleton className="h-5 w-32 border"> </Skeleton>
            <Skeleton className="h-5 w-32 border"> </Skeleton>
            <Skeleton className="h-5 w-32 border"> </Skeleton>
            <Skeleton className="h-5 w-32 border"> </Skeleton>
          </div>
        </div>
      </main>
    );
  }

  if (data) {
    return (
      <main className="flex w-full flex-col bg-slate-600 text-white dark:bg-background">
        <div className="relative h-[400px] min-h-[200px] w-auto ">
          <Image
            src={data.image || "/assets/collection_banner_placeholder.png"}
            fill
            style={{
              objectFit: "cover",
            }}
            alt="Collection Banner"
            className="opacity-65 blur-lg dark:opacity-30"
          />
        </div>
        <div className="absolute block h-[435px] w-full px-7 py-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)] sm:h-[410px]">
          <section className="mb-4 flex justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={data.image || "/assets/image_not_found.jpg"}
                width={125}
                height={125}
                alt=""
                className="aspect-square rounded-xl border bg-background object-fill"
              />
              <div className={cn("w-[500px]", open_sans.className)}>
                <div className="flex w-full items-center gap-1 text-2xl font-semibold">
                  <div className="truncate">
                    <h2 className="truncate">{data.name}</h2>
                  </div>
                  <TooltipMsg message="Verified">
                    <div className="cursor-pointer rounded-sm p-1 hover:bg-slate-500/30">
                      <MdVerified className="text-blue-500" />
                    </div>
                  </TooltipMsg>
                </div>

                {/* <p className="font-bold">A collection of {} NFTs.</p> */}
              </div>
            </div>
            {/* <div className=""></div> */}
          </section>

          <section className="mb-3 flex w-full justify-between">
            <div className="h-[75px] overflow-x-hidden text-sm font-semibold dark:text-gray-300 lg:h-[160px] lg:w-[500px]">
              <ReadMore
                id="collection-description"
                text={data.description || ""}
                amountOfWords={24}
              />
            </div>
            {/* Placeholder for data will get in Simplehash */}
            <div className="hidden items-center gap-6 pl-3 lg:flex">
              {details.map((detail, i) => (
                <div key={i} className={cn(poppins.className, "w-[150px]")}>
                  <div className="flex justify-center gap-2 text-2xl font-semibold">
                    <SiPolygon className="text-violet-500" />
                    <p>{formatNumber(detail.value)}</p>
                    <p>{detail.currency}</p>
                  </div>
                  <p className="text-center text-sm font-normal text-gray-300 dark:text-gray-500">
                    {detail.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
          {/* placeholder for tablet size */}
          <section className="my-4 border-y-2 border-[#a5a5a580] py-4 dark:border-[#6e6e6e69] lg:hidden">
            <div className="flex items-center gap-6 overflow-x-auto lg:hidden">
              {details.map((detail, i) => (
                <div key={i} className={cn(poppins.className, "w-[150px]")}>
                  <div className="flex justify-center gap-2 text-2xl font-semibold">
                    <SiPolygon className="text-violet-500" />
                    <p>{formatNumber(detail.value)}</p>
                    <p>{detail.currency}</p>
                  </div>
                  <p className="text-center text-sm font-normal text-gray-300 dark:text-gray-500">
                    {detail.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="my-3 flex gap-3">
            <div>
              Items:{" "}
              <span className="font-bold">{(nfts && nfts.length) || "--"}</span>
            </div>
            <div>
              Created:{" "}
              <span className="font-bold">
                {new Date(collection.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div>
              Creator Earnings:{" "}
              <span className="font-bold">
                {`${collection.sellerFeeBasisPoints / 100}%`}
              </span>
            </div>
            <div>
              Chain: <span className="font-bold">Polygon</span>
              {/* {collection.simpleHashData.collections.map((col) => col.chains)[0]} */}
            </div>
          </section>
        </div>
      </main>
    );
  }
}
