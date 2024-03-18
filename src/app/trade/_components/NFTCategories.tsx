"use client"

import NFTCardCategories from "./NFTCardCategories"

export default function NFTCategories() {
    return (
        <>
            <div className="my-10">
                <p className="font-bold text-xl mb-10 text-center">NFT Categories</p>
                <div className="grid grid-cols-3 mx-6 gap-6">
                    <NFTCardCategories categoryLink="#" categoryName="Art NFTs" image="/assets/ex1.png" />
                    <NFTCardCategories categoryLink="#" categoryName="Photography NFTs" image="/assets/ex1.png" />
                    <NFTCardCategories categoryLink="#" categoryName="Profile Picture NFTs" image="/assets/ex1.png" />
                </div>
            </div>
        </>
    )
}
