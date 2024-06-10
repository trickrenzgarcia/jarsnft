"use client";
import React from "react";
import Image from "next/image";
import { P } from "../_components/TailwindTags";

const cenExch = [
  {
    topic: "Binance",
    steps: [
      " Login to your Binance account.",
      " Go to Asset's tab and select 'Overview.'",
      " Choose Cryptocurrency to exchange",
      " Choose and confirm payment.",
    ],
    images: [
      "/assets/InsightsAsset/Guide.png",
      "/assets/InsightsAsset/Guide2.png",
      "/assets/InsightsAsset/Guide3.png",
      "/assets/InsightsAsset/Guide4.png",
    ],
  },
  {
    topic: "CoinsPHBuy",
    steps: [
      " Tap Buy or Sell.",
      " Select Buy Crypto.",
      " Choose Crypto token",
      " Purchase to complete transaction.",
    ],
    images: [
      "/assets/InsightsAsset/CoinsBuySell.gif",
      "/assets/InsightsAsset/CoinsBuy.gif",
      "/assets/InsightsAsset/CoinsBuy2.gif",
      "/assets/InsightsAsset/CoinsPurchase.gif",
    ],
  },
  {
    topic: "CoinsPHSell",
    steps: [
      " Tap Buy or Sell.",
      " Select Sell Crypto",
      " Sell to complete transaction.",
    ],
    images: [
      "/assets/InsightsAsset/CoinsBuySell.gif",
      "/assets/InsightsAsset/CoinsSell1.gif",
      "/assets/InsightsAsset/CoinsSell2.gif",
    ],
  },
  {
    topic: "CoinsPHTransferCrypto",
    steps: [
      " Tap on the transfer button.",
      " Select Deposit Crypto.",
      " Choose you selected Crypto and save its address.",
    ],
    images: [
      "/assets/InsightsAsset/CoinsTransfer1.gif",
      "/assets/InsightsAsset/CoinsTransfer2.gif",
      "/assets/InsightsAsset/CoinsTransfer3.gif",
    ],
  },
  {
    topic: "bybitBuy",
    steps: [
      " Enter coin amount and tap buy.",
      " Confirm your buy transaction.",
    ],
    images: [
      "/assets/InsightsAsset/bybit buy1.png",
      "/assets/InsightsAsset/bybit buy2.png",
    ],
  },
  {
    topic: "BybitSell",
    steps: [
      " Enter USDT amount and tap sell.",
      " Confirm your sell transaction.",
    ],
    images: [
      "/assets/InsightsAsset/bybit sell1.png",
      "/assets/InsightsAsset/bybit sell2.png",
    ],
  },
];

