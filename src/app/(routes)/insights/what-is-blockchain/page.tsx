import { P,H1, H2, UL, OL } from "../_components/TailwindTags";
import Image from "next/image";

export default function WhatBlockchainPage() {
  return (
    <article>
      <div id="overview">
        <H1>What is the Blockchain?</H1>
        <Image
          src="/assets/InsightsAsset/blockchain.avif"
          width={1920}
          height={1080}
          alt="Blockchain Image"
          className="mb-12 max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <H2>Overview</H2>
        <P>The Blockchain is a type of database that is specifically designed to be secure. Consider a shared spreadsheet that keeps track of all transactions and changes, but instead of being stored on a single server, it is duplicated and distributed across multiple computers. Transactions are organized into blocks and linked together to form a chain, hence the name &quot;Blockchain&quot; with each computer on the network having its own copy. This system makes it extremely difficult to tamper with data because any change would require changing all subsequent blocks on each copy of the blockchain, which is nearly impossible. 
        Blockchain&apos;s transparency and security make it valuable for uses other than cryptocurrency, such as tracking medical records, facilitating secure voting, and managing supply chains.</P>

        <H2>Blockchain Explained</H2>
        <P>Imagine a public record of transactions, like a checkbook, but everyone has a copy and it&apos;s constantly growing. This record is called a blockchain. 
        Each entry (like a check) is bundled together with a unique code and linked to the previous entry, making it nearly impossible to tamper with.</P>
        <OL>
          <li>
            <b>Shared Ledger: </b>
            Everyone on the network has the same copy of the record, eliminating the possibility of errors or cheating.
            Permissions: Only authorized users can add entries, which ensures data privacy.
          </li>
          <li>
            <b>Permissions: </b>
            Only authorized users can add entries, which ensures data privacy and regulatory compliance.
          </li>
          <li>
            <b>Smart Contracts: </b>
            These are automated agreements built into the system to streamline transactions.These are automated agreements built into the system to streamline transactions.
          </li>
          <li>
            <b>Consensus: </b>
            Everyone on the network agrees that each entry is valid.
          </li>
        </OL>
        <P>Various people play different roles in this system:</P>
        <OL>
          <li>
            <b>Regular Users: </b>
            They can connect to the network and conduct transactions.
          </li>
          <li>
            <b>Regulators: </b>
            Monitor network activity.
          </li>
          <li>
            <b>Operators: </b>
            Oversee the technical aspects of the network.
          </li>
          <li>
            <b>Certificate Authorities: </b>
            They grant permission for users to participate.
          </li>
        </OL>
        <P>The blockchain collects transaction information and stores it in blocks, similar to how cells in a spreadsheet store information. Once full, the data is encrypted using an algorithm that generates a hexadecimal number known as the hash. The hash is then entered into the block header and encrypted alongside the other data in the block. This generates a series of blocks that are linked together.</P>
      </div>
      <div id="history">
        <hr />
        <H2>History and its Significance</H2>
        <P>Blockchain technology emerged alongside Bitcoin, a digital currency launched in 2009. Bitcoin&apos;s creator, Satoshi Nakamoto, designed a system for secure online transactions without a central bank.</P>
        <P>Blockchain&apos;s success can be attributed to its unique ability to provide secure and transparent transactions. Unlike traditional systems, which store information in a central location, blockchain creates a public record that is accessible to everyone on the network. The following are the characteristics that made the blockchain successful.</P>
        <UL>
          <li>
            <b>Security and Transparency: </b>
            Unlike traditional systems in which trust is based on a central authority, blockchain generates a tamper-proof public record. Everyone on the network has a copy, making it extremely difficult to modify or cheat. This transparency promotes trust and security in transactions.
          </li>
          <li>
            <b>Efficiency: </b>
            Blockchain eliminates the middleman. Transactions can be completed directly between parties, eliminating the need for a bank or other institution to verify them. This can save both time and money.
          </li>
          <li>
            <b>Reduced Errors: </b>
            Errors are reduced because everyone has the same record, leaving less room for mistakes or inaccuracies when information is copied or transferred between systems.
          </li>
        </UL>
      </div>
      <div id="centralized">
        <hr />
        <H2>Centralized and Decentralized</H2>
        <P>Centralized systems operate like a traffic circle, with a central authority (the hub) making decisions and communicating them to various departments (the roads). In contrast, decentralized systems resemble a web, distributing control across multiple levels. This allows for quicker responses and greater creativity but can lead to inconsistencies and requires more effort to maintain alignment.</P>
        <Image
          src="/assets/InsightsAsset/Cen&Decen.png"
          width={1920}
          height={1080}
          alt="Centralized vs Decentralized"
          className="mb-6 max-h-[34rem] max-w-full rounded-lg object-cover object-center"
        />
        <P>The Blockchain therefore is a decentralized system. There is no single controlling authority over the network, and transactions are verified by multiple participants. This is an important factor in its security and transparency.</P>
      </div>
      <div id="conclusion">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Conclusion</h2>
        <P>In conclusion, blockchain technology offers a secure, transparent, and decentralized approach to data management. By distributing transaction records across multiple computers, it enhances trust and security while preventing tampering. Since Bitcoin&apos;s launch in 2009, blockchain&apos;s applications have expanded to include cryptocurrencies, decentralized finance, non-fungible tokens, and smart contracts, as well as areas like medical record-keeping, secure voting, and supply chain management. Its capacity to eliminate intermediaries, reduce errors, and provide a tamper-proof public record highlights its transformable impact on modern data systems.</P>
      </div>
    </article>
  );
}
