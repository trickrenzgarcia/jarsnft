import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text p-10 text-center font-sans text-lg font-bold text-transparent md:text-7xl">
        Exchange Cryptocurrency
      </h1>
      <h1 className="text-center text-2xl">
        Prerequisites: Metamask Wallet, Decentralized Exchange Platforms
      </h1>
      <div className="container h-screen w-full">
        <div className="mt-5 grid grid-cols-4 justify-center justify-items-center gap-5">
          <div className="justify-center">
            <p className="text-xl">
              Step 1 : Login to your Desired Exchange Platform Binance, Bybit,
              Coinbase account.
            </p>
            <Image
              src="/assets/learnPics/Guide.png"
              alt="pictureGuide"
              width={400}
              height={200}
              className="m-5 items-baseline justify-self-center rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl">
              Step 2 : Go to the Asset&#x2019;s tab and select
              &#34;Overview.&#34;
            </p>
            <Image
              src="/assets/learnPics/Guide2.png"
              alt="pictureGuide"
              width={400}
              height={200}
              className="m-5 items-baseline justify-self-center rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl">
              Step 3 : Find and click on the cryptocurrency you want to deposit/
              withdraw.
            </p>
            <Image
              src="/assets/learnPics/Guide.png"
              alt="pictureGuide"
              width={400}
              height={200}
              className="m-5 items-baseline justify-self-center rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl">
              Step 4 : Click on the &#34;Deposit&#34; button and wait to finish.
            </p>
            <Image
              src="/assets/learnPics/Guide.png"
              alt="pictureGuide"
              width={400}
              height={200}
              className="m-5 items-baseline justify-self-center rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
