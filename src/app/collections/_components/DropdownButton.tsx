"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { jars } from "@/lib/core/api";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CollectionTable from "./CollectionTable";
import { NFTCollection } from "@/lib/core/types";
import * as getCollections from "@/utils/getCollections";

export default function DropdownButton({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [dropdownName, setDropdownName] = useState("All Collections");
  const [nftCollections, setNftCollections] = useState<any[]>([]);
  const [entries, setEntries] = useState<NFTCollection[]>([]);
  const [isLoading, setLoading] = useState(true);

  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  useEffect(() => {
    setLoading(true);
    async function getNFTCollectionsAPI() {
      let data;
      if (dropdownName == "Art NFTs") {
        data = await getCollections.getCollectionsByCategory("art");
      } else if (dropdownName == "Photography NFTs") {
        data = await getCollections.getCollectionsByCategory("photography");
      } else if (dropdownName == "Profile Picture NFTs") {
        data = await getCollections.getCollectionsByCategory("pfp");
      } else {
        data = await jars.getNFTCollections();
      }
      setNftCollections(data);
    }

    getNFTCollectionsAPI();
    setEntries(nftCollections.slice(start, end));
    setLoading(false);
  }, [dropdownName, page, nftCollections.length]);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-12 w-52 items-center justify-center gap-2 rounded-lg bg-background">
          {dropdownName}
          <IoIosArrowDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setDropdownName("All Collections")}>
            All Collections
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDropdownName("Art NFTs")}>
            Art NFTs
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDropdownName("Photography NFTs")}>
            Photography NFTs
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setDropdownName("Profile Picture NFTs")}
          >
            Profile Picture NFTs
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Column Titles */}
      <div className="col-span-2 mb-4 grid grid-cols-10 text-gray-500">
        <div className="col-span-2"></div>
        <p className="text-center">Floor Price</p>
        <p className="text-center">Floor Change</p>
        <p className="text-center">Volume</p>
        <p className="text-center">Volume Change</p>
        <p className="text-center">Sales</p>
        <p className="text-center">Sales Change</p>
        <p className="col-span-2 text-right">Listed</p>
      </div>

      {isLoading ? (
        <p>Loading collections...</p>
      ) : (
        <CollectionTable
          collectionsLength={nftCollections.length}
          collections={entries}
          start={start}
          end={end}
        />
      )}
    </>
  );
}
