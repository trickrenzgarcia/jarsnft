"use client";
import React from "react";
import Image from "next/image";
import { leftNavList } from "../_metadata";
import { ChildProcess } from "child_process";
import { usePathname } from "next/navigation";

// might change to a more readable object
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

const content = [
  {
    child: [
      {
        heading: "Binance",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`,
        subtopic: "",
        steps: [
          "Step 1 : Login to your Binance account.",
          "Step 2 : Go to Asset's tab and select 'Overview.'",
          "Step 3 : Choose Cryptocurrency to exchange",
          "Step 4 : Choose and confirm payment.",
        ],
        images: [
          "/assets/InsightsAsset/Guide.png",
          "/assets/InsightsAsset/Guide2.png",
          "/assets/InsightsAsset/Guide3.png",
          "/assets/InsightsAsset/Guide4.png",
        ],
      },
    ],
  },
  {
    child: [
      {
        heading: "Coins PH",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`,
        subtopic: "Steps in Buying a crypto",
        steps: [
          "Step 1 : Tap Buy or Sell.",
          "Step 2 : Select Buy Crypto.",
          "Step 3 : Choose Crypto token",
          "Step 4 : Purchase to complete transaction.",
        ],
        images: [
          "/assets/InsightsAsset/CoinsBuySell.gif",
          "/assets/InsightsAsset/CoinsBuy.gif",
          "/assets/InsightsAsset/CoinsBuy2.gif",
          "/assets/InsightsAsset/CoinsPurchase.gif",
        ],
      },
    ],
  },
  {
    child: [
      {
        heading: "",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.`,
        subtopic: "Steps in Selling your crypto",
        steps: [
          "Step 1 : Tap Buy or Sell.",
          "Step 2 : Select Sell Crypto",
          "Step 3 : Sell to complete transaction.",
        ],
        images: [
          "/assets/InsightsAsset/CoinsBuySell.gif",
          "/assets/InsightsAsset/CoinsSell1.gif",
          "/assets/InsightsAsset/CoinsSell2.gif",
        ],
      },
    ],
  },
];
// to be fixed: try to make content dynamic or make h2 and p tag have the same className for all
const Page = () => {
  const path = usePathname();
  return (
    <>
      <div>
        {leftNavList.map((item) =>
          item.child.map(
            (child) =>
              path === child.href && (
                <>
                  <h1 className="m-5 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text pb-5 text-center font-sans text-4xl font-bold text-transparent md:text-5xl">
                    Exchange Cryptocurrency
                  </h1>
                  <h3 className="m-5 text-center xl:text-2xl ">
                    Prerequisites: Metamask Wallet, Centralized Exchange
                    Platforms, Bank Transfer or GCash
                  </h3>
                </>
              ),
          ),
        )}
      </div>
      <div>
        <div>
          {content.map((topic, index) =>
            topic.child.map((item) => (
              <div key={index}>
                <h2 className="my-6 text-2xl font-bold">{item.heading}</h2>
                <p className="lg:text-md my-8 text-sm leading-loose tracking-wide">
                  {item.content}
                </p>
                <h3 className="text:md m-5 text-center font-bold xl:text-2xl">
                  {item.subtopic}
                </h3>
                <div className="mt-5 flex max-h-full flex-wrap content-center justify-around gap-5">
                  {/* create a condition for multiple steps, or for single steps */}
                  {item.steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <p className="lg:text-md text-center text-sm">{step}</p>
                      <Image
                        src={item.images[index]}
                        alt={`pictureGuide ${index}`}
                        width={200}
                        height={250}
                        style={{
                          minHeight: 250,
                          minWidth: 200,
                          maxHeight: 550,
                        }}
                        quality={80}
                        className="m-5 rounded-lg lg:h-[20rem] lg:w-[15rem]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )),
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
