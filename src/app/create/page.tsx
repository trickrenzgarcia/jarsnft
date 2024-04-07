import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import OnBoardingCarousel from "./_components/OnBoardingCarousel";
import Link from "next/link";
import OnBoardingCarouselSm from "./_components/OnBoardingCarouselSm";

export default function Create() {
  return (
    <div className="flex h-[calc(100vh-57px)] w-full items-start justify-between md:items-center">
      {/* Create NFT Container */}
      <div className="flex w-full flex-col justify-center gap-6 p-0 md:p-6">
        {/* Art images for small screen */}
        <div className="flex flex-col md:hidden">
          <OnBoardingCarouselSm />
          <h1 className="m-4 text-2xl font-bold">Create NFT Collection</h1>
        </div>

        {/* Medium screen and up Title */}
        <h1 className="hidden text-2xl font-bold md:block md:text-4xl">
          Create NFT Collection
        </h1>
        <Link href="/create/deploy-contract" className="mx-4 md:mx-0">
          <Alert className="hover:border-blue-400 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
            <AlertTitle>NFT Collection</AlertTitle>
            <AlertDescription>
              The NFT Collection contract is suitable for when you want to have
              a collection of unique NFTs.
            </AlertDescription>
          </Alert>
        </Link>
        <Link href="/create/mint" className="mx-4 md:mx-0">
          <Alert className="cursor-pointer hover:border-indigo-400 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50">
            <AlertTitle>Mint an NFT</AlertTitle>
            <AlertDescription>
              The NFT Mint contract is suitable for when you want to mint a
              single NFT or a small batch of NFTs.
            </AlertDescription>
          </Alert>
        </Link>
      </div>

      {/* Medium screen and up Art Image Carousel */}
      <div className="hidden w-full max-w-xl justify-center md:flex">
        <OnBoardingCarousel />
      </div>
    </div>
  );
}
