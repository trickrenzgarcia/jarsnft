"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, ipfsToHttps } from "@/lib/utils";
import { CollectionData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import useFloorPrice from "@/hooks/useFloorPrice";
import { Loader2 } from "lucide-react";

export default function NFTCard({ item }: { item: CollectionData }) {
  const { floorPrice, isLoading: loadingFloorPrice } = useFloorPrice(item.contract);
  // const { volume, isLoading: loadingVolume } = useTradingVolume(collection.contract);
  return (
    <Link href={`/collection/${item.contract}`}>
      <Card className="cursor-pointer rounded-lg border-2 bg-background p-2 hover:-translate-y-1 hover:border-3 hover:border-violet-500 dark:hover:border-violet-500">
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

        <CardContent className="p-6">
          <CardTitle className="flex items-center justify-center gap-2">
            <span className="truncate text-sm">{item.name}</span>
            <span className="truncate text-sm">{item.symbol && `(${item.symbol})`}</span>
            <span>{item.isVerified ? <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" /> : null}</span>
          </CardTitle>
        </CardContent>

        <CardFooter className={cn("mt-2 flex w-full justify-between rounded-lg bg-muted p-3 dark:bg-muted/30")}>
          <div className="flex flex-col gap-1">
            <p className="truncate text-xs text-muted-foreground">Floor</p>
            <p className="truncate text-sm font-semibold">
              {loadingFloorPrice ? <Loader2 className="animate-spin" size={14} /> : `${floorPrice || 0} MATIC`}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="truncate text-xs text-muted-foreground">Volume</p>
            <p className="truncate text-sm font-semibold">{/* {loadingVolume ? <Loader2 className="animate-spin" size={14} /> : volume} */}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );

  {
    /* <CardHeader className="relative h-80">
        <Link href={`/collection/${collectionLink}`}>
          <Image
            src={image}
            fill
            alt="NFT"
            className="rounded-t-lg"
            style={{ objectFit: "cover" }}
          />
        </Link>
        <Link href={`/collection/${collectionLink}`}>
          <div className="absolute top-[17rem] z-10 h-16 w-16 rounded-md bg-white">
            <Image className="p-[0.15rem] w-full h-full" src={logo} width={64} height={64} style={{
              objectFit: "cover",
              objectPosition: "center",
            }} alt="logo"/>
          </div>
        </Link>
      </CardHeader> */
  }

  {
    /* <CardFooter className="mt-10 flex flex-col items-start gap-4"> */
  }
  {
    /* Name & Badge */
  }
  {
    /* <div className="flex gap-2">
          <Link href={`/collection/${collectionLink}`}>
            <p className="font-bold">{name}</p>
          </Link>
          {verified && (
            <Image
              src="/assets/verify.png"
              width={24}
              height={20}
              alt="badge"
            />
          )}
        </div> */
  }

  {
    /* Statistics */
  }
  {
    /* <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-gray-500">Floor</p>
            <p className="font-bold">
              {formatNumber(floor)}{" "}
              <span className="font-normal text-red-500">-9%</span>
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-500">24h Vol</p>
            <p className="font-bold">
              {formatNumber(volume)}{" "}
              <span className="font-normal text-red-500">-42.27%</span>
            </p>
          </div>
        </div>
      </CardFooter> */
  }
}
