"use client";
import Image from "next/image";
import React from "react";
import { NoiseCard } from "@/components/ui/noise-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { MdStars, MdCheckBox } from "react-icons/md";
import { P } from "../_components/TailwindTags";

const browsers = [
  { src: "/assets/browsers/Chrome.svg", alt: "chrome" },
  { src: "/assets/browsers/Firefox.png", alt: "firefox" },
  { src: "/assets/browsers/Brave.svg", alt: "brave" },
  { src: "/assets/browsers/Edge.svg", alt: "edge" },
  { src: "/assets/browsers/Opera.svg", alt: "opera" },
];

const metamaskCreate = [
  {
    src: "/assets/InsightsAsset/metamaskImages/metamask create wallet 3.png",
  },
  {
    src: "/assets/InsightsAsset/metamaskImages/metamask create wallet 4.png",
  },
  {
    src: "/assets/InsightsAsset/metamaskImages/metamask create wallet 5.png",
  },
  {
    src: "/assets/InsightsAsset/metamaskImages/metamask create wallet 6.png",
  },
];

const coinbaseCreate = [
  { src: "/assets/InsightsAsset/CoinbaseImages/coinbase create wallet 1.png" },
  { src: "/assets/InsightsAsset/CoinbaseImages/coinbase create wallet 2.png" },
  { src: "/assets/InsightsAsset/CoinbaseImages/coinbase create wallet 3.png" },
  { src: "/assets/InsightsAsset/CoinbaseImages/coinbase create wallet 4.png" },
  { src: "/assets/InsightsAsset/CoinbaseImages/coinbase create wallet 5.png" },
];
const coinbaseImport = [
  {
    src: "/assets/InsightsAsset/CoinbaseImages/coinbase existing wallet 1.png",
  },
  {
    src: "/assets/InsightsAsset/CoinbaseImages/coinbase existing wallet 2.png",
  },
  {
    src: "/assets/InsightsAsset/CoinbaseImages/coinbase existing wallet 3.png",
  },
  {
    src: "/assets/InsightsAsset/CoinbaseImages/coinbase existing wallet 4.png",
  },
];

