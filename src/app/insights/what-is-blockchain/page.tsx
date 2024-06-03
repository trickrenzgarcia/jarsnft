import { P } from "../_components/TailwindTags";
import Image from "next/image";

export default function WhatBlockchainPage() {
  return (
    <article>
      <div id="overview">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          What is the Blockchain?
        </h1>
        <Image
          src="/assets/InsightsAsset/blockchain.jpg"
          width={1920}
          height={1080}
          alt="Blockchain Image"
          className="mb-12 max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <h2 className="my-6 text-3xl font-bold">Overview</h2>
        <P>{`The Blockchain is a type of database that is specifically designed to be secure. 
        Consider a shared spreadsheet that keeps track of all transactions and changes, but instead of being stored on a single server, it is duplicated and distributed across multiple computers. 
        Transactions are organized into blocks and linked together to form a chain, hence the name "Blockchain," with each computer on the network having its own copy.`}</P>
        <P>{`
        This system makes it extremely difficult to tamper with data because any change would require changing all subsequent blocks on each copy of the blockchain, which is nearly impossible. 
        Blockchain's transparency and security make it valuable for uses other than cryptocurrency, such as tracking medical records, facilitating secure voting, and managing supply chains.`}</P>
        <P>{`Since Bitcoin's creation in 2009, blockchain applications have grown exponentially, with the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts. `}</P>

        <h2 className="my-6 text-3xl font-bold">Blockchain Explained</h2>
        <P>{`Imagine a public record of transactions, like a checkbook, but everyone has a copy and it's constantly growing. 
        This record is called a blockchain. 
        Each entry (like a check) is bundled together with a unique code and linked to the previous entry, making it nearly impossible to tamper with.`}</P>
        <ol className="-mt-2 ml-14 list-decimal leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Shared Ledger:</span>
            {` Everyone on the network has the same copy of the record, eliminating the possibility of errors or cheating.
            Permissions: Only authorized users can add entries, which ensures data privacy.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Permissions:</span>
            {`Only authorized users can add entries, which ensures data privacy and regulatory compliance.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Smart Contracts:</span>
            {` These are automated agreements built into the system to streamline transactions.These are automated agreements built into the system to streamline transactions.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Consensus:</span>
            {` Everyone on the network agrees that each entry is valid.`}
          </li>
        </ol>
        <P>{`Various people play different roles in this system:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Regular Users:</span>
            {` They can connect to the network and conduct transactions.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Regulators:</span>
            {` monitor network activity.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Operators:</span>
            {` oversee the technical aspects of the network.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Certificate Authorities:</span>
            {` They grant permission for users to participate.`}
          </li>
        </ul>
        <P>{`The blockchain collects transaction information and stores it in blocks, similar to how cells in a spreadsheet store information. 
        Once full, the data is encrypted using an algorithm that generates a hexadecimal number known as the hash.
        The hash is then entered into the block header and encrypted alongside the other data in the block. This generates a series of blocks that are linked together.`}</P>
      </div>
      <div id="history">
        <hr />
        <h2 className="my-6 text-3xl font-bold">
          History and its Significance
        </h2>
        <P>{`Blockchain technology emerged alongside Bitcoin, a digital currency launched in 2009. Bitcoin's creator, Satoshi Nakamoto, designed a system for secure online transactions without a central bank.`}</P>
        <P>{`Blockchain's success can be attributed to its unique ability to provide secure and transparent transactions. Unlike traditional systems, which store information in a central location, blockchain creates a public record that is accessible to everyone on the network. The following are the characteristics that made the blockchain succesful.`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Security and Transparency:</span>
            {` Unlike traditional systems in which trust is based on a central authority, blockchain generates a tamper-proof public record. Everyone on the network has a copy, making it extremely difficult to modify or cheat. This transparency promotes trust and security in transactions.`}
          </li>

          <li className="mb-3">
            <span className="font-bold">Efficiency:</span>
            {` Blockchain eliminates the middleman. Transactions can be completed directly between parties, eliminating the need for a bank or other institution to verify them. This can save both time and money.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Reduced Errors:</span>
            {` Errors are reduced because everyone has the same record, leaving less room for mistakes or inaccuracies when information is copied or transferred between systems..`}
          </li>
        </ul>
      </div>
      <div id="centralized">
        <hr />
        <h2 className="my-6 text-3xl font-bold">
          Centralized and Decentralized
        </h2>
        <P>{`Centralized systems resemble having a central figure. Consider a large hub, such as a central traffic circle, from which numerous roads branch out. This hub serves as the central authority in a centralized system. Each road leading away from the hub serves as a means of communication or control. Information or instructions are sent outward from the central hub to various destinations. This could be a company in which the CEO (the hub) makes all decisions and then communicates them to various departments (the roads).`}</P>
        <P>{`In contrast, decentralized systems distribute control. Think of a web rather than a pyramid. Decisions are made on a variety of levels, closer to the action. This allows for a quicker response to changing situations and can encourage people to be more creative. However, it can lead to inconsistencies and necessitate more effort to ensure everyone is on the same track.`}</P>
        <P>{`Below is the visual representation of both concepts.`}</P>
        <Image
          src="/assets/InsightsAsset/Cen&Decen.png"
          width={1920}
          height={1080}
          alt="Centralized vs Decentralized"
          className="mb-6 max-h-[30rem] max-w-full rounded-lg object-cover object-center"
        />
        <P>{`The Blockchain therefore is a decentralized system. There is no single controlling authority over the network, and transactions are verified by multiple participants. This is an important factor in its security and transparency.`}</P>
      </div>
      <div id="conclusion">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Conclusion</h2>
        <P>{`In conclusion, blockchain technology provides a secure, transparent, and decentralized method of data management. 
        Blockchain prevents tampering by distributing copies of transaction records across multiple computers, promoting trust and security. 
        Its applications have expanded significantly since Bitcoin's inception in 2009, including a variety of cryptocurrencies, decentralized finance platforms, non-fungible tokens, and smart contracts. Beyond finance, blockchain has applications in fields such as medical record-keeping, secure voting, and supply chain management. 
        Its ability to eliminate intermediaries, reduce errors, and provide a tamper-proof public record demonstrates its transformative power over modern data systems.`}</P>
      </div>
    </article>
  );
}
