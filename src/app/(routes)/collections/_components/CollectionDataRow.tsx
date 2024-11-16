
import { CollectionData } from '@/types'
import React from 'react'
import { OwnerCounts } from './CollectionData';
import Image from 'next/image';
import { CircleCheckBig } from 'lucide-react';
import { ipfsToHttps } from '@/lib/utils';

type CollectionDataRowProps = {
  floorPrice: number | "N/A";
  collection: CollectionData;
  ownerCounts: OwnerCounts;
  totalItems: {
    [contract: string]: number
  };
}

export default async function CollectionDataRow({ floorPrice, collection, ownerCounts, totalItems}: CollectionDataRowProps) {

  console.log(floorPrice, collection.contract, collection.name)

  const hide = () => {
    return "hidden lg:inline-block";
  };

  return (
    <div
      className="grid grid-cols-3 place-items-center space-x-4 rounded-lg p-4 transition-background hover:bg-accent-foreground/15 lg:grid-cols-9"
    >
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
      <div>{floorPrice}</div> {/* Floor Price */}
      <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Volume */}
      <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Sales */}
      <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Listed */}
      <div className={hide()}>{totalItems[collection.contract] || 0}</div> {/* Total Items */}
      <div className={hide()}>
        {(() => {
          const owners = ownerCounts[collection.contract] || 0;
          const items = totalItems[collection.contract] || 0;
          if (items === 0 || owners === 0) {
            return "0 (0.00%)";
          }
          const percentage = ((owners / items) * 100).toFixed(2);
          return `${owners} (${percentage}%)`;
        })()}
      </div>{" "}
      {/* Unique Owners */}
      <div className={hide()}>{collection.isNsfw ? <CircleCheckBig color="#fd0d0d" /> : null}</div> {/* NSFW */}
      <div>{collection.isVerified ? <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" /> : null}</div>
    </div>
  )
}
