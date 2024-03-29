import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { formatNumber } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface NFTCardProps {
    logo: string,
    image: string,
    name: string,
    collectionLink: string,
    itemLink: string,
    floor: number,
    volume: number,
    verified: boolean
}

export default function NFTCard({ logo, image, name, collectionLink, itemLink, floor, volume, verified }: NFTCardProps) {
    return (
        <Card className="mx-auto h-[480px]">
            <CardHeader className="relative h-80">
                <Link href={`/collection/${collectionLink}/${itemLink}`}>
                    <Image src={image} fill objectFit="cover" alt="NFT" className="rounded-t-lg" />
                </Link>
                <Link href={`/collection/${collectionLink}`}>
                    <div className="absolute top-[17rem] rounded-md bg-white h-16 w-16 z-10">
                        <Image className="p-[0.15rem]" src={logo} fill alt="logo" />
                    </div>
                </Link>
            </CardHeader>

            <CardFooter className="flex flex-col mt-10 items-start gap-4">
                {/* Name & Badge */}
                <div className="flex gap-2">
                    <Link href={`/collection/${collectionLink}`}>
                        <p className="font-bold">{name}</p>
                    </Link>
                    {verified && <Image src="/assets/verify.png" width={24} height={20} alt="badge" />}
                </div>

                {/* Statistics */}
                <div className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <p className="text-gray-500">Floor</p>
                        <p className="font-bold">{formatNumber(floor)} <span className="text-red-500 font-normal">-9%</span></p>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-gray-500">24h Vol</p>
                        <p className="font-bold">{formatNumber(volume)} <span className="text-red-500 font-normal">-42.27%</span></p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}