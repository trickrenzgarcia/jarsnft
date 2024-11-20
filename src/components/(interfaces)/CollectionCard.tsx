"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CollectionData } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ipfsToHttps } from "@/lib/utils";
import useFloorPrice from "@/hooks/useFloorPrice";
import useVolumeAndSales from "@/hooks/useVolumeAndSales";
import { Loader2 } from "lucide-react";

export default function CollectionCard({ item }: { item: CollectionData }) {
  const { floorPrice, isLoading: loadingFloorPrice } = useFloorPrice(item.contract);
  const { totalVolume, isLoading: loadingVolumeSale } = useVolumeAndSales(item.contract);
  return (
    <Card
      key={item.contract}
      className="cursor-pointer rounded-lg border-2 bg-background p-2 shadow-md hover:-translate-y-1 hover:border-3 hover:border-violet-500 dark:hover:border-violet-500"
    >
      <CardHeader className="flex aspect-square items-center justify-center p-0">
        <Image
          src={ipfsToHttps(item.image)}
          alt={item.name}
          width={300}
          height={300}
          loading="eager"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="h-full w-full rounded-md"
        />
      </CardHeader>

      <CardContent className="mt-1 p-4">
        <CardTitle className="flex items-center justify-center gap-2 text-sm">
          <span className="truncate tracking-tight">{item.name} </span>
          <span className="truncate text-sm">{item.symbol && `(${item.symbol})`}</span>
          <span>{item.isVerified ? <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" /> : null}</span>
        </CardTitle>
      </CardContent>
      <CardFooter className={cn("mt-2 flex w-full justify-between rounded-lg bg-muted p-3 dark:bg-muted/30")}>
        <div className="flex flex-col gap-1">
          <p className="truncate text-xs text-muted-foreground">Floor Price</p>
          <p className="truncate text-sm font-semibold">
            {loadingFloorPrice ? <Loader2 className="animate-spin" size={14} /> : `${floorPrice || 0} POL`}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="truncate text-xs text-muted-foreground">Volume</p>
          <p className="truncate text-sm font-semibold">
            {loadingVolumeSale ? <Loader2 className="animate-spin" size={14} /> : totalVolume ? `${totalVolume.toFixed(2)} POL` : "0"}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
