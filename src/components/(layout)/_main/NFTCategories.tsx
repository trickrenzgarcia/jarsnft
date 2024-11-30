import NFTCardCategories from "./NFTCardCategories";

export default function NFTCategories({ className }: { className: string }) {
  return (
    <>
      <div className={className}>
        <p className="text-md mt-10 py-6 font-bold sm:text-xl md:text-2xl lg:text-4xl">NFT Categories</p>
        <div className="flex flex-col gap-4 md:flex-row md:justify-center">
          <NFTCardCategories categoryLink="/category/art" categoryName="Art NFTs" image="/assets/categoryImages/artGIF.gif" />
          <NFTCardCategories categoryLink="/category/photography" categoryName="Photography NFTs" image="/assets/categoryImages/photoGIF.gif" />
          <NFTCardCategories categoryLink="/category/pfp" categoryName="Profile Picture NFTs" image="/assets/categoryImages/pfpGIF.gif" />
        </div>
      </div>
    </>
  );
}
