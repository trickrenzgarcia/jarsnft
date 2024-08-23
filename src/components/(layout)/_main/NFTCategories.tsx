import NFTCardCategories from "./NFTCardCategories";

export default function NFTCategories() {
  return (
    <>
      {/* <div className="flex flex-col gap-2 md:mx-6 md:grid md:grid-cols-3"> */}
      <div className="container mx-auto p-4">
        <p className="mb-12 text-center text-2xl font-bold lg:text-3xl">Explore NFT Categories</p>
        <div className="flex flex-wrap justify-center gap-6 overflow-x-auto md:flex-nowrap">
          <NFTCardCategories categoryLink="/category/arts" categoryName="Art NFTs" image="/assets/categoryImages/ArtCategory.png" />
          <NFTCardCategories categoryLink="/category/photography" categoryName="Photography NFTs" image="/assets/categoryImages/PhotoCategory.png" />
          <NFTCardCategories categoryLink="/category/pfp" categoryName="Profile Picture NFTs" image="/assets/categoryImages/PFPCategory.png" />
        </div>
      </div>
    </>
  );
}
