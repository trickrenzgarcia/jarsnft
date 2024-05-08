import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Press } from "@/app/about/_components/Press";
import { Navbar } from "@/components/(layout)";

const people = [
  {
    id: 1,
    name: "Alrae Chaluangco",
    designation: "Project Manager",
    image: "/assets/Rae.png",
  },
  {
    id: 2,
    name: "Patrick Renz Garcia",
    designation: "Chief Technology Officer",
    image: "/assets/Trick.png",
  },
  {
    id: 3,
    name: "Rigor Syguat",
    designation: "Administrator / Manager",
    image: "/assets/Rigor.png",
  },
  {
    id: 4,
    name: "Jeffrey James Dapar",
    designation: "Software Quality Assurance Engineer",
    image: "/assets/Jeff.png",
  },
];

const images = [
  "https://images.unsplash.com/photo-1708725805654-287ed8e7b70d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707885437265-1debb3cf49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1708860219707-f9e981be62c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573334363497-3f3f9dc56025?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1532029118404-c94b27247e34?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603950227760-e609ce8e15b4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1598544365961-ef41ae9129b5?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711093491283-fd488df293ea?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708524709235-e054675c6be8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1678069614987-22225d9519bb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1576076819613-26f8537ae375?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528155124528-06c125d81e89?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1710621665220-68b5deec87f8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1699475554452-f24c6a035a41?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709393361159-b915b32b061a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1692401891528-44cf0c97154e?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1676911809759-77bb68b691c9?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1706606999710-72658165a73d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1518410240146-36aeeed0e4f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1557175586-6265ecdc7646?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1710976151734-72b48a6d66f4?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1574861501474-e2f098969b0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711669780175-1b964f919835?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const words =
  "We are just students when we tackle this project it so hard for us beginners to grab a latest technology trend but we are eager and passionate to create a platform wherein artists and traders will have opportunities. It took us years to finish this project but we are determined to finish it. We wouldn't be able to finish this without the help of almighty God and our family who support us all the way. We are so grateful to have them in our lives. We are so excited to share this platform to the world and we hope that this will help a lot of people to have a better future.";

const page = () => {
  return (
    <>
      <Navbar />
      <BackgroundBeams />
      <div className="relative overflow-hidden px-2 pb-40 pt-20 md:pt-40">
        <div className="relative z-20 mx-auto w-full max-w-[84rem]">
          <div className="grid grid-cols-1 gap-10 pb-20 xl:grid-cols-2">
            <div className="flex flex-col items-start px-8 xl:px-0">
              <h1 className="relative mb-6 max-w-4xl text-left text-3xl font-bold text-zinc-700 dark:text-zinc-100 md:text-7xl">
                About JarsNFT
              </h1>
              <h2 className="font-regular relative mb-8 max-w-2xl text-left text-sm leading-loose tracking-wide text-zinc-500 antialiased sm:text-xl">
                NFT Marketplace that empowers Artist to monetize their work.
              </h2>
              <h2 className="font-regular relative mb-8 max-w-2xl text-left text-sm leading-loose tracking-wide text-zinc-500 antialiased sm:text-xl">
                Providing Opportunities for Traders
              </h2>
              <h2 className="font-regular relative mb-8 max-w-2xl text-left text-sm leading-loose tracking-wide text-zinc-500 antialiased sm:text-xl">
                Seamless Experience and Security
              </h2>
              <div className="relative mt-10">
                <div className="relative z-20 mb-4 flex flex-wrap items-center justify-start overflow-x-auto">
                  <div className="mr-4 flex items-center space-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                      >
                        <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                        <path d="M15 12v-3"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                      Next.js
                    </span>
                  </div>
                  <div className="mr-4 flex items-center space-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                      >
                        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                      React
                    </span>
                  </div>
                  <div className="mr-4 flex items-center space-x-2">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4 flex-shrink-0 stroke-[0.5px] text-neutral-500 md:h-10 md:w-10"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                      TailwindCSS
                    </span>
                  </div>
                  <div className="mr-4 flex items-center space-x-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                      >
                        <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                        <path d="M20 12l-8 8l-4 -4"></path>
                      </svg>
                    </span>
                    <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                      Framer Motion
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden h-full w-full xl:block">
              <div className="mb-2 flex w-full flex-row items-end justify-end pr-4">
                <AnimatedTooltip items={people} />
              </div>
              <div className="p-auto relative w-auto overflow-hidden rounded-xl">
                <TextRevealCard
                  text="You know the business"
                  revealText="We have the solution"
                >
                  <TextRevealCardTitle>
                    Providing Exceptional Output
                  </TextRevealCardTitle>
                  <TextRevealCardDescription>
                    We make magic happen.
                  </TextRevealCardDescription>
                </TextRevealCard>
              </div>
            </div>
          </div>
          <Press />
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
            <div>
              <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text p-5 font-sans text-lg font-bold text-transparent md:text-7xl">
                Our Story
              </h1>
              <TextGenerateEffect words={words} />
            </div>
            <div>
              <ParallaxScroll images={images} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
