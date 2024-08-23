import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/components/(layout)";
import AboutIcon from "./_components/AboutIcon";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const admins = [
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

const companyImages = [
  {
    image: "/assets/aboutImages/coinbase.png",
  },
  {
    image: "/assets/aboutImages/coolcats.png",
  },
  {
    image: "/assets/aboutImages/gala.png",
  },
  {
    image: "/assets/aboutImages/aavegotchi.png",
  },
  {
    image: "/assets/aboutImages/polygon.png",
  },
  {
    image: "/assets/aboutImages/layer3.png",
  },
  {
    image: "/assets/aboutImages/gods.png",
  },
];

const nextJsIcon = {
  d: "M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993 M15 12v-3",
};

const reactJsIcon = {
  d: "M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102 M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102 M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2 M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2 M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896 M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897 M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z",
};

const tailwindIcon = {
  d: "M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z",
};

const framerIcon = {
  d: "M12 12l-8 -8v16l16 -16v16l-4 -4 M20 12l-8 8l-4 -4",
};

const styles = {
  h1: "relative mb-6 max-w-4xl text-left text-3xl font-bold text-zinc-700 dark:text-zinc-100 md:text-7xl",
  h2: "font-regular relative mb-8 max-w-2xl text-left text-sm leading-loose tracking-wide text-sky-500 antialiased sm:text-xl",
};

const page = () => {
  return (
    <>
      <Navbar />
      <BackgroundBeams />
      <div className="relative mx-auto my-auto min-h-screen overflow-hidden">
        <div className="relative z-20 mx-auto w-full max-w-[84rem]">
          <div className="grid grid-cols-1 justify-items-center gap-10 lg:my-20 xl:grid-cols-2">
            <div className="flex flex-col items-start space-y-4 px-8 xl:px-0">
              <h1 className={styles.h1}>About JarsNFT</h1>
              <h2 className={styles.h2}>
                To develop a Philippine-based decentralized art NFT trading marketplace empowered by polygon blockchain technology using a hash
                algorithm.
              </h2>
              <h2 className={styles.h2}>
                To develop a module that will allow artists to upload (NFT&apos;s)
                <br /> non-fungible tokens .
              </h2>
              <h2 className={styles.h2}>To develop a module that will allow traders to buy and sell (NFT&apos;s) non-fungible tokens .</h2>
              <h2 className={styles.h2}>
                To develop a module that will guide users on how to exchange cryptocurrencies across different centralized exchanges.
              </h2>
              <div className="relative mt-10">
                <div className="relative z-20 mb-4 flex flex-wrap items-center justify-start overflow-x-auto">
                  <AboutIcon icon={nextJsIcon} iconName="Next JS" />
                  <AboutIcon icon={reactJsIcon} iconName={"React JS"} />
                  <AboutIcon icon={tailwindIcon} iconName={"Tailwind CSS"} />
                  <AboutIcon icon={framerIcon} iconName={"Framer Motion"} />
                </div>
              </div>
            </div>
            <div className="relative hidden h-full w-full xl:block">
              <div className="mb-2 flex w-full flex-row items-end justify-end pr-4">
                <AnimatedTooltip items={admins} />
              </div>
              <div className="p-auto relative w-auto overflow-hidden rounded-xl">
                <TextRevealCard text="You know the business" revealText="We have the solution">
                  <TextRevealCardTitle>Providing Exceptional Output</TextRevealCardTitle>
                  <TextRevealCardDescription>We make magic happen.</TextRevealCardDescription>
                </TextRevealCard>
              </div>
            </div>
          </div>
          <Marquee speed={50} pauseOnHover loop={0}>
            {companyImages.map((companyImage, index) => (
              <Image
                key={index}
                src={companyImage.image}
                width={200}
                height={100}
                sizes="(max-width: 200px), (max-height: 100px)"
                alt="company logo"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default page;
