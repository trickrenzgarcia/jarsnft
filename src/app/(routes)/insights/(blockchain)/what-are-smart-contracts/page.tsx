import Image from "next/image";
import { P, H1, H2, H3, H4, OL, UL } from "../../_components/TailwindTags";

export default function WhatSmartContractPage() {
  return (
    <section>
      <div id="overview">
        <H1>What is a Smart Contract?</H1>
        <Image
          src="/assets/InsightsAsset/smartContract.jpg"
          width={1920}
          height={1080}
          alt="Smart Contract Image"
          className="mb-12 max-h-[30rem] max-w-full rounded-lg object-cover"
        />
        <div className="bg-[#d45eff3b] p-4">
          <H4>Simple Definition:</H4>
          <P>
            They are computer programs that follow strict rules (predefined conditions) to complete tasks without any middleman involved. These
            programs run on a special system (blockchain network) that keeps everything transparent and secure.
          </P>
        </div>
        <hr />
        <h2 className="my-6 text-3xl font-bold">How does it work?</h2>
        <P>
          Smart contracts are self-executing agreements where the terms of the agreement are written hard in code. They run on blockchain networks
          like Ethereum and automatically enforce the rules and actions agreed upon by the parties. These contracts enable developers to build
          decentralized applications on the blockchain, enable automated decentralized exchanges, codify terms of contracts between parties that
          don&apos;t trust each other, and generate both fungible and non-fungible tokens.
        </P>
        <OL>
          <li>
            <b>Creating a contract: </b>
            Developers write smart contracts in a programming language appropriate for their blockchain platform. For Ethereum, this language is
            Solidity. The code specifies the terms and outcomes of the contract
          </li>
          <li>
            <b>Deploying to the blockchain: </b>
            Once a smart contract is created, it is deployed to the blockchain. The contract code is sent to the blockchain network and stored in the
            distributed ledger. Every node in the network has a copy of the contract
          </li>
          <li>
            <b>Executing the contract: </b>
            The contract is executed automatically once predefined conditions are met. For example, if the smart contract is set up to release funds
            upon completion of the service, the payment will be released automatically once confirmation of the completion of the service is received.
          </li>
          <li>
            <b>Verification and Consensus: </b>
            Blockchain nodes verify the execution of transactions and contracts. They achieve consensus through mechanisms such as Proof of Work (PoW)
            and Proof of Stake (PoS) to ensure the validity of transactions and the proper execution of contracts.
          </li>
          <li>
            <b>Immutability and Transparency: </b>
            Once deployed, smart contracts are immutable; they cannot be altered. This immutability ensures that the agreed-upon terms cannot be
            manipulated. All actions taken by smart contracts are transparent and recorded on the blockchain, leaving a clear audit trail.
          </li>
        </OL>
      </div>
      <div id="history">
        <hr />
        <H2>History of Smart Contracts</H2>
        <P>
          The concept of smart contracts was introduced in 1994 by Nick Szabo, who envisioned self-executing contracts coded for automatic
          enforcement. However, the necessary technology wasn&apos;t available until the emergence of Bitcoin in 2008, which provided the blockchain
          foundation. In 2013, Vitalik Buterin published the Ethereum whitepaper, leading to the launch of Ethereum in 2015, which enabled developers
          to create smart contracts using the Solidity programming language. The 2016 DAO incident, where flaws in code led to the theft of $50
          million in Ether, highlighted security risks. Since 2017, the use of smart contracts has surged in decentralized finance (DeFi),
          non-fungible tokens (NFTs), gaming, and supply chain management, with platforms like Binance Smart Chain and Cardano adopting smart contract
          functionality. Ongoing improvements in scalability, security, and interoperability, alongside emerging regulatory frameworks, support the
          broader adoption of smart contracts, which are poised to reshape various industries.
        </P>
      </div>
      <div id="benefit">
        <hr />
        <H3>Benefits of Smart Contracts</H3>
        <P>
          Most traditional digital contracts are between two parties who do not know each other. This creates a risk that one of the two participants
          will not fulfill its obligations. To avoid counter-party risk, digital contracts are often hosted and executed by larger, centralized
          institutions such as banks that can enforce the terms of the contract.
        </P>
        <UL>
          <li>
            <b>Automation: </b>
            Smart contracts automatically perform actions when conditions are met, reducing the need for intermediaries.
          </li>
          <li>
            <b>Trustless: </b>
            Parties don&apos;t need to trust each other, they just need to trust the code.
          </li>
          <li>
            <b>Transparency: </b>
            Contract terms are visible and verifiable within the blockchain.
          </li>
          <li>
            <b>Security: </b>
            The decentralized nature of the blockchain and its cryptographic security make it difficult to manipulate.
          </li>
          <li>
            <b>Efficiency: </b>
            Eliminating intermediaries and automating processes saves time and reduces costs.
          </li>
        </UL>
        <H3>Limitations of Smart Contracts</H3>
        <UL>
          <li>
            <b>Complexity: </b>
            Writing and understanding smart contract code can be complex and requires specialized knowledge.
          </li>
          <li>
            <b>Immutability: </b>
            Code once deployed cannot be changed. This can be problematic in the event of an error or changing conditions.
          </li>
          <li>
            <b>Scalability: </b>
            Blockchain networks can experience scalability issues that can slow down contract execution during high traffic.
          </li>
          <li>
            <b>Legal Status: </b>
            In some jurisdictions, the legal status and enforceability of smart contracts can be unclear.
          </li>
          <li>
            <b>Security Vulnerabilities: </b>
            Smart contracts are generally secure, but they can have bugs and security holes that can be exploited by hackers.Smart contracts are
            generally secure, but they can have bugs and security holes that can be exploited by hackers.
          </li>
        </UL>
        <P>
          Overall, smart contracts are a powerful tool for building automated, decentralized applications on blockchain networks. They offer
          significant benefits in terms of automation, trust, transparency, security and efficiency.
        </P>
      </div>
      <div id="usecase">
        <hr />
        <H2>Example Use Cases</H2>

        <H4>Decentralized Finance (DeFi)</H4>
        <P>
          This is one of the biggest application areas of smart contracts. Here, financial agreements such as loans, bonds, and investments are
          automated without the need for traditional banks.
        </P>
        <P>
          For example, DeFi platforms use smart contracts to enable peer-to-peer lending, allowing lenders to automatically earn interest on their
          crypto assets based on the terms specified in the contract.
        </P>

        <H4>Content Creation and Royalties</H4>
        <P>
          Smart contracts can further empower creators by allowing them to control access to their content and automate royalty payments. Musicians
          can sell music directly to their fans through a platform that uses smart contracts to ensure they receive a share of each sale. This removes
          the middleman and allows creators to capture a larger share of the revenue.
        </P>

        <H4>E-Sports and Gaming</H4>
        <P>
          Smart contracts are transforming the gaming industry by enabling the creation of non-fungible tokens (NFTs) that represent ownership of
          in-game items, allowing players to buy, sell, and trade these assets in blockchain-based marketplaces. This can generate real-world revenue
          from virtual activities. Additionally, in esports, smart contracts automate prize distribution for tournaments, ensuring fair payouts, and
          allow organizations to create fan tokens for voting, exclusive merchandise, and event access. Overall, smart contracts enhance ownership,
          security, and revenue opportunities, making gaming more exciting and rewarding for players.
        </P>

        <H4>Ticketing and Event Management</H4>
        <P>
          Smart contracts can be used to create a secure and transparent ticketing system. By ensuring that each ticket is unique and can only be used
          once, piracy and fraud can be prevented. Additionally, smart contracts can automate refunds if an event is canceled, providing a more
          efficient and user-friendly experience.
        </P>

        <H4>Insurance</H4>
        <P>
          Traditionally, submitting insurance claims can be a time-consuming process with multiple back-and-forth transactions. Smart contracts can
          automate payments based on predefined conditions. For example, an aviation insurance smart contract could be programmed to automatically pay
          compensation to passengers if their flight is delayed for more than a certain amount of time, eliminating paperwork and speeding up the
          claims settlement process.
        </P>

        <H4>Healthcare</H4>
        <P>
          Smart contracts can be used to manage patient data securely and efficiently. By storing medical records on the blockchain, patients can
          control who has access to their information and provide healthcare providers with temporary access for treatment purposes. Smart contracts
          can also automate tasks like scheduling appointments and paying bills, reducing the administrative burden for both patients and healthcare
          providers.
        </P>
      </div>
      <div id="conclusion">
        <hr />
        <H2>Conclusion</H2>
        <P>
          Smart contracts are self-executing agreements encoded on a blockchain network such as Ethereum, ensuring automatic enforcement of their
          terms without the need for an intermediary. They offer significant benefits such as automation, trustlessness, transparency, security and
          efficiency. This enables innovative applications in areas such as DeFi, content creation, gaming, ticketing, insurance and healthcare.
        </P>
      </div>
    </section>
  );
}