export default function SetupWallet() {
  return (
    <section>
      <div id="overview">
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Setup your Wallet
        </h1>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Start your web3 journey here!`}</h3>
        <P>{`JARS NFT Marketplace allows various crypto wallet options that users can use and login with.`}</P>
        <div className="flex justify-center">
          <Image
            src="/assets/InsightsAsset/JARSWallet.png"
            width={1920}
            height={1080}
            alt="Jars Wallet Image"
            className="mb-12 max-h-[80%] max-w-[70%]"
          />
        </div>
        <p className="mb-8 mt-3 leading-loose tracking-wide dark:text-gray-300">
          {`To begin setting up your wallet, you will first need to choose what
        crypto wallet you should use. To help you, we will recommend `}
          <span className="font-bold">Metamask</span>
          {" and "}
          <span className="font-bold">Coinbase</span>.
        </p>
        <div className="flex justify-center gap-[5rem]">
          <Image
            src="/assets/InsightsAsset/Metamask_Fox.png"
            width={1920}
            height={1080}
            alt="Metamask Logo"
            className=" max-h-[8rem] max-w-[8rem] rounded-lg"
          />
          <Image
            src="/assets/InsightsAsset/coinbase.png"
            width={1920}
            height={1080}
            alt="Coinbase Logo"
            className=" max-h-[8rem] max-w-[8rem] rounded-lg"
          />
        </div>
        <p className="mb-8 mt-8 leading-loose tracking-wide dark:text-gray-300">
          {`Our recommended wallets and the other wallets that JARS Marketplace allows are supported by various browsers, the commonly well-known are `}
          <span className="font-bold">Chrome, Firefox, Brave, Edge,</span>
          {" and "}
          <span className="font-bold">Opera</span>.
        </p>
        <div className="flex justify-center gap-[5rem]">
          {browsers.map((browser, index) => (
            <Image
              key={index}
              src={browser.src}
              width={1920}
              height={1080}
              alt={browser.alt}
              className=" h-[4rem] w-[4rem] rounded-lg"
            />
          ))}
        </div>
        <P>{`Now we will proceed on how to setup, create, and login our account in both Metamask and Coinbase Wallet. Keep in mind that the User Interface may be different for alternative browsers.
      Importantly, the seed phrase is you will need to keep safe the most.`}</P>
      </div>
      <div id="metamask">
        <hr />
        <>
          <h2 className="my-6 text-3xl font-bold">How to Setup Metamask</h2>
          <P>{`A popular cryptocurrency wallet and browser extension that allows users to interact with the Ethereum or Polygon blockchain.`}</P>
          <h3 className="my-6 text-xl font-bold tracking-wider">
            Install Metamask To Your Browser
          </h3>
          <P>
            {`To get started with Metamask, we must install the Metamask wallet extension in our browser. `}
            <span className="font-semibold text-[#A519D7] underline">
              <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                Download Here
              </a>
            </span>
          </P>
          <P>{`We will be redirected to this browser page, click Download and Add Extension to finish setting up our Metamask wallet.`}</P>
          <Image
            src="/assets/InsightsAsset/metamaskImages/metamask 1.png"
            width={1920}
            height={1080}
            alt="Metamask Download Page"
            className="mb-2 max-h-[100%] max-w-full "
          />
          <P>
            <span className="italic">
              <span className="font-bold">Step 1: </span>
              {` Click 'Get' or 'Download' in other browsers`}
            </span>
          </P>
          <Image
            src="/assets/InsightsAsset/metamaskImages/metamask 2.png"
            width={1920}
            height={1080}
            alt="Metamask Download Extension"
            className="mb-2 max-h-[100%] max-w-full "
          />
          <P>
            <span className="italic">
              <span className="font-bold">Step 2: </span>
              {` Click 'Add Extension' to finish`}
            </span>
          </P>
          <Image
            src="/assets/InsightsAsset/metamaskImages/metamask 3.png"
            width={1920}
            height={1080}
            alt="Metamask Login"
            className="mb-2 max-h-[100%] max-w-full "
          />
          <P>
            <span className="italic">
              <span className="font-bold">Step 3: </span>
              {` We will be redirected to this page that allows us to Create or Import our wallet.`}
            </span>
          </P>
        </>
        <>
          <h3 className="my-6 text-xl font-bold tracking-wider">
            Create your Wallet Account
          </h3>
          <P>{`After clicking the Create a new Wallet, we will be redirected with the following steps:`}</P>
          <div className="flex justify-center gap-5">
            <Image
              src="/assets/InsightsAsset/metamaskImages/metamask create wallet 1.png"
              width={1920}
              height={1080}
              alt="Metamask TOS"
              className="mb-2 max-h-[80%] max-w-[50%]"
            />
            <Image
              src="/assets/InsightsAsset/metamaskImages/metamask create wallet 2.png"
              width={1920}
              height={1080}
              alt="Metamask Create Password"
              className="mb-2 max-h-[80%] max-w-[50%]"
            />
          </div>
          <P>{`Then continue with the following instructions by Metamask:`}</P>
          <div className="flex justify-center gap-4">
            {displayMetamaskCreate()}
          </div>
          <P>{`After finishing our account creation, it is important that our seed phrase must be stored safely. Without our seed phrase, it will be impossible to recover your assets.`}</P>
        </>
        <h3 className="my-6 text-xl font-bold tracking-wider">
          Login your Existing Wallet Account
        </h3>
        <P>{`When we try to login our Metamask Account from a different computer, it will require us to import our wallet using a seed phrase.
        Follow through the steps on how to Login our existing wallet.`}</P>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Image
            src="/assets/InsightsAsset/metamaskImages/metamask existing wallet 1.png"
            width={1280}
            height={800}
            alt="Metamask Login 1"
            className="mb-2 max-h-full max-w-[15rem] rounded-lg md:max-w-[20rem]"
          />
          <Image
            src="/assets/InsightsAsset/metamaskImages/metamask existing wallet 2.png"
            width={1280}
            height={800}
            alt="Metamask Login 2"
            className="mb-2 max-h-full max-w-[15rem] rounded-lg md:max-w-[20rem]"
          />
        </div>
        <P>{`After completing our wallet Creation or Import, we will be redirected to the main page of our wallet account.`}</P>
        <div className="flex justify-center">
          <Image
            src="/assets/InsightsAsset/metamaskImages/metamask Account.png"
            width={1920}
            height={1080}
            alt="Metamask Account"
            className="mb-12 max-h-full max-w-[80%]"
          />
        </div>
      </div>
      <div id="coinbase">
        <hr />
        <h2 className="my-6 text-3xl font-bold">How to Setup Coinbase</h2>
        <P>{`A leading cryptocurrency exchange and wallet that enables users to easily buy, sell, and manage a wide range of digital assets with top-tier security and user-friendly features.`}</P>
        <h3 className="my-6 text-xl font-bold tracking-wider">
          Install Coinbase To Your Browser
        </h3>
        <P>
          {`To get started with Coinbase, we must install the Coinbase wallet extension in our browser. `}
          <span className="font-semibold text-[#A519D7] underline">
            <a href="https://chromewebstore.google.com/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad?hl=en&source=wallet_coinbase_com&_branch_match_id=1310199038055708115&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8/XS07SLddLzs/VL0/MyUkt0U3JL8/LyU9MsS/OLy1KTrWFCMcn52fmJSUWpwIZuQDVD4Z4PgAAAA%3D%3D&pli=1">
              Download Here
            </a>
          </span>
          .
          {` Checkout the other available platforms that you can Install coinbase from by `}
          <span className="font-semibold text-[#A519D7] underline">
            <a href="https://www.coinbase.com/wallet/downloads">
              Clicking Here
            </a>
          </span>
          .
        </P>
        <Image
          src="/assets/InsightsAsset/CoinbaseImages/coinbase 1.png"
          width={1920}
          height={1080}
          alt="Coinbase Download Extension"
          className="mb-2 max-h-[50%] max-w-full "
        />
        <P>
          <span className="italic">
            <span className="font-bold">Step 1: </span>
            {` Click 'Add to Chrome' or 'Download' in other browsers`}
          </span>
        </P>
        <Image
          src="/assets/InsightsAsset/CoinbaseImages/coinbase 2.png"
          width={1920}
          height={1080}
          alt="Coinbase add Extension"
          className="mb-2 max-h-[50%] max-w-full "
        />
        <P>
          <span className="italic">
            <span className="font-bold">Step 2: </span>
            {` Click 'Add Extension' to finish`}
          </span>
        </P>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Image
            src="/assets/InsightsAsset/CoinbaseImages/coinbase 3.png"
            width={1920}
            height={1080}
            alt="Coinbase Login"
            className="mb-2 max-h-full max-w-[15rem] rounded-lg md:max-w-[20rem] "
          />
          <Image
            src="/assets/InsightsAsset/CoinbaseImages/coinbase 4.png"
            width={1920}
            height={1080}
            alt="Coinbase Account"
            className="mb-2 max-h-full max-w-[15rem] rounded-lg md:max-w-[20rem] "
          />
        </div>
        <P>
          <span className="italic">
            <span className="font-bold">Step 3: </span>
            {` We will be redirected to this page that allows us to Create or Import our wallet. After logging in, we will be redirected to our Wallet Account Page`}
          </span>
        </P>
        <h3 className="my-6 text-xl font-bold tracking-wider">
          Create your Wallet Account
        </h3>
        <P>{`After clicking the Create a new Wallet, we will be redirected with the following steps:`}</P>
        {displayCoinbaseCreate()}
        <P>{`Other wallets may have different procedures or features, but overall they all have the same requirements when creating our own wallet.`}</P>
        <h3 className="my-6 text-xl font-bold tracking-wider">
          Login your Existing Wallet Account
        </h3>
        <P>{`As mentioned earlier, our Seed Phrase is must be stored where we can access it when we need to import our wallet to a new device or computer. For coinbase, these are the following steps:`}</P>
      </div>
      {displayCoinbaseImport()}
      {/* <div className="mx-auto mt-2 grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3">
        <NoiseCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] gap-5">
          <div className="max-w-xs">
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              MetaMask: Your Gateway to Blockchain, DeFi and dApps
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              A popular cryptocurrency wallet and browser extension that allows
              users to interact with the Ethereum or Polygon blockchain.
            </p>
          </div>
          <Image
            src="/metamask-icon.svg"
            width={450}
            height={450}
            alt="metamask"
            className="absolute -right-[40%] bottom-0 rounded-2xl object-contain filter"
          />
          <Button className="mt-5">
            <Link href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
              Download Metamask
            </Link>
          </Button>
        </NoiseCard>

        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
          <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            Supported Browsers
          </h2>
          <div className="mt-5 flex flex-1 gap-1">
            {browsers.map((browser, index) => (
              <div key={index} className="mr-4">
                <Image
                  src={browser.src}
                  width={85}
                  height={85}
                  alt={browser.alt}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col items-start justify-center gap-5">
            <div className="flex flex-row items-center justify-center gap-5">
              <FaUsers style={{ width: "50px", height: "50px" }} />
              <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
                17,000,000 Users
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <MdStars style={{ width: "50px", height: "50px" }} />
              <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
                4.1K Ratings
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <MdCheckBox style={{ width: "50px", height: "50px" }} />
              <p className="max-w-[26rem] text-left text-base/6 text-neutral-200">
                Verified and Trusted
              </p>
            </div>
          </div>
        </NoiseCard>
        <NoiseCard containerClassName="bg-pink-800 col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[400px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
              Step 1 : Add to Chrome
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              In the chrome extension page &quot;Click Add to Chrome&quot;
              Button
            </p>
          </div>
          <div className="absolute right-[10%] top-[40%]">
            <button
              type="button"
              className="mb-2 me-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Chrome
            </button>
          </div>
        </NoiseCard>
        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-purple-800">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Step 2 : Click Agree to Terms of Use
          </h2>
        </NoiseCard>
        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-purple-800">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Step 3:Create Wallet or Import a Wallet
          </h2>
        </NoiseCard>
        <NoiseCard containerClassName="col-span-1 min-h-[300px] bg-purple-800">
          <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
            Proceed to Step 4 for New Wallet
          </h2>
        </NoiseCard>
        <NoiseCard containerClassName="bg-purple-800 col-span-1 lg:col-span-3 min-h-[300px] lg:min-h-[600px] xl:min-h-[750px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl">
              Step 4: Create Password, Secure Wallet, and Confirm SECRET
              RECOVERY PHRASE
            </h2>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Create a Password: Enter a secure password for your MetaMask
              wallet. Make sure it&quot;s strong and something you can remember.
            </ol>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Backup Your Seed Phrase: MetaMask will generate a unique seed
              phrase (also known as a recovery phrase) consisting of 12 random
              words. Write down this seed phrase on a piece of paper and store
              it somewhere safe. This is crucial for recovering your wallet if
              you ever lose access to it.
            </ol>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Confirm Your Seed Phrase: After writing down your seed phrase,
              MetaMask will ask you to confirm it by entering the words in the
              correct order. This ensures that you&quot;ve written it down
              correctly.
            </ol>
            <ol className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Congratulations!: Once you&quot;ve confirmed your seed phrase,
              your MetaMask wallet is created. You can now use it to store,
              send, and receive cryptocurrencies.
            </ol>
          </div>
          <Image
            src="/SeedPhrase.png"
            width={650}
            height={750}
            alt="seedPhrase"
            className="absolute inset-y-0 right-0 h-full w-[50%] "
            quality={100}
          />
        </NoiseCard>
      </div> */}
    </section>
  );
}

function displayMetamaskCreate() {
  return (
    <div className="flex flex-wrap justify-center">
      {metamaskCreate.map((create, index) => (
        <>
          <Image
            src={create.src}
            alt={`pictureGuide ${index + 1}`}
            width={1980}
            height={1080}
            quality={90}
            className="m-5 max-h-full max-w-[15rem] rounded-lg md:max-w-[20rem] "
          />
        </>
      ))}
    </div>
  );
}

function displayCoinbaseCreate() {
  return (
    <div className="flex flex-wrap justify-center">
      {coinbaseCreate.map((create, index) => (
        <>
          <Image
            src={create.src}
            alt={`pictureGuide ${index + 1}`}
            width={1980}
            height={1080}
            quality={90}
            className="m-5 max-h-full  max-w-[15rem] rounded-lg md:max-w-[20rem] "
          />
        </>
      ))}
    </div>
  );
}
function displayCoinbaseImport() {
  return (
    <div className="flex flex-wrap justify-center">
      {coinbaseImport.map((create, index) => (
        <>
          <Image
            src={create.src}
            alt={`pictureGuide ${index + 1}`}
            width={1980}
            height={1080}
            quality={90}
            className="m-5 max-h-full  max-w-[15rem] rounded-lg md:max-w-[20rem] "
          />
        </>
      ))}
    </div>
  );
}
