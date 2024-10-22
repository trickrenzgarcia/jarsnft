"use client";

import { P, Disclaimer, H1, H2, H3, IList } from "./_components/TailwindTags";

export default function Page() {
  return (
    <div>
      <div id="welcome">
        <H1>Overview</H1>
        <P>The following are the overview of contents that will help you be informed in the basics of Crypto! Therefore this page serves to help individuals especially beginners in getting a grasp of blockchain. We will guide you into learning the basics and definition of each of the termsused. Read through the following outline of each topics</P>
        <Disclaimer>Disclaimer: Please do your own research (DYOR) before investing</Disclaimer>
        <hr />
      </div>

      <div id="getting-started">
        <H2>Getting Started</H2>
        <H3>1. Setup Your Wallet</H3>

        <IList>
          <li>Choose your Wallet</li>
          <li>Creating your Wallet Account </li>
        </IList>

        <H3>2. Create Your NFT</H3>
        <IList>
          <li>Creating your First NFT</li>
          <li>Setup your NFT details</li>
          <li>Minting your NFT</li>
        </IList>

        <H3>3. Trade Your NFT</H3>
        <IList>
          <li>Accepting an offer on your NFT</li>
          <li>Listing an NFT on a fixed price</li>
        </IList>
        <hr />
      </div>

      <div id="nfts">
        <H2>Non-Fungible Token (NFT)</H2>
        <P>In this section, you will be guided on the definition of NFTs and what they are. This also follows the common questions regarding the NFT and what benefits does it serve, and why should we trust in this new technology.</P>
        <H3>1. What is an NFT?</H3>
        <IList>
          <li>What are NFTs used for?</li>
          <li>How it became popular</li>
          <li>Different Types of NFTs</li>
        </IList>

        <H3>2. What makes an NFT Valuable?</H3>
        <IList>
          <li>How NFTs get its value</li>
          <li>How to price NFTs</li>
          <li>How to market NFTs</li>
        </IList>

        <H3>3. How safe are my NFTs?</H3>
        <IList>
          <li>How NFTs are secure</li>
          <li>What are the common ways NFTs get stolen</li>
        </IList>
        <hr />
      </div>

      <div id="blockchain">
        <H2>Blockchain</H2>
        <P>This section will follow through on what the Blockchain technology is, and the common questions regarding such technology. It will discuss topics and terms that many beginners will encounter during their experience with the blockchain.</P>
        <H3>1. What Is The Blockchain?</H3>
        <IList>
          <li>How the Blockchain works</li>
          <li>History and Significance of Blockhain</li>
          <li>What does Centralized and Decentralized mean?</li>
        </IList>
        <H3>2. What Are Smart Contracts?</H3>
        <IList>
          <li>How a Smart Contract work</li>
          <li>Brief history</li>
          <li>Benefits and Limitations</li>
          <li>Examples of Use Cases</li>
        </IList>

        <H3>3. What Are Gas Fees?</H3>
        <IList>
          <li>Definition of Gas Fees</li>
          <li>How Gas Fees work</li>
        </IList>

        <H3>4. What Is Cryptocurrency?</H3>
        <IList>
          <li>Definition and Explanation of Cryptocurrency</li>
          <li>Brief History</li>
          <li>How secure are Cryptocurrencies?</li>
          <li>Real-World Use Cases</li>
          <li>Different types of Cryptocurrenies</li>
        </IList>

        <H3>5. How To Earn Cryptocurrency?</H3>
        <IList>
          <li>Different ways of Earning Cryptocurrency</li>
          <li>How to buy your first Cryptocurrency</li>
          <li>Tips to invest safely</li>
        </IList>
        <hr />
      </div>

      <div id="guides">
        <H2>Guides (NFT)</H2>
        <P>This section offers guides that are designed to empower you with knowledge. They&apos;ll provide a clear, step-by-step instructions and insightful explanations to help you navigate complex topics and get the most out of your NFT Trading experience. Whether you&apos;re a beginner or looking to advance your skills, our guides will be your trusted resource on the path to mastery.</P>
        <H3>1. Exchange Cryptocurrency</H3>
        <IList>
          <li>Choosing your Exchange Platform</li>
          <li>Create and Verify your Account</li>
          <li>Funding your Platform Wallet</li>
          <li>Buy, Sell, and Withdraw</li>
        </IList>
        <H3>2. Protect your Account</H3>
        <IList>
          <li>Commmon NFT scams you should watch out for!</li>
          <li>How to protect your Account and Wallet</li>
          <li>How to protect your Transactions and Digital Identity</li>
        </IList>
      </div>
    </div>
  );
}
