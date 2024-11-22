"use client";

import Link from "next/link";
import Image from "next/image";
import { ipfsToHttps } from "@/lib/utils";
import { SiPolygon } from "react-icons/si";
import { NFTCollection } from "@/types";
import useTotalItems from "@/hooks/useTotalItems";
import { Loader2 } from "lucide-react";
import useVolumeAndSales from "@/hooks/useVolumeAndSales";

export default function SearchResult({
  result,
  handleLinkClick,
}: {
  result: NFTCollection;
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { totalItems, isLoading: loadingTotalItems } = useTotalItems(result.contract);
  const { totalVolume, isLoading: loadingVolumeSale } = useVolumeAndSales(result.contract);

  return (
    <Link key={result.contract} href={`/collection/${result.contract}`} className="cursor-pointer" onClick={handleLinkClick}>
      <div className="flex items-center gap-2 rounded-lg p-2 hover:bg-muted">
        <div className="mr-2 flex aspect-square items-center justify-center">
          <Image
            src={ipfsToHttps(result.image)}
            alt={result.name}
            width={30}
            height={30}
            style={{ objectFit: "cover" }}
            className="h-50% w-50% rounded-md border-1"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">{result.name}</p>
          <p className="ml-2 flex flex-row items-center gap-2 text-sm text-gray-400">
            {loadingTotalItems ? <Loader2 className="animate-spin" size={14} /> : totalItems} {` items`}
          </p>
        </div>
        <div className="ml-auto">
          <p className="text-sm text-gray-400">
            {loadingVolumeSale ? <Loader2 className="animate-spin" size={14} /> : totalVolume ? `${totalVolume.toFixed(2)} POL` : "0"}
          </p>
        </div>
      </div>
    </Link>
  );
}
