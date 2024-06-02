import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function WhatSmartContractPage() {
  return (
    <section>
      <div id="overview">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          What is a Smart Contract?
        </h1>
        <Image
          src="/assets/InsightsAsset/smart_contract.jpg"
          width={1920}
          height={1080}
          alt="Smart Contract Image"
          className="mb-12 max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <div className="bg-[#d45eff3b] p-4">
          <h4 className="mb-2 font-semibold tracking-widest">
            Simple Definition:
          </h4>
          <p className="dark:text-gray-200">{`They are computer programs that follow strict rules (predefined conditions) to complete tasks without any middleman involved. These programs run on a special system (blockchain network) that keeps everything transparent and secure.`}</p>
        </div>
        <h2 className="my-6 text-3xl font-bold">Overview</h2>
        <P>{`Originally popularized by the Ethereum blockchain, smart contracts are critical to the Web3 industry and form the basis of DeFi, NFTs, gaming, and other important Web3 applications.Originally popularized by the Ethereum blockchain, smart contracts are critical to the Web3 industry and form the basis of DeFi, NFTs, gaming, and other important Web3 applications.`}</P>
        <P>{`These contracts enable developers to build decentralized applications on the blockchain, enable automated  decentralized exchanges, codify terms of contracts between parties that don't trust each other, and generate both fungible and non-fungible tokens. Read a brief introduction to smart contracts and their significane.`}</P>
      </div>
      <div id="work">
        <hr />
        <h2 className="my-6 text-3xl font-bold">How does it work?</h2>
        <P>{`Smart contracts are self-executing agreements where the terms of the agreement are written hard in code. 
        They run on blockchain networks like Ethereum and automatically enforce the rules and actions agreed upon by the parties. 
        Here's a step-by-step explanation of how it works: `}</P>
        <ol className="-mt-2 ml-14 list-decimal leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Creating a contract:</span>
            {` Developers write  smart contracts in a programming language appropriate for their blockchain platform. 
            For Ethereum, this language is Solidity. 
            The code specifies the terms and outcomes of the contract.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Deploying to the blockchain:</span>
            {` Once a smart contract is created, it is deployed to the blockchain. 
            The contract code is sent to the blockchain network and stored in the distributed ledger. 
            Every node in the network has a copy of the contract.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Executing the contract:</span>
            {`The contract is executed automatically once predefined conditions are met. 
            For example, if the smart contract is set up to release funds upon completion of the service, the payment will be released automatically once confirmation of the completion of the service is received.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Verification and Consensus:</span>
            {`Blockchain nodes verify the execution of transactions and contracts. 
            They achieve consensus through mechanisms such as Proof of Work (PoW) and Proof of Stake (PoS) to ensure the validity of transactions and the proper execution of contracts..`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Immutability and Transparency:</span>
            {`Once deployed,  smart contracts are immutable; they cannot be altered. 
            This immutability ensures that the agreed-upon terms cannot be manipulated. 
            All actions taken by  smart contracts are transparent and recorded on the blockchain, leaving a clear audit trail..`}
          </li>
        </ol>
      </div>
      <div id="history">
        <hr />
        <h2 className="my-6 text-3xl font-bold">History of Smart Contracts</h2>
        <P>{`The concept of smart contracts was first introduced in 1994 by computer scientist and cryptographer Nick Szabo.
        Szabo envisioned self-executing contracts whose clauses were written directly  into the code and could be enforced automatically.
        Despite his theoretical work, the necessary technology and infrastructure was not yet available.`}</P>
        <P>{`The emergence of Bitcoin in 2008, developed by Satoshi Nakamoto, provided the underlying technology for smart contracts:  blockchain.
        In 2013, Vitalik Buterin published the Ethereum whitepaper, proposing a new blockchain platform that would enable decentralized applications (dApps) using smart contracts.
        The launch of Ethereum in 2015 marked a major milestone, allowing developers to create and deploy smart contracts using the native Solidity programming language.
        However, the 2016 DAO incident,  in which flaws in smart contract code led to the theft of approximately $50 million worth of Ether, highlighted potential security risks.
        Since 2017, there has been a significant increase in the use of smart contracts in the fields of decentralized finance (DeFi), non-fungible tokens (NFTs), gaming, and supply chain management, with platforms such as Binance Smart Chain, Cardano, and Polkadot also introducing smart contract functionality.
        Ongoing developments aim to improve scalability, security, and interoperability across blockchain networks, and regulatory frameworks are gradually being created to support wider adoption.
        Smart contracts have proven to be a game-changing innovation that will drive the growth of decentralized applications and reshape various industries.`}</P>
      </div>
      <div id="benefit">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Benefits and Limitations</h2>
        <P>{`Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks like Ethereum and automatically enforce the rules and actions agreed upon by the parties involved.`}</P>
        <h3 className="my-6 text-xl font-bold tracking-wider">
          Benefits of Smart Contracts
        </h3>
        <P>{`Most traditional digital contracts are between two parties who do not know each other. 
        This creates a risk that one of the two participants will not fulfill its obligations. 
        To avoid counterparty risk, digital contracts are often hosted and executed by larger, centralized institutions such as banks that can enforce the terms of the contract. `}</P>
        <P>{`These digital contracts can be concluded directly between a user and a large company, or they can involve a large company  as a trusted intermediary between two users. 
        This dynamic allows the existence of many contracts that would not otherwise bear such risks, but at the same time, it  creates a situation where  larger, centralized institutions can exert asymmetric influence over the contract. The benefits can also include: `}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Automation:</span>
            {` Smart contracts automatically perform actions when conditions are met, reducing the need for intermediaries.Automation: Smart contracts automatically perform actions when conditions are met, reducing the need for intermediaries.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Trustless:</span>
            {` Parties don't need to trust each other, they just need to trust the code.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Transparency:</span>
            {` Contract terms are visible and verifiable within the blockchain.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Security:</span>
            {` The decentralized nature of the blockchain and its cryptographic security make it difficult to manipulate.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Efficiency:</span>
            {` Eliminating intermediaries and automating processes saves time and reduces costs.`}
          </li>
        </ul>
        <h3 className="my-6 text-xl font-bold tracking-wider">
          Limitations of Smart Contracts
        </h3>
        <P>{``}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Complexity:</span>
            {` Writing and understanding smart contract code can be complex and requires specialized knowledge.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Immutability:</span>
            {` Code once deployed cannot be changed. This can be problematic in the event of an error or changing conditions.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Scalability:</span>
            {` Blockchain networks can experience scalability issues that can slow down contract execution during high traffic.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Legal Status:</span>
            {` In some jurisdictions, the legal status and enforceability of smart contracts can be unclear.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Security Vulnerabilities:</span>
            {` Smart contracts are generally secure, but they can have bugs and security holes that can be exploited by hackers.Smart contracts are generally secure, but they can have bugs and security holes that can be exploited by hackers.`}
          </li>
        </ul>
        <P>{`Overall, smart contracts are a powerful tool for building automated, decentralized applications on blockchain networks. They offer significant benefits in terms of automation, trust, transparency, security and efficiency.`}</P>
        <P>{`However, they also introduce challenges in terms of complexity, immutability, scalability, legal recognition and potential security risks.`}</P>
      </div>
      <div id="usecase">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Example Use Cases</h2>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Decentralized Finance (DeFi)
        </h4>
        <P>{`This is one of the biggest application areas of smart contracts. Here, financial agreements such as loans, bonds, and investments are automated without the need for traditional banks.`}</P>
        <P>{`For example, DeFi platforms use smart contracts to enable peer-to-peer lending, allowing lenders to automatically earn interest on their crypto assets based on the terms specified in the contract.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Content Creation and Royalties
        </h4>
        <P>{`smart contracts can further empower creators by allowing them to control access to their content and automate royalty payments. 
        For example, musicians can sell  music directly to their fans through a platform that uses smart contracts to ensure they receive a share of each sale. 
        This removes the middleman and allows creators to capture a larger share of the revenue.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          E-Sports and Gaming
        </h4>
        <P>{`Smart contracts are changing the rules of the game in the gaming industry. 
        In traditional games, items earned in-game have no value outside of the game itself. 
        Smart contracts allow the creation of NFTs (Non-Fungible Tokens) that represent ownership of these digital assets. 
        This allows players to buy, sell, and trade these items on a marketplace built using blockchain technology, potentially turning  virtual endeavors into real-world revenue.`}</P>
        <P>{`Esports is another sector affected by this. Smart contracts automate prize distribution in tournaments, ensuring fair and transparent payouts. 
        Esports organizations can also use them to create fan tokens that can be used for voting, exclusive merchandise, and access to special events. 
        Overall, smart contracts bring ownership, security, and new revenue streams to the gaming world, making it  more exciting and rewarding  for players.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          Ticketing and Event Management
        </h4>
        <P>{`smart contracts can be used to create a secure and transparent ticketing system. 
        By ensuring that each ticket is unique and can only be used once, piracy and fraud can be prevented. 
        Additionally, smart contracts can automate refunds if an event is canceled, providing a more efficient and user-friendly experience.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">Insurance</h4>
        <P>{`Traditionally, submitting insurance claims can be a time-consuming process with multiple back-and-forth transactions. 
        Smart contracts can automate payments based on predefined conditions. 
        For example, an aviation insurance smart contract could be programmed to automatically pay compensation to passengers if their flight is delayed for more than a certain amount of time, eliminating paperwork and speeding up the claims settlement process.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">Healthcare</h4>
        <P>{`Smart contracts can be used to manage patient data securely and efficiently. 
        By storing medical records on the blockchain, patients can control who has access to their information and provide healthcare providers with temporary access for treatment purposes. 
        Smart contracts can also automate tasks like scheduling appointments and paying bills, reducing the administrative burden for both patients and healthcare providers.`}</P>
      </div>
      <div id="conclusion">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Conclusion</h2>
        <P>{`Smart contracts are self-executing agreements encoded on a blockchain network such as Ethereum, ensuring automatic enforcement of their terms without the need for an intermediary. 
        They offer significant benefits such as automation, trustlessness, transparency, security and efficiency. 
        This enables innovative applications in areas such as DeFi, content creation, gaming, ticketing, insurance and healthcare.`}</P>
        <P>{`However, smart contracts also have limitations: they require expertise to create and understand, cannot be modified once deployed, have scalability issues, have uncertain legal status in some jurisdictions and can contain security vulnerabilities.`}</P>
        <P>{`Despite these challenges, smart contracts are a powerful tool for building decentralized applications, and their ability to automate and secure transactions without central control will open up new opportunities across a range of industries and ultimately change the way digital agreements are managed and executed.`}</P>
      </div>
      {/* <iframe
        className="my-10 aspect-video w-full"
        src="https://www.youtube.com/embed/ZE2HxTmxfrI"
      ></iframe> */}
    </section>
  );
}
