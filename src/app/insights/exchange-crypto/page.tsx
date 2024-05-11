import React from "react";
import Image from "next/image";

const binanceSteps = [
  "Step 1 : Login to your Binance account.",
  "Step 2 : Go to Asset's tab and select 'Overview.'",
  "Step 3 : Choose Cryptocurrency to exchange",
  "Step 4 : Choose and confirm payment.",
];

const binanceImages = [
  "/assets/InsightsAsset/Guide.png",
  "/assets/InsightsAsset/Guide2.png",
  "/assets/InsightsAsset/Guide3.png",
  "/assets/InsightsAsset/Guide4.png",
];

const coinsSteps = [
  "Step 1 : Tap Buy or Sell.",
  "Step 2 : Select Buy Crypto.",
  "Step 3 : Choose Crypto token",
  "Step 4 : Purchase to complete transaction.",
  "Step 1 : Tap Buy or Sell.",
  "Step 2 : Select Sell Crypto",
  "Step 3 : Sell to complete transaction.",
];

const coinsImages = [
  "/assets/InsightsAsset/CoinsBuySell.gif",
  "/assets/InsightsAsset/CoinsBuy.gif",
  "/assets/InsightsAsset/CoinsBuy2.gif",
  "/assets/InsightsAsset/CoinsPurchase.gif",
  "/assets/InsightsAsset/CoinsBuySell.gif",
  "/assets/InsightsAsset/CoinsSell1.gif",
  "/assets/InsightsAsset/CoinsSell2.gif",
];

const Page = () => {
  return (
    <>
      <div>
        <h1 className="m-5 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text pb-5 text-center font-sans text-4xl font-bold text-transparent md:text-5xl">
          Exchange Cryptocurrency
        </h1>
        <h1 className="m-5 text-center xl:text-2xl ">
          Prerequisites: Metamask Wallet, Centralized Exchange Platforms, Bank
          Transfer or GCash
        </h1>
      </div>
      <div className="mt-5 flex max-h-full flex-wrap content-center justify-around gap-5">
        {binanceSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="lg:text-md text-center text-sm">{step}</p>
            <Image
              src={binanceImages[index]}
              alt={`pictureGuide ${index}`}
              width={200}
              height={250}
              style={{ minHeight: 250, minWidth: 200, maxHeight: 550 }}
              quality={80}
              className="m-5 rounded-lg lg:h-[20rem] lg:w-[15rem]"
            />
          </div>
        ))}
        {coinsSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-sm lg:text-xl">{step}</p>
            <Image
              src={coinsImages[index]}
              alt={`pictureGuide ${index}`}
              width={250}
              height={350}
              style={{ minHeight: 350, minWidth: 250, maxHeight: 550 }}
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
