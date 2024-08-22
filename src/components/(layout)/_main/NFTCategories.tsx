import NFTCardCategories from "./NFTCardCategories";

export default function NFTCategories() {
  return (
    <>
      <div>
        <p className="mb-12 text-center text-xl font-bold">NFT Categories</p>
        <div className="flex flex-col gap-2 md:mx-6 md:grid md:grid-cols-3">
          <NFTCardCategories categoryLink="/category/arts" categoryName="Art NFTs" image="/assets/categoryImages/ArtCategory.png" />
          <NFTCardCategories categoryLink="/category/photography" categoryName="Photography NFTs" image="/assets/categoryImages/PhotoCategory.png" />
          <NFTCardCategories categoryLink="/category/pfp" categoryName="Profile Picture NFTs" image="/assets/categoryImages/PFPCategory.png" />
        </div>
      </div>
    </>
  );
}
