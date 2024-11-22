"use client";

import { CollectionData } from "@/types";
import React, { use, useEffect } from "react";
import Image from "next/image";
import { CircleCheckBig, Loader2 } from "lucide-react";
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
    <div className="grid grid-cols-3 place-items-center space-x-4 rounded-lg p-4 transition-background hover:bg-accent-foreground/15 lg:grid-cols-9">
      <div className="mr-8 flex items-center gap-4 justify-self-start">
        <Image
          src={ipfsToHttps(collection.image)}
          width={50}
          height={50}
          style={{ minHeight: "60px", minWidth: "60px", objectFit: "cover", objectPosition: "center" }}
          alt="logo of a collection"
          className="size-14 rounded-lg"
        />
        <p className="h-fit max-w-[3rem] truncate sm:max-w-[6rem]">{collection.name}</p>
      </div>
      <div>{loadingFloorPrice ? <Loader2 className="animate-spin" size={14} /> : floorPrice}</div> {/* Floor Price */}
      <div className={hide()}>
        {loadingVolumeSale ? <Loader2 className="animate-spin" size={14} /> : totalVolume ? totalVolume.toFixed(2) : "0"}
      </div>{" "}
      {/* Volume*/}
      <div className={hide()}>{loadingVolumeSale ? <Loader2 className="animate-spin" size={14} /> : totalSales}</div> {/* Sales*/}
      <div className={hide()}>{loadingListedCount ? <Loader2 className="animate-spin" size={14} /> : listedCount} </div>
      <div className={hide()}>{loadingTotalItems ? <Loader2 className="animate-spin" size={14} /> : totalItems}</div> {/* Total Items */}
      <div className={hide()}>
        {/* {(() => {
          const owners = ownerCounts[collection.contract] || 0;
          const items = totalItems[collection.contract] || 0;
          if (items === 0 || owners === 0) {
            return "0 (0.00%)";
          }
          const percentage = ((owners / items) * 100).toFixed(2);
          return `${owners} (${percentage}%)`;
        })()} */}
        {ownersLength}
      </div>{" "}
      {/* Number of Owners */}
      {/* <div className={hide()}>{collection.isNsfw ? <CircleCheckBig color="#fd0d0d" /> : null}</div> NSFW */}
      <div>{collection.isVerified ? <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" /> : null}</div>
    </div>
  );
}
