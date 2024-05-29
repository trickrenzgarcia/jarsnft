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
        <P>{`The Blockchain is a type of database that is specifically designed to be secure. 
        Consider a shared spreadsheet that keeps track of all transactions and changes, but instead of being stored on a single server, it is duplicated and distributed across multiple computers. 
        Transactions are organized into blocks and linked together to form a chain, hence the name "Blockchain," with each computer on the network having its own copy.`}</P>
        <P>{`
        This system makes it extremely difficult to tamper with data because any change would require changing all subsequent blocks on each copy of the blockchain, which is nearly impossible. 
        Blockchain's transparency and security make it valuable for uses other than cryptocurrency, such as tracking medical records, facilitating secure voting, and managing supply chains.`}</P>

        <h2 className="my-6 text-2xl font-bold">Blockchain Explained</h2>
        <P></P>
        <P>
          {`(`}
          <span className="font-semibold text-[#A519D7] underline ">
            <a href="/insights/what-makes-nft-valuable">Learn more here</a>
          </span>
          {")"}
        </P>
      </div>
      <div id="history">
        <h2 className="my-6 text-2xl font-bold">
          History and its Significance
        </h2>
        <P>{`NFTs and Cryptocurrencies have similarities, such as being programmed to be used in the Web3. 
      They also are a digital representation of a physical object. 
      For an NFT this could be any object, while Cryptocurrency could be the US Dollar or Philippine Pesos. `}</P>
        <P>{`Though they are similar, their uses and concept have a clear difference. 
      NFTs from the name Non-fungible means that each NFT is unique and irreplaceable. 
      Imagine a trading card - you can't trade one Michael Jordan rookie card for another LeBron James rookie card because they represent different things. 
      On the otherhand, Cryptocurrencies are fungible. This means one Bitcoin is interchangeable with another Bitcoin. 
      They have the same value and can be traded equally. 
      As mentioned earlier, it's like real money - a $10 bill is worth the same as any other $10 bill. `}</P>
        {/* <h2 className="my-9 text-2xl font-bold">{`What's their Use Case?`}</h2>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Cryptocurrencies</span>
            {` are often used as a digital currency for transactions and potential investment. 
      You can use Bitcoin to buy a coffee (if the merchant accepts it) or hold onto when trading it hoping it goes up in value.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">NFTs</span>
            {` represent ownership of digital or physical assets. NFTs can be digital art, music, in-game items, or even real-world things like property.`}
          </li>
        </ul> */}
      </div>
      <div id="history">
        <h2 className="my-6 text-2xl font-bold">
          Centralized and Decentralized Blockchain
        </h2>
        <P>{`During the year 2017, NFTs became widely known. The release of CryptoKitties, a blockchain-based game that let players collect, breed, and trade virtual cats, and this spike in popularity happened at the same time. 
      Although there had been earlier ideas such as colored coins around 2012, the Ethereum blockchain's user-friendly features that made it possible to create, store, and trade NFTs were what really drove the NFT boom in 2017.`}</P>
        <Image
          src="/assets/InsightsAsset/AxieInfinity.jpg"
          width={1920}
          height={1080}
          alt="What is NFT Image"
          className="max-h-[25rem] max-w-full rounded-lg object-cover object-top"
        />
        <P>{`Meanwhile in the Philippines, The NFT boom in the country can be traced to two main areas: digital art and gaming. Filipinos saw NFTs as an opportunity for talented artists to gain international recognition. 
      NFTs provided a secure and verifiable way to prove ownership of digital works and potentially earn a living.`}</P>
        <P>{`Additionally, the play-to-earn model of games such as Axie Infinity has boomed during the pandemic. 
      Given the economic challenges, Filipinos saw these games as a potential source of income. 
      The ability to own and trade valuable in-game assets was definitely a big draw. Paving the way of future Play-To-Earn games as well as the exposure of blockchain technology in the country.`}</P>
      </div>
      <div id="types">
        <h2 className="my-6 text-2xl font-bold">Benefits of Blockchain</h2>
        <P>{`Blockchains are distributed public ledgers that record transactions and are where NFTs are found. Most likely, you are most familiar with blockchain technology as the backbone that enables cryptocurrencies. 
      In particular, NFTs are generally maintained on the Ethereum network, though they can also be maintained on other networks.`}</P>
        <P>{`An NFT is produced, or "minted," using digital representations of both material and immaterial objects. Due to This, different types of NFTs are created with various categories such as:`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Art NFTs:</span>
            {` These are the most common, representing digital artwork ranging from single-edition pieces to collections with varying degrees of rarity.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Collectible NFTs:</span>
            {` Think of virtual trading cards. They include profile pictures (PFPs) such as those from the popular Bored Ape Yacht Club or Cryptopunks collections, as well as other collectibles like memes or virtual sports highlights.`}
          </li>
          <li className="mb-6">
            <span className="font-bold">Gaming NFTs:</span>
            {` In play-to-earn games, NFTs are frequently used to purchase in-game goods, virtual land, or characters. These NFTs have in-game uses and can be exchanged for real money.`}
          </li>
        </ul>
        <P>{`And a few more including:`}</P>
        <ul className="-mt-2 ml-14 list-disc font-bold dark:text-gray-300">
          <li className="mb-3">Utility NFTs</li>
          <li className="mb-3">Virtual Real Estate NFTs</li>
          <li className="mb-3">Domain NFTs</li>
          <li className="mb-3">Music NFTs</li>
          <li className="mb-3">Ticketing NFTs</li>
          <li className="mb-3">Charitable NFTs</li>
          <li className="mb-3">Real-world Asset NFTs</li>
          <li className="mb-3">Decentralized Finance (DeFi) NFTs</li>
        </ul>
        <br />
        <P>{`These are but the few examples of NFTs that can be found in different marketplaces. To find out more on what gives NFT their value and how its economy work, move to the next topic.`}</P>
      </div>
    </article>
  );
}
