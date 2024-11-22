import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { NFT } from "@thirdweb-dev/sdk";
import Image from "next/image";

type NFTCardProps = {
  nft: NFT;
  isHidePrice?: boolean;
};

export default function NFTCard({ nft, isHidePrice = true }: NFTCardProps) {
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
        <CardTitle className="flex items-center justify-center text-sm">
          <span className="truncate">{nft.metadata.name}</span>
        </CardTitle>
      </CardContent>

      <CardFooter className={cn(isHidePrice && "hidden", "w-full justify-between rounded-sm bg-muted p-3 dark:bg-muted/30 sm:flex")}>
        <div className="flex flex-col items-start gap-1">
          <p className="truncate text-xs text-muted-foreground">Price</p>
          <p className="truncate text-sm font-semibold">100 POL</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="truncate text-xs text-muted-foreground">Highest Bid</p>
          <p className="truncate text-sm font-semibold">100 POL</p>
        </div>
      </CardFooter>
    </Card>
  );
}
