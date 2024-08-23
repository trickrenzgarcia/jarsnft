import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/utils/cn";
import { CollectionData } from "@/utils/getCollections";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

type CollectionCardProps = {
  item: CollectionData;
  hideFloorPrice: boolean;
};

export default function CollectionCard({ item, hideFloorPrice = true }: CollectionCardProps) {
  return (
    <Card
      key={item.contract}
      className="cursor-pointer rounded-lg border-2 bg-background p-2 hover:-translate-y-1 hover:border-3 hover:border-zinc-200 dark:hover:border-zinc-800"
    >
      <CardHeader className="flex aspect-square items-center justify-center p-0">
        <Image
          src={item.image}
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
      <CardContent className="mt-1 pl-1">
        <CardDescription className="flex items-center gap-1 text-xs">
          <span className="truncate">{item.name}</span>
          {item.is_verified && <MdVerified className="text-xs" />}
        </CardDescription>
        <CardTitle className="flex items-center text-sm">
          <span className="truncate">{item.name}</span>
          <span>&nbsp;{item.symbol && `(${item.symbol})`}</span>
        </CardTitle>
      </CardContent>
      <CardFooter className={cn(hideFloorPrice && "hidden", "mt-2 w-full justify-between rounded-lg bg-muted p-3 dark:bg-muted/30 sm:flex")}>
        <div className="flex flex-col gap-1">
          <p className="truncate text-xs text-muted-foreground">Floor</p>
          <p className="truncate text-sm font-semibold">100 MATIC</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="truncate text-xs text-muted-foreground">Volume</p>
          <p className="truncate text-sm font-semibold">100 MATIC</p>
        </div>
      </CardFooter>
    </Card>
  );
}
