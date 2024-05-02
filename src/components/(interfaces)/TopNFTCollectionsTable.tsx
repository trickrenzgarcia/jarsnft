"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { truncate } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import { MdVerified } from "react-icons/md";
import { useMedia } from "react-use";

const topCollections = [
  {
    collection: "Bored Ape Yacht Club",
    floorPrice: "0.5",
    volume: "100",
    sales: "39",
    listed: "100",
  },
  {
    collection: "Pudgy Penguins",
    floorPrice: "0.5",
    volume: "345",
    sales: "31",
    listed: "233",
  },
  {
    collection: "Cool Cats",
    floorPrice: "0.5",
    volume: "100",
    sales: "39",
    listed: "100",
  },
];

export default function TopNFTCollectionsTable() {
  const isMobile = useMedia("(min-width: 640px)", false);

  return (
    <>
      <Table>
        <TableCaption>A list of top collections.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Collection</TableHead>
            <TableHead className="text-left">Floor Price</TableHead>
            <TableHead className="text-left">Volume</TableHead>
            {isMobile && <TableHead className="text-left">Sales</TableHead>}
            {isMobile && <TableHead className="text-left">Listed</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {topCollections.map((collection) => (
            <TableRow key={collection.collection}>
              <TableCell className="w-[250px] max-w-[250px]">
                <div className="flex w-full items-center gap-1">
                  <Image
                    src="/assets/placeholder/nft_placeholder.svg"
                    width={35}
                    height={35}
                    alt="NFT"
                  />
                  <p>{truncate(collection.collection, isMobile ? 15 : 8)}</p>
                  <MdVerified className="text-blue-500" />
                </div>
              </TableCell>
              <TableCell className="text-left">
                {collection.floorPrice}
              </TableCell>
              <TableCell className="text-left">{collection.volume}</TableCell>
              {isMobile && (
                <TableCell className="text-left">{collection.sales}</TableCell>
              )}
              {isMobile && (
                <TableCell className="text-left">{collection.listed}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
