"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import NFTCard from "./NFTCard"

export default function BuySellNFT() {
    return (
        <>
            <div className="mt-14 mb-20">
                <p className="font-bold text-xl mb-12">Buy & Sell NFTs</p>
                <div className="grid grid-cols-3 mx-6 gap-6">
                    <Card className="flex flex-col justify-around mx-auto w-80 h-[480px]">
                        <CardHeader>
                            <CardTitle className="text-3xl">Get Your Digital Assets Now</CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 mb-14">
                            <p>Dive into our curated collection of one-of-a-kind digital assets! Explore, buy, and sell unique NFTs within our vibrant marketplace.</p>
                        </CardContent>
                        <CardFooter>
                            <Link className="px-6 py-3 hover:bg-neutral-800 bg-neutral-900 active:bg-neutral-950 text-white rounded-md" href='#'>Explore</Link>
                        </CardFooter>
                    </Card>

                    <NFTCard collectionLink="#" itemLink="#" logo="/assets/logo-transparent.png" image="/assets/ex1.png" name="Bored Apes" verified={true} floor="43.2K" volume="363K" />

                    <NFTCard collectionLink="#" itemLink="#" logo="/assets/jars256.png" image="/assets/ex2.png" name="Azuki" verified={false} floor="5.6K" volume="109.5K" />
                </div>
            </div>
        </>
    )
}
