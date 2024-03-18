"use client"

import NFTCard from "./NFTCard"

export default function ArtTrend() {
    return (
        <>
            <div className="my-10">
                <p className="font-bold text-xl mb-10">Trending in Art</p>
                <div className="grid grid-cols-4 gap-6">
                    <NFTCard collectionLink="#" itemLink="#" logo="/assets/logo-transparent.png" image="/assets/ex1.png" name="Bored Apes" verified={true} floor="43.2K" volume="363K" />
                    <NFTCard collectionLink="#" itemLink="#" logo="/assets/logo-transparent.png" image="/assets/ex1.png" name="Bored Apes" verified={true} floor="43.2K" volume="363K" />
                    <NFTCard collectionLink="#" itemLink="#" logo="/assets/jars256.png" image="/assets/ex2.png" name="Azuki" verified={false} floor="5.6K" volume="109.5K" />
                    <NFTCard collectionLink="#" itemLink="#" logo="/assets/jars256.png" image="/assets/ex2.png" name="Azuki" verified={false} floor="5.6K" volume="109.5K" />
                </div>
            </div>
        </>
    )
}