const Page = () => {
  return (
    <article>
      <div className="m-0">
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Exchange Cryptocurrency
        </h1>
        <h3 className="text-md my-5 xl:text-lg ">
          The following are the recommended central exchanging platforms that
          every beginners should know.
        </h3>
        <Image
          src="/assets/InsightsAsset/bitcoin-exchange.jpeg"
          width={1920}
          height={1080}
          alt="Exchange Cryptocurrency"
          className="max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <h2 className="my-6 text-3xl font-bold">Overview</h2>
        <P>{`Choosing your own Exchanging platform can be intimidating and difficult for beginners. 
        Though it is vital to have your a place to begin your blockchain journey. 
        As such we will recommend websites that are easy for beginners to navigate in on, and have short walkthrough experience when using the platform. The following platforms will be:`}</P>
        <ol className="-mt-2 ml-14 list-decimal leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">Coins PH</span>
          </li>
          <li className="mb-3">
            <span className="font-bold">ByBit</span>
          </li>
          <li className="mb-3">
            <span className="font-bold">Binance</span>
          </li>
        </ol>
        <hr />
      </div>
      <>
        <div id="coinsph" className="m-0">
          <div>
            <h2 className="my-6 text-3xl font-bold">Coins PH</h2>
            <P>
              {`It is a well-known local exchanging platform in the Philippines.
            it offers an easy process of trading of cryptocurrencies, as well as the option to transfer your funds to other online bank accounts such as GCash.
            Coins PH has a KYC feature whereas these features are only allowed for verified accounts.`}{" "}
              <span className="font-semibold text-[#A519D7] underline ">
                <a href="https://support.coins.ph/hc/en-us/articles/360000219141-How-do-I-get-my-account-ID-and-selfie-verified">
                  Learn to verify your account here
                </a>
              </span>
            </P>
            <P>
              {`The website is easy to use with its user-friendly interface along with its cheap fees compared to other local exchanging platform.
            You can go to their website's`}{" "}
              <span className="font-semibold text-[#A519D7] underline">
                <a href="https://support.coins.ph/hc/en-us">help center</a>
              </span>{" "}
              {` for more information.`}
            </P>
            <h2 className="my-6 text-2xl font-bold">Home Page</h2>
            <Image
              src="/assets/InsightsAsset/coinsPH homescreen.png"
              alt="CoinsPH HomePage"
              width={1080}
              height={1920}
              className="max-h-full max-w-full"
            />
            <P>
              <span className="italic">
                <span className="font-bold">Note: </span>
                {` it is recommended to use the App version where it is much easier to navigate and to access anywhere. `}
              </span>
            </P>
          </div>
          <div>
            <h2 className="my-6 text-3xl font-bold">Why choose Coins PH</h2>
            <P>
              {`Because of its range of services, accessibility, and ease of use, Coins.ph is a very attractive option for handling your finances. 
            You may effortlessly manage bill payments, remittances, and even cryptocurrency transactions all in one location with an intuitive platform that is accessible from a smartphone. 
            Because it is accessible to those without traditional bank accounts as well, it promotes financial inclusion by making necessary services available to a larger group of people. `}
            </P>
            <P>
              {`Additionally, Coins.ph gives users confidence by providing security measures like two-factor authentication and being overseen by the Bangko Sentral ng Pilipinas. 
            Coins.ph offers a comprehensive solution to satisfy your financial needs, whether you're wanting to receive remittances from overseas, expedite your regular transactions, or investigate investment opportunities in cryptocurrencies like Bitcoin and Ethereum.`}
            </P>
            <P>{`Not only is it a beginner friendly choice but it also provide rewards with its referral system and seasonal promos and giveaways.`}</P>
            <h2 className="my-6 text-3xl font-bold">
              How to start with Coins PH
            </h2>
            <P>
              {`After you have created and verified your account, you will be allowed to trade cryptocurrency that you have in your wallet.
          Before that, you'll need to transfer your funds from your metamask wallet. It is very easy.`}
            </P>
            {displaySteps("coinsphTransferCrypto")}
            <P>
              {`Save and paste the address that was given and paste it to your metamask wallet, then confirm your transaction. `}
            </P>
            <div className="flex flex-col items-center">
              <p className="lg:text-md text-center text-sm">
                <span className="font-bold">Note: </span>Paste your wallet
                address here.
              </p>
              <Image
                src="/assets/InsightsAsset/Metamask Send.png"
                alt="Metamask Wallet Address"
                width={1080}
                height={1920}
                className="mt-5 max-h-[20rem] max-w-[15rem]"
              />
            </div>
          </div>
          <div>
            <h2 className="my-6 text-3xl font-bold">
              How to deposit your wallet
            </h2>
            <P>
              {`To be able to make use of CoinsPH's services, your account should have sufficient funds to be able to Buy, Sell, and choose any of CoinsPH's services. 
              Depositing money to your wallet will be vital, therefore we can follow through on how we can transfer money to our wallet.`}
            </P>
            <div className="flex flex-col items-center">
              <p className="lg:text-md text-center text-sm">
                <span className="font-bold">Transfer Options: </span>
              </p>
              <Image
                src="/assets/InsightsAsset/Coins transfer options.png"
                alt="CoinsPH Transfer Options"
                width={1080}
                height={1920}
                className="center mt-3 max-h-[20rem] max-w-[15rem]"
              />
            </div>
            <P>{`You can Load money to your wallet by using the Cash In option. The following are the available stores that are affliated with CoinsPH.
            Choose where you will load money to your wallet.`}</P>
            <h3 className="text:md my-5 font-bold xl:text-lg">Cash In </h3>
            <ul className="-mt-2 ml-14 list-disc dark:text-gray-300">
              <li>7-Eleven CLiQQ</li>
              <li>Bayad Center</li>
              <li>Cebuana Lhuillier</li>
              <li>GCash via DragonPay</li>
              <li>M Lhuillier ePay</li>
              <li>Palawan Express Pera Padala</li>
              <li>TouchPay</li>
              <li>UnionBank</li>
            </ul>
            <h3 className="text:md my-5 font-bold xl:text-lg">Cash Out </h3>
            <P>{`Cashing out is processed through various banks. Here are a few choices to pick. You can also check on their Help Center for more information.`}</P>
            <ul className="-mt-2 ml-14 list-disc dark:text-gray-300">
              <li>GCash (Recommended)</li>
              <li>BPI</li>
              <li>Union Bank</li>
            </ul>
            <P>{`Now that your wallet has your desired cryptocurrency you are now able to make your transaction in the CoinsPH app.
            To be able to exchange your earned cryptocurrency, follow these following steps:`}</P>
            <h3 className="text:md m-5 text-center font-bold xl:text-lg">
              Steps in Selling your crypto
            </h3>
            {displaySteps("coinsphsell")}
            <P>{`Congrats! you can now check your wallet balance and be able to transfer it to your Gcash Account or use it to pay for the services that Coins PH can offer.`}</P>
            <P>{`Of course we can also do the opposite.
            If you want to exchange our local currency into any cryptocurrency you can follow the following steps:`}</P>
            <h3 className="text:md m-5 text-center font-bold xl:text-lg">
              Steps in Buying a crypto
            </h3>
            {displaySteps("coinsphbuy")}
          </div>
          <hr />
        </div>
        <div id="bybit">
          <h2 className="my-6 text-3xl font-bold">Bybit</h2>
          <P>
            {`A cryptocurrency exchange well-known for its quickness and concentration on trading derivatives, especially perpetual contracts, is ByBit. 
            This enables leveraged trading, in which you can borrow money to take control of a position that is bigger than your account balance. 
            For traders seeking a fast-paced, user-friendly platform with possibly larger returns (and dangers) on derivatives trading, ByBit is the perfect option. 
            ByBit is less appropriate, nevertheless, for new users or those seeking a broader selection of cryptocurrencies or a platform for just purchasing and storing cryptocurrency.`}
          </P>
          <h2 className="my-6 text-2xl font-bold">Home Page</h2>
          <Image
            src="/assets/InsightsAsset/bybit_homepage.png"
            alt="Bybit HomePage"
            width={1080}
            height={1920}
            className="max-h-full max-w-full"
          />
          <P>
            {`Like other exchange platform, ByBit requires a KYC verification in order to allow access to its features. `}
            <span className="text[#A519D7] font-semibold text-[#A519D7] underline">
              <a href="https://www.bybit.com/en/help-center/article/How-to-Complete-Individual-KYC-Verification">
                learn how to verify in ByBit here
              </a>
            </span>
          </P>
          <h2 className="my-6 text-3xl font-bold">Why choose ByBit</h2>
          <P>{`Bybit could be a good fit for experienced traders looking for an advanced platform with a focus on derivatives trading. 
          They offer high leverage, fast transaction speeds, and a good variety of popular cryptocurrencies. Less experienced users might find Bybit challenging due to its focus on margin trading and limited fiat support. 
          Additionally, some features and higher withdrawal limits are locked behind KYC verification. `}</P>
          <P>{`Although it might prove to be quite challenging for beginners, it can be beneficial to learn and improve in your knowledge in trading cryptocurrencies.
          Such challenges can be the diversity of fiat currency in the platform. In other words, it does not have direct exchange between cryptocurrencies into PHP currency.
          It is wise to consider ByBit with your trading experiences. Though that is why we will give you insights on how to exchange your cryptocurrencies in this platform.`}</P>
          <div>
            <h2 className="my-6 text-2xl font-bold">How to start with ByBit</h2>
            <P>
              {`After verifying your account you are now able to trade and exchange your cryptocurrencies, but before that here are quick tips that may help you.`}
            </P>
            <ul className="-mt-2 ml-14 list-disc dark:text-gray-300">
              <li className="mb-3">
                <span className="font-bold">Fund your account:</span>
                {` To begin trading, you must have cryptocurrency. Various cryptocurrencies, not fiat money (such Philippine Peso), are accepted as deposits on ByBit. 
            To use ByBit, you must transfer cryptocurrency from another wallet or exchange.`}
              </li>
              <li className="mb-3">
                <span className="font-bold">
                  Investigate the ByBit platform:
                </span>
                {` Become acquainted with the user interface and functionalities like as order kinds, fees, and margin requirements (if leverage is being used). 
            They provide guidelines and tutorials to get you going.`}
              </li>
              <li className="mb-3">
                <span className="font-bold">
                  Think about your trading approach:
                </span>
                {` Choose the cryptocurrencies you wish to trade and if you plan to trade regularly (spot) or with leverage (derivatives). 
              Recall that while leverage can boost prospective gains, it can also amplify potential losses.`}
              </li>
              <li className="mb-3">
                <span className="font-bold">Start small (optional):</span>
                {` Before taking on greater risks, it's advisable to begin with a little investment if you're new to cryptocurrency trading in order to gain familiarity with the platform and the market.`}
              </li>
            </ul>
            <h2 className="my-6 text-2xl font-bold">
              Fund your account (Deposit)
            </h2>
            <P>{`Funding your account is necessary, here are a few steps To deposit cryptocurrency into your account.`}</P>
            <P>
              {`1. After logging in, you will be redirected to this page. `}
              <span className="font-bold"> Click Deposit </span>
            </P>
            <Image
              src="/assets/InsightsAsset/bybit deposit1.png"
              alt="Bybit Deposit 1"
              width={1080}
              height={1920}
              className="max-h-full max-w-[25rem]"
            />
            <P>
              {`2. Follow the Instructions and a `}
              <span className="font-bold"> QR Code </span>
              {` will display, Used that or copy and paste the `}
              <span className="font-bold"> coin address </span>
              {` coin address to your wallet that contains your chosen Coin.`}
            </P>
            <Image
              src="/assets/InsightsAsset/bybit deposit2.png"
              alt="Bybit Deposit 2"
              width={1080}
              height={1920}
              className="mt-7 max-h-[30rem] max-w-full"
            />
            <P>
              <span className="italic">
                <span className="font-bold">Note: </span>
                {` Fiat deposits are also available if you want to deposit USDT or other similar currency.`}
              </span>
            </P>
          </div>
          <div>
            <h2 className="my-6 text-3xl font-bold">Start your first trade</h2>

            <P>{`Now that you have sufficient funds, it is time to exchange them into your country's currency or to another cryptocurrency.
          ByBit provides two options: Trade and Convert. `}</P>
            <h3 className="text:lg font-bold xl:text-xl">Convert</h3>
            <Image
              src="/assets/InsightsAsset/bybit convert1.png"
              alt="Bybit Convert 1"
              width={1080}
              height={1920}
              className="my-7 max-h-full max-w-[30rem]"
            />
            <Image
              src="/assets/InsightsAsset/bybit convert2.png"
              alt="Bybit Convert 2"
              width={1080}
              height={1920}
              className="mt-7 max-h-full max-w-[30rem]"
            />
            <P>{`Convert will typically exchange your cryptocurrency into fiat money or real currencies. This also has the benefit of minimal to no transaction fees.`}</P>
            <P>{`Trade on the other hand gives you the option to exchange directly to fiat money or to other type of cryptocurrency. 
          Although we recommend the Trade feature as it has a slightly more profit than in Convert. Feel free to explore more about ByBit's Trade feature.`}</P>

            <h3 className="text:lg font-bold xl:text-xl">Trade</h3>
            <Image
              src="/assets/InsightsAsset/bybit trade1.png"
              alt="Bybit Trade 1"
              width={1080}
              height={1920}
              className="mt-7 max-h-full max-w-[30rem]"
            />
            <Image
              src="/assets/InsightsAsset/bybit trade2.png"
              alt="Bybit Trade 2"
              width={1080}
              height={1920}
              className="mt-7 max-h-full max-w-full"
            />
            <P>{`With the introduction out of the way you can now start exchange your cryptocurrency. We now will be using the Trade feature of Bybit. To guide you, consider the following steps accordingly: `}</P>
            <h3 className="text:md m-5 text-center font-bold xl:text-xl">
              How to buy your crypto
            </h3>
            {displaySteps("bybitbuy")}
            <h3 className="text:md m-5 text-center font-bold xl:text-xl">
              How to sell your crypto
            </h3>
            {displaySteps("bybitsell")}
          </div>
          <div>
            <h2 className="my-6 text-3xl font-bold">{`What's next?`}</h2>
            <P>{`Since bybit is an international exchanging platform it may become confusing as to how to convert your USD into PHP, therefore we will provide you tips on how to do so.`}</P>
            <ul className="-mt-2 ml-14 list-disc dark:text-gray-300">
              <li className="mb-3">
                <span className="font-bold">Withdraw your crypto:</span>
                {`  After selling your cryptocurrency on ByBit through perpetual contracts, you'll end up with another cryptocurrency, typically USDT (Tether). 
              You'll need to withdraw this USDT from ByBit to a platform that allows conversion to PHP.`}
              </li>
              <li className="mb-3">
                <span className="font-bold">
                  Transfer to a PHP-friendly platform:
                </span>
                {` Choose a cryptocurrency exchange platform in the Philippines that allows PHP trading, like PDAX or Coins.ph. 
              Send your USDT from ByBit to your chosen platform's USDT wallet address.`}
              </li>
              <li className="mb-3">
                <span className="font-bold">Sell USDT for PHP:</span>
                {` Once your USDT arrives in your chosen platform's wallet, you can then sell it for PHP on their platform. 
              They will have options to initiate a PHP withdrawal which you can transfer to your Philippine bank account.`}
              </li>
            </ul>
            <P>
              <span className="italic">
                <span className="font-bold">Important Note: </span>
                {` Remember, there might be fees associated with each step of this process, including withdrawal fees on ByBit and trading fees on the PHP platform.  
              Make sure to factor these in when planning your conversion.`}
              </span>
            </P>
          </div>
          <hr />
        </div>

        <div id="binance">
          <h2 className="my-6 text-3xl font-bold">Binance</h2>
          <P>
            {`A widely-known popular crypto exchanging platform that having 128+ Million users in the platform. It became popular due to an increase of public interest in the crypto space
            and therefore has become the iconic platform to turn your crypto into real currency.
            It is generally used in trading cryptocurrency and converting it to real currencies such as the US Dollars.
            It also provides a KYC system or also known as Know-Your-Customer which is used to verify users by uploading there ID's and personal information. `}
          </P>
          <h2 className="my-6 text-3xl font-bold">Home Page</h2>
          <Image
            src="/assets/InsightsAsset/Binance_Homepage.png"
            alt="Binance HomePage"
            width={1080}
            height={1920}
            className="max-h-full max-w-full"
          />
          <P>
            {`In starting your binance experience you should begin by creating an account and entering your information for verification. `}
            <span className="font-semibold text-[#A519D7] underline">
              <a href="https://www.binance.com/blog/nft/how-to-verify-your-new-binance-account-and-claim-your-cr7-foreverzone-box-6753024416772061769#:~:text=Log%20in%20to%20your%20Binance,back%20after%20completing%20this%20step.">
                learn more about KYC and Verification
              </a>
            </span>
          </P>
          <h2 className="my-6 text-3xl font-bold">Why choose Binance</h2>
          <P>
            {`Because of Binance's high levels of liquidity, traders can purchase or sell assets with ease and little risk of large price swings. 
            This facilitates traders' ability to carry out their trading plans and meet their financial objectives. 
            Some of the lowest trading costs in the bitcoin market are also provided by Binance.`}
          </P>
          <h2 className="my-6 text-3xl font-bold">How to start with Binance</h2>
          <P>{`To begin using Binance, follow these steps:`}</P>
          <ul className="-mt-2 ml-14 list-disc dark:text-gray-300">
            <li className="mb-3">
              <span className="font-bold">Create an Account:</span>
              {` Visit the Binance website or download the app, then fill out the registration form with your phone number or email address.`}
            </li>
            <li className="mb-3">
              <span className="font-bold">Complete Verification:</span>
              {` Binance needs identity verification in order to access all functionalities. 
              Typically, this is done by providing identification credentials, a facial verification, and basic information.`}
            </li>
            <li className="mb-3">
              <span className="font-bold">Fund Your Account:</span>
              {` You can add money to your Binance account after it has been validated. 
              Peer-to-peer (P2P) trading, bank transfers, and direct cryptocurrency purchases using debit or credit cards are just a few of the options available to you (not available in all locations).`}
            </li>
            <li className="mb-3">
              <span className="font-bold">Start Trading:</span>
              {` You can investigate the exchange once you have money in your account. Binance provides a range of trading choices and cryptocurrencies. 
              Before getting started, novices can use their resources to learn about cryptocurrency and trading.`}
            </li>
          </ul>
          <h2 className="my-6 text-3xl font-bold">Exchange your Crypto</h2>
          <P>{`After setting up your account, consider the following steps on the basic process of exchanging your crypto into fiat currency. This can also include the opposite wherein we can buy crypto using fiat money or basically real world currencies.`}</P>
          {displaySteps("binance")}
          <hr />
        </div>
      </>
      <div id="others">
        <h2 className="my-6 text-3xl font-bold">
          Other Central Exchanging Platforms
        </h2>
        <P>{`The following are websites and apps that you can consider checking out that can help you in exchanging your crypto into real money, and even other services such as trading.`}</P>
        <ul className="-mt-2 ml-14 list-disc leading-loose tracking-wide dark:text-gray-300">
          <li className="mb-3">
            <span className="font-bold">
              PDAX (Philippine Digital Asset Exchange):
            </span>
            {` is a regulated cryptocurrency exchange in the Philippines. It offers spot trading, margin trading, and over-the-counter (OTC) trading for various cryptocurrencies and PHP.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Maya (formerly PayMaya):</span>
            {`  is a popular e-wallet in the Philippines that also allows users to buy and sell cryptocurrencies. 
            You can convert your crypto to PHP and withdraw it to your Maya account.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">UnionBank :</span>
            {` is a universal bank in the Philippines that offers cryptocurrency trading services through its subsidiary, UnionBank GlobalLinker. 
            You can convert your crypto to PHP and withdraw it to your UnionBank account.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Crypto.com:</span>
            {` A popular exchange that offers a user-friendly interface and a variety of features, including its own cryptocurrency (CRO). 
            Crypto.com is known for its competitive fees and mobile app.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Kraken:</span>
            {`  A large and established cryptocurrency exchange that offers a good selection of cryptocurrencies and a variety of features, including margin trading and staking. 
            Kraken is known for its security and liquidity, but its interface can be a bit more complex for beginners than Coinbase.`}
          </li>
          <li className="mb-3">
            <span className="font-bold">Coinbase:</span>
            {`  One of the largest and most well-known cryptocurrency exchanges in the world. 
            Coinbase is a great option for beginners because it has a user-friendly interface, offers a variety of educational resources, and allows users to buy crypto with fiat currency (like US dollars or Euros) using a variety of payment methods, including bank transfers, credit cards, and debit cards. 
            However, Coinbase can have higher fees than some other exchanges.`}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Page;

function displaySteps(props: string) {
  return (
    <div>
      {cenExch.map(
        (site, index) =>
          site.topic.toLowerCase() === props.toLowerCase() && (
            <div
              key={index}
              className="mt-5 flex max-h-full flex-wrap content-center justify-around gap-5"
            >
              {site.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="lg:text-md text-center text-sm">
                    <span className="font-bold">Step {index + 1} </span>:{step}
                  </p>
                  <Image
                    src={site.images[index]}
                    alt={`pictureGuide ${index + 1}`}
                    width={200}
                    height={250}
                    style={{
                      minHeight: 250,
                      minWidth: 200,
                      maxHeight: 550,
                    }}
                    quality={90}
                    className="m-5 rounded-lg lg:w-[15rem]" // lg:h-[20rem]
                  />
                </div>
              ))}
            </div>
          ),
      )}
    </div>
  );
}
