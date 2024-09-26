import NFTCardCategories from "./NFTCardCategories";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

  const category  = [
    {
      child: [{
        link: "/category/arts",
        name: "Art NFTs",
        image: "/assets/categoryImages/ArtCategory.png"
      }],
    },
    {
      child: [{
        link: "/category/photography",
        name: "Photography NFTs",
        image: "/assets/categoryImages/PhotoCategory.png"
      }],
    },{
      child: [{
        link: "/category/pfp",
        name: "Profile Picture NFTs",
        image: "/assets/categoryImages/PFPCategory.png"
    }]
  }]

export default function NFTCategories() {
  return (
    <>
      <div className="container">
        {/* <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {category.map(cat => (
            cat.child.map((item, index) => (
              <CarouselItem key={index}>
                  <NFTCardCategories
                  categoryLink={item.link}
                  categoryName={item.name}
                  image={item.image}
                  />
              </CarouselItem>
            ))
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel> */}
        <p className="mb-12 text-center text-xl font-bold">NFT Categories</p>
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
        {/* <div className="flex flex-col justify-center gap-6 md:mx-6 md:grid md:grid-cols-3"> */}
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
