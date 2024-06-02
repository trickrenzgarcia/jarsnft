import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function WhatGasFeesPage() {
  return (
    <section>
      <div id="overview">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          What are Gas Fees?
        </h1>
        <Image
          src="/assets/InsightsAsset/gas_fees.jpg"
          width={1920}
          height={1080}
          alt="Gas Fees Image"
          className="max-h-[20rem] max-w-full rounded-lg object-cover object-top"
        />
        <h2 className="my-6 text-3xl font-bold">Overview</h2>
        <P>{`Gas fees are an important part of blockchain networks, especially those like Ethereum that operate on a smart contract basis. 
        They represent the cost of performing operations on the blockchain or executing smart contracts. 
        Here is a detailed explanation: `}</P>
      </div>
      <div id="explained">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Gas Fees Explained</h2>
        <P>
          <span className="font-bold">Purpose:</span>
          {` Gas fees serve multiple purposes. 
        First, they prevent malicious attackers from spamming the network with excessive transactions. 
        Second, they compensate miners for the computational power required to validate and execute transactions. 
        And finally, it prioritizes transactions by allowing users to pay more, so that transactions are processed faster.`}
        </P>
        <P>
          <span className="font-bold">Measurement:</span>
          {` Gas fees are usually expressed in units of `}
          <span className="font-bold italic">{`"gas"`}</span>
          {`. Each operation on the Ethereum blockchain requires a certain amount of gas depending on its complexity and resource consumption. 
          The more complex the process, the more gas it requires. `}
        </P>
        <P>
          <span className="font-bold">Calculation:</span>
          {` The total cost of a transaction is calculated by multiplying the gas price (the amount of cryptocurrency paid per gas unit) by the gas limit (the maximum amount of gas the sender is willing to pay for a transaction). 
          That is, `}
          <span className="font-bold italic">{`total cost = gas price * gas limit.`}</span>
        </P>
        <P>
          <span className="font-bold">Market-Driven:</span>
          {` Gas prices are determined by the dynamics of supply and demand in the network. 
          When overload is high. When many people are transacting, or when  demand for a particular smart contract increases suddenly, gas prices tend to rise. 
          Conversely, gas prices fall during periods of low activity.`}
        </P>
        <P>
          <span className="font-bold">Flexible:</span>
          {` Users have some control over the gas fees they pay. 
          They can adjust the gas price and gas limit when sending a transaction. 
          Higher gas prices encourage miners to prioritize transactions, while higher gas limits allow for more complex operations.`}
        </P>
        <P>
          <span className="font-bold">User Impact:</span>
          {` Gas fees can vary significantly depending on network conditions. 
          During times of congestion, fees can become prohibitively high, making even simple transactions costly. 
          This can lead to frustration among users and impact the usability of the blockchain.`}
        </P>
      </div>
      <div id="conclusion">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Conclusion</h2>
        <P>{`In conclusion, gas fees are the costs associated with executing transactions and smart contracts on a blockchain network such as Ethereum. 
        They are used to prevent spam, motivate miners, and prioritize transactions. 
        Gas fees vary depending on operational complexity and market demand, and can be adjusted by users to balance costs and transaction speed. 
        However, fluctuations in gas prices can affect the usability and affordability of a blockchain network.`}</P>
      </div>
    </section>
  );
}
