import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface NFTCardProps {
  logo: string;
  image: string;
  name: string;
  collectionLink: string;
  itemLink: string;
  floor: number;
  volume: number;
  verified: boolean;
}

export default function NFTCard({
  logo,
  image,
  name,
  collectionLink,
  itemLink,
  floor,
  volume,
  verified,
}: NFTCardProps) {
  return (
    <Card className="mx-auto h-[480px]">
      <CardHeader className="relative h-80">
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
            <Image className="p-[0.15rem]" src={logo} fill alt="logo" />
          </div>
        </Link>
      </CardHeader>

      <CardFooter className="mt-10 flex flex-col items-start gap-4">
        {/* Name & Badge */}
        <div className="flex gap-2">
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
        </div>

        {/* Statistics */}
        <div className="flex w-full justify-between">
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
      </CardFooter>
    </Card>
  );
}
