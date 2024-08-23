import NFTCardCategories from "./NFTCardCategories";

export default function NFTCategories() {
  return (
    <>
      <div className="container mx-auto p-4">
        <p className="mb-12 text-center text-2xl font-bold lg:text-3xl">Explore NFT Categories</p>
        <div className="flex flex-wrap justify-center gap-12 overflow-x-auto p-2 md:flex-nowrap">
          <NFTCardCategories categoryLink="/category/arts" categoryName="Art NFTs" image="/assets/categoryImages/ArtCategory.png" />
          <NFTCardCategories categoryLink="/category/photography" categoryName="Photography NFTs" image="/assets/categoryImages/PhotoCategory.png" />
          <NFTCardCategories categoryLink="/category/pfp" categoryName="Profile Picture NFTs" image="/assets/categoryImages/PFPCategory.png" />
        </div>
      </div>
    </>
  );
}
