import NFTCardCategories from "./NFTCardCategories"

export default function NFTCategories() {
    return (
        <>
            <div className="mt-14 mb-20">
                <p className="font-bold text-xl mb-12 text-center">NFT Categories</p>
                <div className="flex flex-col md:grid md:grid-cols-3 md:mx-6 gap-6">
                    <NFTCardCategories categoryLink="#" categoryName="Art NFTs" image="/assets/ex1.png" />
                    <NFTCardCategories categoryLink="#" categoryName="Photography NFTs" image="/assets/ex1.png" />
                    <NFTCardCategories categoryLink="#" categoryName="Profile Picture NFTs" image="/assets/ex1.png" />
                </div>
            </div>
        </>
    )
}
