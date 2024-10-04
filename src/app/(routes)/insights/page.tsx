"use client";

import { P } from "./_components/TailwindTags";

export default function Page() {
  return (
    <div>
      <div id="welcome">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Overview</h1>

        <P>
          {`Welcome to the JarsNft insights, the following are the overview of
          contents that will help you be informed in the basics of the Crypto
          world!`}
        </P>
        <P>
          {`Non-fungible tokens and the blockchain can be tricky to learn and
          navigate, therefore this page serves to help individuals especially
          beginners in getting a grasp of this emerging technology. We will
          guide you into learning the basics and definition of each of the terms
          used.`}
        </P>
        <P>
          {`Read through the following outline of each topics and what you will
          learn in it.`}
        </P>
        <p className="text-md mb-8 font-bold text-[#ec0000] underline dark:text-[#ce0000]">
          Disclaimer: Please do your own research before investing
        </p>
        <hr />
      </div>

      <div id="getting-started">
        <h2 className="my-6 text-2xl font-bold">Getting Started</h2>
        <P>
          {`This section will be your guide on where to begin your first
          transaction. Consider going through the following steps:`}
        </P>
        <h3 className="my-6 text-xl font-bold">1. Setup Your Wallet</h3>

        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Choose your Wallet</li>
          <li>Creating your Wallet Account </li>
        </ul>

        <h3 className="my-6 text-xl font-bold">2. Create Your NFT</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Creating your First NFT</li>
          <li>Setup your NFT details</li>
          <li>Minting your NFT</li>
        </ul>

        <h3 className="my-6 text-xl font-bold">3. Trade Your NFT</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Accepting an offer on your NFT</li>
          <li>Listing an NFT on a fixed price</li>
        </ul>
        <hr />
      </div>

      <div id="nfts">
        <h2 className="my-6 text-2xl font-bold">Non-Fungible Token (NFT)</h2>
        <P>
          {`In this section, you will be guided on the definition of NFTs and what they are. 
          This also follows the common questions regarding the NFT and what benefits does it serve, and why should we trust in this new technology.`}
        </P>
        <h3 className="my-6 text-xl font-bold">1. What is an NFT?</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>What are NFTs used for?</li>
          <li>How it became popular</li>
          <li>Different Types of NFTs</li>
        </ul>

        <h3 className="my-6 text-xl font-bold">
          2. What makes an NFT Valuable?
        </h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>How NFTs get its value</li>
          <li>How to price NFTs</li>
          <li>How to market NFTs</li>
        </ul>

        <h3 className="my-6 text-xl font-bold">3. How safe are my NFTs?</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>How NFTs are secure</li>
          <li>What are the common ways NFTs get stolen</li>
        </ul>

        <hr />
      </div>

      <div id="blockchain">
        <h2 className="my-6 text-2xl font-bold">Blockchain</h2>
        <P>
          {`This section will follow through on what the Blockchain technology is, and the common questions regarding such technology. 
          It will discuss topics and terms that many beginners will encounter during their experience with the blockchain.`}
        </P>
        <h3 className="my-6 text-xl font-bold">1. What Is The Blockchain?</h3>

        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>How the Blockchain works</li>
          <li>History and Significance of Blockhain</li>
          <li>What does Centralized and Decentralized mean?</li>
        </ul>
        <h3 className="my-6 text-xl font-bold">2. What Are Smart Contracts?</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>How a Smart Contract work</li>
          <li>Brief history</li>
          <li>Benefits and Limitations</li>
          <li>Examples of Use Cases</li>
        </ul>

        <h3 className="my-6 text-xl font-bold">3. What Are Gas Fees?</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Definition of Gas Fees</li>
          <li>How Gas Fees work</li>
        </ul>

        <h3 className="my-6 text-xl font-bold">4. What Is Cryptocurrency?</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Definition and Explanation of Cryptocurrency</li>
          <li>Brief History</li>
          <li>How secure are Cryptocurrencies?</li>
          <li>Real-World Use Cases</li>
          <li>Different types of Cryptocurrenies</li>
        </ul>

        <h3 className="my-6 text-xl font-bold">
          5. How To Earn Cryptocurrency?
        </h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Different ways of Earning Cryptocurrency</li>
          <li>How to buy your first Cryptocurrency</li>
          <li>Tips to invest safely</li>
        </ul>
        <hr />
      </div>

      <div id="guides">
        <h2 className="my-6 text-2xl font-bold">Guides (NFT)</h2>
        <P>
          {`This section offers guides that are designed to empower you with
          knowledge. They'll provide a clear, step-by-step instructions and
          insightful explanations to help you navigate complex topics and get
          the most out of your NFT Trading experience.
          Whether you&apos;re a beginner or looking to advance your skills, our
          guides will be your trusted resource on the path to mastery.`}
        </P>
        <h3 className="my-6 text-xl font-bold">1. Exchange Cryptocurrency</h3>

        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Choosing your Exchange Platform</li>
          <li>Create and Verify your Account</li>
          <li>Funding your Platform Wallet</li>
          <li>Buy, Sell, and Withdraw</li>
        </ul>
        <h3 className="my-6 text-xl font-bold">2. Protect your Account</h3>
        <ul className="mb-12 ml-8 list-disc font-semibold leading-9 text-[#A519D7]">
          <li>Commmon NFT scams you should watch out for!</li>
          <li>How to protect your Account and Wallet</li>
          <li>How to protect your Transactions and Digital Identity</li>
        </ul>
      </div>
    </div>
  );
}
