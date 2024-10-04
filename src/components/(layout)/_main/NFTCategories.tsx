import NFTCardCategories from "./NFTCardCategories";

export default function NFTCategories({ className }: { className: string }) {
  return (
    <>
      <div className={className}>
        <p className="text-sm lg:text-4xl font-bold py-6">NFT Categories</p>
        <div className="flex flex-col md:flex-row gap-12 md:justify-center">
          <NFTCardCategories
            categoryLink="/category/arts"
            categoryName="Art NFTs"
            image="/assets/categoryImages/artGIF.gif"
          />
          <NFTCardCategories
            categoryLink="/category/photography"
            categoryName="Photography NFTs"
            image="/assets/categoryImages/PhotoCategory.png"
          />
          <NFTCardCategories
            categoryLink="/category/pfp"
            categoryName="Profile Picture NFTs"
            image="/assets/categoryImages/pfpGIF.gif"
          />
        </div>
      </div>
    </>
  );
}
