"use client";
import React from "react";
import Image from "next/image";
import { P } from "../_components/TailwindTags";

const cenExch = [
  {
    topic: "Binance",
    steps: [
      " Login to your Binance account.",
      " Go to Asset's tab and select 'Overview.'",
      " Choose Cryptocurrency to exchange",
      " Choose and confirm payment.",
    ],
    images: [
      "/assets/InsightsAsset/Guide.png",
      "/assets/InsightsAsset/Guide2.png",
      "/assets/InsightsAsset/Guide3.png",
      "/assets/InsightsAsset/Guide4.png",
    ],
  },
  {
    topic: "CoinsPHBuy",
    steps: [
      " Tap Buy or Sell.",
      " Select Buy Crypto.",
      " Choose Crypto token",
      " Purchase to complete transaction.",
    ],
    images: [
      "/assets/InsightsAsset/CoinsBuySell.gif",
      "/assets/InsightsAsset/CoinsBuy.gif",
      "/assets/InsightsAsset/CoinsBuy2.gif",
      "/assets/InsightsAsset/CoinsPurchase.gif",
    ],
  },
  {
    topic: "CoinsPHSell",
    steps: [
      "Tap Buy or Sell.",
      "Select Sell Crypto",
      "Sell to complete transaction.",
    ],
    images: [
      "/assets/InsightsAsset/CoinsBuySell.gif",
      "/assets/InsightsAsset/CoinsSell1.gif",
      "/assets/InsightsAsset/CoinsSell2.gif",
    ],
  },
  // {
  //   topic: "BybitDeposit",
  //   steps: [" Tap Buy or Sell.", " Select Sell Crypto"],
  //   images: [
  //     "/assets/InsightsAsset/bybit deposit1.png",
  //     "/assets/InsightsAsset/bybit deposit2.png",
  //   ],
  // },
  // {
  //   topic: "BybitConvert",
  //   steps: [" Tap Buy or Sell.", " Select Sell Crypto"],
  //   images: [
  //     "/assets/InsightsAsset/bybit convert1.png",
  //     "/assets/InsightsAsset/bybit convert2.png",
  //   ],
  // },
  // {
  //   topic: "BybitTrade",
  //   steps: [" Tap Buy or Sell.", " Select Sell Crypto"],
  //   images: [
  //     "/assets/InsightsAsset/bybit trade1.png",
  //     "/assets/InsightsAsset/bybit trade2.png",
  //   ],
  // },
  {
    topic: "bybitBuy",
    steps: [
      " Enter coin amount and tap buy.",
      " Confirm your buy transaction.",
    ],
    images: [
      "/assets/InsightsAsset/bybit buy1.png",
      "/assets/InsightsAsset/bybit buy2.png",
    ],
  },
  {
    topic: "BybitSell",
    steps: [
      " Enter USDT amount and tap sell.",
      " Confirm your sell transaction.",
    ],
    images: [
      "/assets/InsightsAsset/bybit sell1.png",
      "/assets/InsightsAsset/bybit sell3.png",
    ],
  },
];

const Page = () => {
  return (
    <div>
      <div>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Exchange Cryptocurrency
        </h1>
        <h3 className="text-md mt-4 xl:text-lg ">
          The following are the recommended central exchanging platforms that
          every beginners should know.
        </h3>
      </div>
      <div>
        <div id="binance">
          <h2 className="my-6 text-2xl font-bold">Binance</h2>
          <P>
            {`It is widely-known popular crypto exchanging platform that having 128+ Million users in the platform. 
            It is generally used in trading cryptocurrency and converting it to real currencies such as the US Dollars.
            It also provides a KYC system or also known as Know-Your-Customer which is used to verify users by uploading there ID's and personal information. `}
          </P>
          {displaySteps("binance")}
        </div>
        <div id="coinsph">
          <h2 className="my-6 text-2xl font-bold">Coins PH</h2>
          <P>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </P>
          <P>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </P>
          <h3 className="text:md m-5 text-center font-bold xl:text-2xl">
            Steps in Buying a crypto
          </h3>
          {displaySteps("coinsphbuy")}
          <h3 className="text:md m-5 text-center font-bold xl:text-2xl">
            Steps in Selling your crypto
          </h3>
          {displaySteps("coinsphsell")}
        </div>
        <div id="bybit">
          <h2 className="my-6 text-2xl font-bold">Bybit</h2>
          <P>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.`}
          </P>
          <h3 className="text:md m-5 text-center font-bold xl:text-2xl">
            How to buy and sell
          </h3>
          {displaySteps("bybitbuy")}
          {displaySteps("bybitsell")}
        </div>
      </div>
    </div>
  );
};

export default Page;

function displaySteps(props: string) {
  return (
    <div>
      {cenExch.map(
        (site, index) =>
          site.topic.toLowerCase() === props.toLowerCase() && (
            <div
              key={index}
              className="mt-5 flex max-h-full flex-wrap content-center justify-around gap-5"
            >
              {site.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="lg:text-md text-center text-sm">
                    <span className="font-bold">Step {index + 1} </span>:{step}
                  </p>
                  <Image
                    src={site.images[index]}
                    alt={`pictureGuide ${index}`}
                    width={200}
                    height={250}
                    style={{
                      minHeight: 250,
                      minWidth: 200,
                      maxHeight: 550,
                    }}
                    quality={90}
                    className="m-5 rounded-lg lg:h-auto lg:w-[15rem]" // lg:h-[20rem]
                  />
                </div>
              ))}
            </div>
          ),
      )}
    </div>
  );
}
