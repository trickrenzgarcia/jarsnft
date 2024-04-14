import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type CollectionRowsType = {
    collectionHref: string;
    collectionLogoSrc: string;
    collectionName: string;
    isVerified: boolean;
    floorPrice: number;
    floorChange: number;
    volume: number;
    volumeChange: number;
    sales: number;
    salesChange: number;
    allCurrentListedNFTs: number;
    allCurrentNFTS: number; // all NFTs currently in the collection, listed or not
}

export default function CollectionRows({
    collectionHref, collectionLogoSrc, collectionName,
    isVerified, floorPrice, floorChange, volume,
    volumeChange, sales, salesChange, allCurrentListedNFTs, allCurrentNFTS
}: CollectionRowsType) {
    const isFloorChangeNegative = floorChange < 0;
    const isVolumeChangeNegative = volumeChange < 0;
    const isSalesChangeNegative = salesChange < 0;

    return (
        <>
            <Separator />

            <Link href={collectionHref} className="grid grid-cols-10 items-center py-4 transition-background hover:bg-gray-200 dark:hover:bg-gray-900">
                <div className="flex items-center gap-4 col-span-2">
                    <Image src={collectionLogoSrc} width={50} height={50} alt="logo of a collection" className="rounded-lg" />
                    <p>{collectionName}</p>
                    {isVerified && <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" />}
                </div>

                <p className="text-center">{`${floorPrice} MATIC`}</p>
                <p className={cn("text-center text-green", { "text-red-600": isFloorChangeNegative })}>
                    {!isFloorChangeNegative && "+"}{floorChange}%</p>

                <p className="text-center">{`${volume} MATIC`}</p>
                <p className={cn("text-center text-green", { "text-red-600": isVolumeChangeNegative })}>
                    {!isVolumeChangeNegative && "+"}{volumeChange}%</p>

                <p className="text-center">{sales}</p>
                <p className={cn("text-center text-green", { "text-red-600": isSalesChangeNegative })}>
                    {!isSalesChangeNegative && "+"}{salesChange}%</p>

                <p className="text-right col-span-2">
                    {`${allCurrentListedNFTs} of ${allCurrentNFTS} `}
                    <span className="text-gray-500">({((allCurrentListedNFTs / allCurrentNFTS) * 100).toFixed(2)}%)</span>
                </p>
            </Link>
        </>
    )
}