import NFTCardCategories from "./NFTCardCategories";

export default function NFTCategories() {
  return (
    <>
      <div>
        <p className="mb-12 text-center text-xl font-bold">NFT Categories</p>
        <div className="flex flex-col gap-6 md:mx-6 md:grid md:grid-cols-3">
          <NFTCardCategories
            categoryLink="#"
            categoryName="Art NFTs"
            image="/assets/ex1.png"
          />
          <NFTCardCategories
            categoryLink="#"
            categoryName="Photography NFTs"
            image="/assets/ex1.png"
          />
          <NFTCardCategories
            categoryLink="#"
            categoryName="Profile Picture NFTs"
            image="/assets/ex1.png"
          />
        </div>
      </div>
    </>
  );
}
