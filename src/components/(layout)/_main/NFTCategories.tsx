import NFTCardCategories from "./NFTCardCategories";

export default function NFTCategories({ className }: { className: string }) {
  return (
    <>
      <div className={className}>
        <p className="mb-12 text-center text-xl font-bold">NFT Categories</p>
        <div className="flex gap-12 justify-center">
          <NFTCardCategories
            categoryLink="/category/arts"
            categoryName="Art NFTs"
            image="/assets/categoryImages/ArtCategory.png"
          />
          <NFTCardCategories
            categoryLink="/category/photography"
            categoryName="Photography NFTs"
            image="/assets/categoryImages/PhotoCategory.png"
          />
          <NFTCardCategories
            categoryLink="/category/pfp"
            categoryName="Profile Picture NFTs"
            image="/assets/categoryImages/PFPCategory.png"
          />
        </div>
      </div>
    </>
  );
}
