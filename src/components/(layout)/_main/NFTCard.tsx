import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, formatNumber } from "@/lib/utils";
import { CollectionData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

// interface NFTCardProps {
//   logo: string;
//   image: string;
//   name: string;
//   collectionLink: string;
//   itemLink: string;
//   floor: number;
//   volume: number;
//   verified: boolean;
// }

export default function NFTCard({ item }: { item: CollectionData }) {
  return (
    <Card className="p-2 border-2 bg-background rounded-lg hover:-translate-y-1 cursor-pointer hover:border-3 hover:border-zinc-200 dark:hover:border-zinc-800">
      <CardHeader className='flex items-center justify-center aspect-square p-0'>
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={300}
          loading='eager'
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          className="h-full w-full rounded-md"
        />
      </CardHeader>

      <CardContent className='mt-1 pl-1'>
        <CardDescription className='flex items-center gap-1 text-xs'>
          <span className='truncate'>{item.name}</span>
          {item.isVerified && (<MdVerified className='text-xs' />)}
        </CardDescription>
        <CardTitle className='flex items-center text-sm'>
          <span className='truncate'>{item.name}</span>
          <span>&nbsp;{item.symbol && `(${item.symbol})`}</span>
        </CardTitle>
      </CardContent>

      <CardFooter className={cn('w-full mt-2 flex justify-between rounded-lg p-3 bg-muted dark:bg-muted/30')}>
        <div className='flex flex-col gap-1'>
          <p className='text-xs truncate text-muted-foreground'>Floor</p>
          <p className='text-sm font-semibold truncate'>100 MATIC</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-xs truncate text-muted-foreground'>Volume</p>
          <p className='text-sm font-semibold truncate'>100 MATIC</p>
        </div>
      </CardFooter>

      {/* <CardHeader className="relative h-80">
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
      </CardHeader> */}

      {/* <CardFooter className="mt-10 flex flex-col items-start gap-4"> */}
      {/* Name & Badge */}
      {/* <div className="flex gap-2">
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
        </div> */}

      {/* Statistics */}
      {/* <div className="flex w-full justify-between">
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
      </CardFooter> */}
    </Card>
  );
}
