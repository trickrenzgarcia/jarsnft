import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import OnBoardingCarousel from "./_components/OnBoardingCarousel";
import Link from "next/link";
import WavyEffect from "./_components/WavyEffect";
import { Images } from "lucide-react";
import { LibraryBig } from "lucide-react";
export default function CreatePage() {
  return (
    <main className="overflow-y-hidden">
      <div className="relative">
        <div className="md:inline absolute z-0 w-full mx-auto py-auto hidden">
          <WavyEffect /> 
        </div>
        <div className="z-10 flex h-[calc(100vh-57px)] w-full flex-col items-start justify-center md:container md:flex-row md:items-center md:justify-around container">
          <div className="flex w-auto flex-col justify-center gap-6 p-0 md:w-[50svw] md:p-6">
            <h1
              className="animate-once animate-duration-[1200ms] animate-ease-out relative mb-6 max-w-4xl animate-fade-up text-center text-6xl font-bold text-zinc-700 dark:text-zinc-100 md:flex md:text-left md:text-7xl antialiased"
            >
              Create your 
              <span className="contents text-purple-700"> NFT</span>
            </h1>
            <Link
              href="/create/deploy-contract"
              className="mx-4 w-fit md:mx-0 md:w-[38svw]"
            >
              <Alert className="animate-once animate-duration-[1200ms] animate-ease-out animate-flip-up p-6 hover:border-blue-400 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
                <AlertTitle className="flex flex-row text-lg md:text-xl text-purple-500 gap-2">
                  Create NFT Collection <LibraryBig />
                </AlertTitle>
                <AlertDescription className="text-base md:text-lg">
                  The NFT Collection contract is suitable for when you want to
                  have a collection of unique NFTs.
                </AlertDescription>
              </Alert>
            </Link>
            <Link
              href="/create/mint"
              className="mx-4 w-fit md:mx-0 md:w-[38svw]"
            >
              <Alert className="animate-once animate-duration-[1200ms] animate-ease-out animate-flip-up cursor-pointer p-6 hover:border-indigo-400 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50">
                <AlertTitle className="flex flex-row text-lg md:text-xl text-purple-500 gap-2">
                  Mint an NFT <Images/>
                </AlertTitle>
                <AlertDescription className="text-base md:text-lg">
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
      </div>
    </main>
  );
}
