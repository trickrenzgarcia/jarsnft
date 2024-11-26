import Image from "next/image";
import { P, H1, H2, H4, UL } from "../../_components/TailwindTags";

export default function WhatCryptoPage() {
  return (
    <section>
      <div id="explained">
        <H1>What is a Cryptocurrency?</H1>
        <Image
          src="/assets/InsightsAsset/cryptocurrency.webp"
          width={1920}
          height={1080}
          alt="Cryptocurrency Image"
          className="mb-12 max-h-[30rem] max-w-full rounded-lg object-cover"
          quality={100}
        />
        <div className="bg-[#d45eff3b] p-4">
          <H4>Simple Definition:</H4>
          <P>
            It is a digital currency secured by cryptography and based on decentralized blockchain technology, allowing secure peer-to-peer
            transactions without intermediaries.
          </P>
        </div>
        <H2>Cryptocurrency Explained</H2>
        <P>
          Cryptocurrency is a digital payment system that operates without banks, allowing peer-to-peer transactions globally. It consists of digital
          records in an online database, with each transaction recorded on a public ledger and stored in a digital wallet. The term
          &quot;cryptocurrency&quot; derives from the use of cryptography to secure and transfer data. Essentially, cryptocurrency functions as a
          value system, with investors buying it in hopes of its value increasing over time, similar to stock market investments.
        </P>
      </div>
      <div id="history">
        <hr />
        <H2>History of Cryptocurrency</H2>
        <H4>1980 up to Bitcoin&apos;s first launch in 2009</H4>
        <P>
          Cryptocurrencies have a rich history starting with digital cash concepts in the 1980s and 1990s. David Chaum introduced DigiCash in 1983 for
          secure, anonymous transactions, and Adam Back developed Hashcash in 1997, influencing Bitcoin&apos;s mining mechanism.
          Proto-cryptocurrencies like E-Gold and Bit Gold emerged in the late 1990s and early 2000s, setting the stage for modern developments. The
          major breakthrough occurred in 2008 when Satoshi Nakamoto published the Bitcoin White Paper, outlining a decentralized digital currency
          based on blockchain. Bitcoin was launched in 2009 with the mining of the genesis block, and the first real transaction occurred in 2010 when
          Laszlo Hanyec purchased two pizzas for 10,000 BTC.
        </P>
        <P>
          In the early 2010s, Bitcoin experienced significant growth alongside the emergence of altcoins like Litecoin and Ripple. Bitcoin gained
          notoriety for its association with Silk Road, an online black market that was shut down by the FBI in 2013. Between 2014 and 2016, the
          market faced challenges, including the Mt. Gox hack, which caused substantial Bitcoin losses, and the launch of Ethereum in 2015,
          introducing smart contracts and decentralized applications (dApps). The cryptocurrency market surged in 2017 with a rise in initial coin
          offerings (ICOs), attracting speculation and regulatory scrutiny. Following a market correction in 2018, governments began implementing
          stricter regulations to protect investors and combat fraud.
        </P>
        <H4>2018 up to present: Mainstream Adoption</H4>
        <P>
          As of 2021, cryptocurrencies have gained widespread adoption and interest from institutional investors, with companies like Tesla and
          MicroStrategy making significant Bitcoin purchases. Innovations in decentralized finance (DeFi) and non-fungible tokens (NFTs) have also
          risen in popularity. Meanwhile, governments are working on regulatory frameworks to balance innovation with consumer protection. Overall,
          cryptocurrencies have transitioned from niche digital assets to a vital component of the global financial landscape.
        </P>
      </div>
      <div id="safety">
        <hr />
        <H2>Are Cryptocurrencies Safe?</H2>
        <P>
          Cryptocurrencies can be safe if proper security measures are taken, but they also carry significant risks. Their decentralized nature
          reduces manipulation and censorship risks, and they use cryptographic techniques for security, making counterfeiting difficult. Blockchain
          technology provides transparency by recording transactions on a public ledger and offers financial services to the unbanked. However,
          cryptocurrencies are highly volatile, which can lead to substantial financial losses. Exchanges and wallets are vulnerable to hacking,
          fraud, and scams, and the legal status of cryptocurrencies varies by country, affecting their value and use. Transactions are typically
          irreversible, making lost or misdirected funds difficult to recover. To mitigate risks, it&apos;s advisable to use reputable exchanges,
          secure storage like hardware wallets, enable two-factor authentication, and remain informed about regulatory changes. Overall, while
          cryptocurrencies present new financial opportunities, they require careful consideration and strong security measures.
        </P>
      </div>
      <div id="usecase">
        <hr />
        <H2>Real-World Use Cases</H2>
        <P>
          Today, people use cryptocurrencies in a variety of ways and benefit from their unique properties: decentralization, security, and ease of
          transfer.
        </P>
        <ol className="ml-14 mt-2 list-decimal leading-loose tracking-wide">
          <li>
            <b className="text-white">Investments and Trading</b>
            <UL>
              <li>Long-Term Investment (Hodling)</li>
              <li>Trading</li>
            </UL>
          </li>
          <li>
            <b className="text-white">Payments and Transactions</b>
            <UL>
              <li>Peer-to-Peer Payments</li>
              <li>Merchant Payments</li>
            </UL>
          </li>
          <li>
            <b className="text-white">Decentralized Finance (DeFi)</b>
            <UL>
              <li>Lending and Borrowing</li>
              <li>Yield Farming and Staking</li>
            </UL>
          </li>
          <li>
            <b className="text-white">Non-Fungible Tokens (NFTs)</b>
            <UL>
              <li>Digital Art and Collectibles</li>
              <li>Gaming</li>
            </UL>
          </li>
        </ol>
        <UL>
          <li>Online Services and Subscriptions</li>
          <li>Charity and Donations</li>
          <li>Travel and Tourism</li>
          <li>Privacy and Anonymity</li>
          <li>Micro-transactions and Tips</li>
        </UL>
        <P>A more specific real-world example would be the following:</P>
        <ol className="ml-14 mt-2 list-decimal space-y-4 leading-loose tracking-wide dark:text-gray-300">
          <li>
            <b>Buying Coffee: </b>
            Some coffee shops accept Bitcoin and other cryptocurrencies, allowing customers to pay for their morning coffee with a crypto wallet.
          </li>
          <li>
            <b>E-commerce: </b>
            Online retailers such as Overstock and Newegg accept cryptocurrencies, allowing customers to buy electronics, furniture, and other items
            using Bitcoin or Ethereum.
          </li>
          <li>
            <b>Donating to Charity: </b>
            During natural disasters or humanitarian crises, people can quickly donate cryptocurrencies to relief efforts, ensuring that their funds
            are delivered to the intended recipients without delay.
          </li>
          <li>
            <b>Gaming Rewards: </b>
            In blockchain-based games, participants can earn cryptocurrency rewards for completing tasks or reaching milestones, which they can then
            trade for additional in-game assets or real-world value.
          </li>
          <li>
            <b>International Aid: </b>
            NGOs and international organizations use cryptocurrencies to send aid directly to individuals in need in countries with volatile financial
            systems, ensuring funds are delivered quickly.
          </li>
        </ol>
      </div>
      <div id="types">
        <hr />
        <H2>Types of Cryptocurrency</H2>
        <P>
          There are various types of cryptocurrency that are categorized based on their use case or technology that was used. The following are a few
          examples:
        </P>
        <ol className="ml-14 mt-2 list-decimal space-y-4 leading-loose tracking-wide">
          <li>
            <b className="text-white">Bitcoin: </b>
            Bitcoin which was created by Satoshi Nakamoto, is the first and best-known cryptocurrency. Its primary function is as a digital store of
            value and medium of exchange.
          </li>
          <li>
            <b className="text-white">Altcoins: </b>
            Altcoins, or alternative coins, are all cryptocurrencies other than Bitcoin.
            <ul className="ml-7 mt-2 list-disc dark:text-gray-300">
              <li>Litecoin (LTC)</li>
              <li>Bitcoin cash (BCH)</li>
              <li>Ripple (XRP)</li>
              <li>Dash (DASH)</li>
            </ul>
          </li>
          <li>
            <b className="text-white">Meme Coins: </b>
            Meme coins are cryptocurrencies inspired by internet memes and popular culture, frequently created for fun but occasionally gaining
            significant market value:
            <ul className="ml-7 mt-2 list-disc dark:text-gray-300">
              <li>Dogecoin (DOGE)</li>
              <li>Shiba inu (SHIB)</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-white">Tokens: </span>
            {` Tokens are cryptocurrencies developed on existing blockchain platforms, primarily for use in specific ecosystems or applications:`}
            <ul className="-mt-2 ml-7 list-disc dark:text-gray-300">
              <li>ERC-20 tokens</li>
              <li>BEP-20 tokens</li>
              <li>NFTs (non-fungible tokens)</li>
            </ul>
          </li>
          <li>
            <b className="text-white">Stablecoins: </b>
            Stablecoins are cryptocurrencies that maintain a stable value by being pegged to a reserve asset such as the US dollar, gold, or other
            cryptocurrencies:
            <ul className="-mt-2 ml-7 list-disc dark:text-gray-300">
              <li>Tether (USDT)</li>
              <li>USD Coin(USDC)</li>
              <li>Dai(DAI)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
