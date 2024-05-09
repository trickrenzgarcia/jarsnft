import React from "react";
import Image from "next/image";

const binanceSteps = [
  "Step 1 : Login to your Desired Exchange Platform",
  "Step 2 : Go to the Asset's tab and select 'Overview.'",
  "Step 3 : Click on the cryptocurrency you want",
  "Step 4 : Choose and confirm mode of payment.",
];

const binanceImages = [
  "/assets/InsightsAsset/Guide.png",
  "/assets/InsightsAsset/Guide2.png",
  "/assets/InsightsAsset/Guide3.png",
  "/assets/InsightsAsset/Guide4.png",
];

const Page = () => {
  return (
    <>
      <h1 className="m-5 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text pb-5 text-center font-sans text-lg font-bold text-transparent sm:text-5xl md:text-7xl">
        Exchange Cryptocurrency
      </h1>
      <h1 className="m-5 text-center xl:text-2xl ">
        Prerequisites: Metamask Wallet, Centralized Exchange Platforms, Bank
        Transfer or GCash
      </h1>
      <div className="mt-5 flex max-h-full flex-wrap content-center justify-around gap-5">
        {binanceSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-xl">{step}</p>
            <Image
              src={binanceImages[index]}
              alt={`pictureGuide ${index}`}
              width={400}
              height={550}
              style={{ minHeight: 550, minWidth: 400, maxHeight: 550 }}
              quality={80}
              className="m-5 rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
