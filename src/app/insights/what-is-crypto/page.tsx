import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function WhatCryptoPage() {
  return (
    <section>
      <div id="explained">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          What is a Cryptocurrency?
        </h1>
        <Image
          src="/assets/InsightsAsset/crypto.jpeg"
          width={1920}
          height={1080}
          alt="Blockchain Image"
          className="mb-12 max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <div className="bg-[#d45eff3b] p-4">
          <h4 className="mb-2 font-semibold tracking-widest">
            Simple Definition:
          </h4>
          <p className="dark:text-gray-200">{` It is a digital currency secured by cryptography and based on decentralized blockchain technology, allowing secure peer-to-peer transactions without intermediaries.`}</p>
        </div>
        <h2 className="my-6 text-3xl font-bold">Cryptocurrency Explained</h2>
        <P>{`Cryptocurrency is a type of digital payment that doesn't rely on banks to verify transactions. 
        It works on a peer-to-peer system, so anyone, anywhere can send and receive payments. 
        Instead of physical money, virtual currency consists of digital records in an online database that detail a specific transaction.`}</P>
        <P>{`When you send cryptocurrency, the transaction is recorded on a public ledger and the cryptocurrency is stored in a digital wallet. 
        The name "cryptocurrency" comes from the use of cryptography to secure transactions. 
        This is advanced coding used to secure and transfer cryptocurrency data between wallets and public ledgers.`}</P>
        <P>{`Cryptocurrency is, essentially, a value system. 
        Just like stock market investors buy stocks in the hopes of the company growing and the stock price increasing, investors buy cryptocurrencies with the hopes that their value will increase over time.`}</P>
        <P>{``}</P>
      </div>
      <div id="history">
        <hr />
        <h2 className="my-6 text-3xl font-bold">History of Cryptocurrency</h2>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          {`1980 up to Bitcoin's first launch in 2009`}
        </h4>
        <P>{`Cryptocurrencies have a rich history that began with the first digital cash concepts in the 1980s and 1990s.
        David Chaum introduced DigiCash in 1983 to enable secure and anonymous digital transactions.
        During this era, Adam Back also developed Hashcash in 1997, a proof-of-work system that later influenced Bitcoin's mining mechanism.
        Proto-cryptocurrencies such as E-Gold and Bit Gold emerged in the late 1990s and early 2000s, paving the way for modern developments.`}</P>
        <P>{`The real breakthrough came in 2008, when an unknown person or group under the pseudonym Satoshi Nakamoto published the Bitcoin White Paper, which described a decentralized digital currency based on the blockchain.
        The introduction of Bitcoin with the mining of the genesis block in 2009 marked the beginning of the Bitcoin blockchain, and  the first real transaction took place in 2010 when Laszlo Hanyec paid 10,000 BTC for two pizzas.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          {`Early 2010s up to 2018's implementation of Regulations`}
        </h4>
        <P>{` In the early 2010s, Bitcoin saw  growth  and  altcoins such as Litecoin and Ripple emerged.
        Bitcoin gained notoriety for its use on Silk Road, an online black market that was shut down by the FBI in 2013.
        The period from 2014 to 2016 was marked by challenges such as the Mt.
        Gox hack, which caused significant  Bitcoin losses and market turmoil, and the launch of Ethereum in 2015, which introduced smart contracts and decentralized applications (dApps).
        The cryptocurrency market boomed in 2017 with an increase in initial coin offerings (ICOs), which led to increased speculation and regulatory scrutiny.
        After the market correction in 2018, governments around the world began to introduce stricter regulations to protect investors and prevent fraud.`}</P>
        <h4 className="my-6 text-lg font-bold tracking-wider">
          {`2018 up to present: Mainstream Adoption`}
        </h4>
        <P>{` As of 2021, cryptocurrencies are widely adopted and are attracting increasing interest from institutional investors.
        Companies such as Tesla and MicroStrategy have made significant purchases of Bitcoin, and innovations in decentralized finance (DeFi) and non-fungible tokens (NFTs) have gained popularity.
        During this time, governments have continued to develop regulatory frameworks to balance innovation and consumer protection.
        Cryptocurrencies have evolved from niche digital assets to an integral part of the global financial landscape.`}</P>
      </div>
      <div id="safety">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Are Cryptocurrencies Safe?</h2>
        <P>{`To put it simply, Cryptocurrencies can be safe if proper security measures are taken, but they also carry significant risks. Cryptocurrencies provide both significant opportunities and substantial risks. `}</P>
        <P>{`On the plus side, they are generally decentralized, lowering the risk of manipulation and censorship, and they employ cryptographic techniques with high levels of security, making counterfeiting or double-spending difficult. 
        Blockchain technology, which supports most cryptocurrencies, provides transparency by recording all transactions on a public ledger. 
        Additionally, cryptocurrencies can provide financial services to individuals who do not have access to traditional banking systems. 
        However, they are also known for their price volatility, with values fluctuating dramatically in short periods of time, potentially resulting in significant financial losses. 
        While the underlying technology is secure, exchanges and wallets are susceptible to hacking, fraud, and scams, with several high-profile thefts taking place. `}</P>
        <P>{`The legal status of cryptocurrencies varies greatly between countries and can change, potentially affecting their value and use. 
        Furthermore, cryptocurrency transactions are typically irreversible, which means that funds sent to the wrong address or lost due to fraud are usually irrecoverable. 
        The relatively unregulated nature of cryptocurrency markets can make them vulnerable to manipulation by large holders or coordinated groups. 
        To reduce these risks, it is recommended to use reputable exchanges, secure storage solutions such as hardware wallets, enable two-factor authentication on accounts, stay up to date on developments and regulatory changes, and exercise caution by not sharing private keys and double-checking addresses before sending funds. 
        Thus, while cryptocurrencies provide novel financial opportunities, they necessitate careful consideration and stringent security measures.`}</P>
      </div>
      <div id="usecase">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Use Cases</h2>
        <P>{`Today, people use cryptocurrencies in a variety of ways and benefit from their unique properties: decentralization, security, and ease of transfer.
        The most common uses for cryptocurrencies are: `}</P>
        <P>{``}</P>
      </div>
      <div id="types">
        <hr />
        <h2 className="my-6 text-3xl font-bold">Types of Cryptocurrency</h2>
      </div>
    </section>
  );
}
