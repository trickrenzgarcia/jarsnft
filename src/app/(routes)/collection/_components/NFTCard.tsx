import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { NFT } from "@thirdweb-dev/sdk";
import Image from "next/image";

type NFTCardProps = {
  nft: NFT;
  isHidePrice?: boolean;
  price: string | undefined;
  isBidding: boolean;
  minimumBid: string | undefined;
};

export default function NFTCard({ nft, price, isBidding, minimumBid = "N/A" }: NFTCardProps) {
  return (
    <Card className="cursor-pointer rounded-lg border-2 bg-background p-2 hover:-translate-y-1 hover:border-zinc-200 dark:hover:border-violet-500">
      <CardHeader className="flex aspect-square items-center justify-center p-0">
        <Image
          src={nft.metadata.image || "/assets/placeholder/nft_placeholder.svg"}
          alt="NFT ITEM"
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

      <CardContent className="m-2 p-2">
        <CardDescription className="flex items-center gap-1 text-xs">
          {/* <Link className='truncate hover:text-blue-500' href={`/collection/${contractAddress}`}>
            {contractAddress}
          </Link> */}
        </CardDescription>
        <CardTitle className="flex flex-col items-center justify-center text-sm">
          <span className="truncate">{nft.metadata.name}</span>
          {isBidding && <span className="text-xs text-muted-foreground">{`(For bidding)`}</span>}
        </CardTitle>
      </CardContent>

      {price && (
        <CardFooter className={cn("w-full rounded-sm bg-muted p-3 dark:bg-muted/30 sm:flex")}>
          {!isBidding ? (
            <div className="flex w-full flex-col items-center gap-1">
              <p className="truncate text-xs text-muted-foreground">Price</p>
              <p className="truncate text-sm font-semibold">{price}</p>
            </div>
          ) : (
            <div className="flex w-full justify-around">
              <div className="flex flex-col items-center gap-1">
                <p className="truncate text-xs text-muted-foreground">Minimum Bid Price</p>
                <p className="truncate text-sm font-semibold">{minimumBid}</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="truncate text-xs text-muted-foreground">Buyout Price</p>
                <p className="truncate text-sm font-semibold">{price}</p>
              </div>
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
