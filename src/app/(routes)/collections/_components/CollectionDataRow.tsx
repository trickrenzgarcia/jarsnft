"use client";

import { CollectionData } from "@/types";
import React, { use, useEffect } from "react";
import Image from "next/image";
import { CircleCheckBig, RefreshCcw } from "lucide-react";
import { getOwners, ipfsToHttps } from "@/lib/utils";
import useFloorPrice from "@/hooks/useFloorPrice";
import useVolumeAndSales from "@/hooks/useVolumeAndSales";
import useListedNfts from "@/hooks/useListedNfts";
import useTotalItems from "@/hooks/useTotalItems";
import useOwnersLength from "@/hooks/useOwnersLength";

type CollectionDataRowProps = {
  collection: CollectionData;
};

export default function CollectionDataRow({ collection }: CollectionDataRowProps) {
  const { floorPrice, isLoading: loadingFloorPrice } = useFloorPrice(collection.contract);
  const { totalVolume, totalSales, isLoading: loadingVolumeSale, isError } = useVolumeAndSales(collection.contract);
  const { listedCount, isLoading: loadingListedCount } = useListedNfts(collection.contract);
  const { totalItems, isLoading: loadingTotalItems } = useTotalItems(collection.contract);
  const { ownersLength } = useOwnersLength(collection.contract);

  const hide = () => {
    return "hidden lg:inline-block";
  };

  return (
    <div className="grid grid-cols-3 place-items-center space-x-4 rounded-lg p-0 transition-background hover:bg-accent-foreground/15 lg:grid-cols-10 lg:p-4">
      <div className="col-span-2 flex w-full items-center gap-1 space-x-4">
        <Image
          src={ipfsToHttps(collection.image)}
          width={50}
          height={50}
          style={{ minHeight: "60px", minWidth: "60px", objectFit: "cover", objectPosition: "center" }}
          alt="logo of a collection"
          className="size-14 rounded-lg"
        />
        <p className="flex-1 sm:tracking-tighter">{collection.name}</p>
      </div>
      <div className={hide()}>{loadingFloorPrice ? <RefreshCcw className="animate-spin" size={14} /> : floorPrice}</div> {/* Floor Price */}
      <div className={hide()}>
        {loadingVolumeSale ? <RefreshCcw className="animate-spin" size={14} /> : totalVolume ? totalVolume.toFixed(2) : "0"}
      </div>{" "}
      {/* Volume*/}
      <div className={hide()}>{loadingVolumeSale ? <RefreshCcw className="animate-spin" size={14} /> : totalSales}</div> {/* Sales*/}
      <div className={hide()}>{loadingListedCount ? <RefreshCcw className="animate-spin" size={14} /> : listedCount} </div> {/* Listed Items*/}
      <div className={hide()}>{loadingTotalItems ? <RefreshCcw className="animate-spin" size={14} /> : totalItems}</div> {/* Total Items */}
      <div className={hide()}>{ownersLength}</div>
      {/* {(() => {
          const owners = ownerCounts[collection.contract] || 0;
          const items = totalItems[collection.contract] || 0;
          if (items === 0 || owners === 0) {
            return "0 (0.00%)";
          }
          const percentage = ((owners / items) * 100).toFixed(2);
          return `${owners} (${percentage}%)`;
      })()} */}
      {/* Unique Owners */}
      <div className={hide()}>{collection.isNsfw ? <CircleCheckBig color="#fd0d0d" /> : null}</div>
      <div>{collection.isVerified ? <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" /> : null}</div>
    </div>
  );
}
