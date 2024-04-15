import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <h1 className="m-5 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text pb-5 text-center font-sans text-lg font-bold text-transparent md:text-7xl">
        Exchange Cryptocurrency
      </h1>
      <h1 className="m-5 text-center text-2xl">
        Prerequisites: Metamask Wallet, Centralized Exchange Platforms, Bank
        Transfer or GCash
      </h1>
      <div className="w-full">
        <div className="mt-5 grid grid-cols-2 justify-center justify-items-center gap-5">
          <div className="justify-center">
            <p className="items-center text-xl">
              Step 1 : Login your Desired Exchange Platform
            </p>
            <Image
              src="/assets/learnPics/Guide.png"
              alt="pictureGuide"
              width={400}
              height={400}
              className="m-5 items-baseline justify-self-center rounded-lg"
              style={{ maxHeight: "400px" }} // Set max height
            />
          </div>
          <div className="align-items-center">
            <p className="text-xl">
              Step 2 : Go to the Asset&#x2019;s tab and select
              &#34;Overview.&#34;
            </p>
            <Image
              src="/assets/learnPics/Guide2.png"
              alt="pictureGuide"
              width={400}
              height={400}
              className="m-5 items-baseline justify-self-center rounded-lg"
              style={{ maxHeight: "400px" }} // Set max height
            />
          </div>
          <div>
            <p className="text-xl">
              Step 3 : Find and click on the cryptocurrency you want to
              deposit/withdraw/ buy .
            </p>
            <Image
              src="/assets/learnPics/Guide3.png"
              alt="pictureGuide"
              width={400}
              height={200}
              className="m-5 items-baseline justify-self-center rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl">
              Step 4 : Click on the &#34;Add New Card&#34; button and confirm
              mode of payment.
            </p>
            <Image
              src="/assets/learnPics/Guide4.png"
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
