"use client";

import { open_sans, poppins } from "@/lib/fonts";
import { cn, formatNumber } from "@/lib/utils";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { ReadMore } from "./ReadMore";
import React from "react";
// import { FaEthereum } from "react-icons/fa";
import { SiPolygon } from "react-icons/si";
import TooltipMsg from "@/components/(interfaces)/TooltipMsg";
// import { MetadataSchema } from "@/types";
import { CustomContractMetadata } from "@thirdweb-dev/sdk";
import {
  useContract,
  useContractMetadata,
  useMetadata,
} from "@thirdweb-dev/react";
import { Skeleton } from "@/components/ui/skeleton";
import { NFTCollection } from "@/lib/core/types";

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
  const { data, isLoading, isError } = useContractMetadata(
    contract,
  ) as QueryMetadata;
  const [details] = React.useState([
    { detail: "Total Volume", value: 1000000, currency: "MATIC" },
    { detail: "Floor Price", value: 50, currency: "MATIC" },
    { detail: "Best Offer", value: 51, currency: "MATIC" },
    { detail: "Listed", value: 10 },
    { detail: "Owners(Unique)", value: 1000 },
  ]);

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
        <div className="relative h-[200px] w-auto md:h-[400px] ">
          <Image
            src={data.image || "/assets/collection_banner_placeholder.png"}
            fill
            style={{
              objectFit: "cover",
            }}
            alt="Collection Banner"
            className="opacity-100 blur-lg md:opacity-65 dark:md:opacity-30"
          />
        </div>
        <div className="absolute hidden h-[400px] w-full px-7 py-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)] md:block">
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
            <div className=""></div>
          </section>

          <section className="mb-3 flex w-full justify-between">
            <div className="h-[160px] w-[500px] overflow-x-hidden text-sm font-semibold dark:text-gray-300">
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
          <section className="mb-3 flex gap-3">
            <div>Items: </div>
            <div>Created: </div>
            <div>Creator Earnings: </div>
            <div>Chain: </div>
          </section>
        </div>
      </main>
    );
  }
}
