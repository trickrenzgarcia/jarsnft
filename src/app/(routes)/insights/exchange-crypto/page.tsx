import Image from "next/image";
import { P, H1, H2, H3, OL, UL } from "../_components/TailwindTags";

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
      <div>
        <H1>Exchange Cryptocurrency</H1>
        <H3>The following are the recommended central exchanging platforms that
        every beginners should know.</H3>
        <Image
          src="/assets/InsightsAsset/exchange.png"
          width={1920}
          height={1080}
          alt="Exchange Cryptocurrency"
          className="max-h-[15rem] max-w-full rounded-lg object-cover"
        />
        <H2>Overview</H2>
        <P>Choosing your own Exchanging platform can be intimidating and difficult for beginners. 
        Though it is vital to have your a place to begin your blockchain journey. 
        As such we will recommend websites that are easy for beginners to navigate in on, and have short walkthrough experience when using the platform. The following platforms will be:</P>
        <OL>
          <li>
            <b>GCash</b>
          </li>
          <li>
            <b>Coins PH</b>
          </li>
          <li>
            <b>ByBit</b>
          </li>
          <li>
            <b>Binance</b>
          </li>
        </OL>
        <hr />
      </div>
      <>
        <div id="coinsph">
          <div>
            <H2>Coins PH</H2>
            <P>It is a well-known local exchanging platform in the Philippines it offers an easy process of trading of cryptocurrencies, as well as the option to transfer your funds to other online bank accounts such as GCash.
            Coins PH has a KYC feature whereas these features are only allowed for verified accounts. 
              <span className="font-semibold text-[#A519D7] underline">
                <a href="https://support.coins.ph/hc/en-us/articles/360000219141-How-do-I-get-my-account-ID-and-selfie-verified">
                {" "}Learn to verify your account here{" "}
                </a>
              </span>
            </P>
            <P>The website is easy to use with its user-friendly interface along with its cheap fees compared to other local exchanging platform.
            You can go to their website&apos;s
              <span className="font-semibold text-[#A519D7] underline">
                <a href="https://support.coins.ph/hc/en-us">{" "}help center{" "}</a>
              </span>
              for more information.
            </P>
            <H2>Home Page</H2>
            <Image
              src="/assets/InsightsAsset/coinsPH homescreen.png"
              alt="CoinsPH HomePage"
              width={1920}
              height={1080}
              className="max-h-full max-w-full"
            />
            <P>
              <i>
                <b>Note: </b>
                it is recommended to use the App version where it is much easier to navigate and to access anywhere.
              </i>
            </P>
          </div>
          <div>
            <H2>Why choose Coins PH </H2>
            <P>Coins.ph offers a range of financial services, including bill payments, remittances, and cryptocurrency transactions, all accessible via a user-friendly smartphone platform. It promotes financial inclusion by catering to individuals without traditional bank accounts and enhances user confidence through security features like two-factor authentication and oversight by the Bangko Sentral ng Pilipinas. Coins.ph serves various needs, from receiving remittances to exploring cryptocurrency investments, and includes a referral system and seasonal promotions for additional benefits.</P>
            <H2>How to start with Coins PH</H2>
            <P>After you have created and verified your account, you will be allowed to trade cryptocurrency that you have in your wallet.
            Before that, you&apos;ll need to transfer your funds from your metamask wallet. It is very easy.</P>
            {displaySteps("coinsphTransferCrypto")}
            <P>Save and paste the address that was given and paste it to your metamask wallet, then confirm your transaction.</P>
            <div className="flex flex-col items-center">
              <p className="lg:text-md text-center text-sm">
                <b>Note: </b>Paste your wallet address here.
              </p>
              <Image
                src="/assets/InsightsAsset/Metamask Send.png"
                alt="Metamask Wallet Address"
                width={500}
                height={500}
                className="mt-5 max-h-[34rem] max-w-[20rem]"
              />
            </div>
          </div>
          <div>
            <H2>How to deposit your wallet</H2>
            <P>
              To be able to make use of CoinsPH services, your account should have sufficient funds to be able to Buy, Sell, and choose any of CoinsPH services. 
              Depositing money to your wallet will be vital, therefore we can follow through on how we can transfer money to our wallet.
            </P>
            <div className="flex flex-col items-center">
              <p className="lg:text-md text-center text-sm">
                <b>Transfer Options: </b>
              </p>
              <Image
                src="/assets/InsightsAsset/Coins transfer options.png"
                alt="CoinsPH Transfer Options"
                width={500}
                height={500}
                className="mt-5 max-h-[34rem] max-w-[20rem]"
              />
            </div>
            <P>You can Load money to your wallet by using the Cash In option. The following are the available stores that are affiliated with CoinsPH.
            Choose where you will load money to your wallet.</P>
            <H3>Cash In</H3>
            <UL>
              <li>7-Eleven CLiQQ</li>
              <li>Bayad Center</li>
              <li>Cebuana Lhuillier</li>
              <li>GCash via DragonPay</li>
              <li>M Lhuillier ePay</li>
              <li>Palawan Express Pera Padala</li>
              <li>TouchPay</li>
              <li>UnionBank</li>
            </UL>
            <H3>Cash Out</H3>
            <P>Cashing out is processed through various banks. Here are a few choices to pick.</P>
            <UL>
              <li>GCash (Recommended)</li>
              <li>BPI</li>
              <li>Union Bank</li>
            </UL>
            <P>Now that your wallet has your desired cryptocurrency you are now able to make your transaction in the CoinsPH app.
            To be able to exchange your earned cryptocurrency, follow these following steps:</P>
            <H3>Steps in Selling your crypto</H3>
            {displaySteps("coinsphsell")}
            <P>Congrats! you can now check your wallet balance and be able to transfer it to your Gcash Account or use it to pay for the services that Coins PH can offer.</P>
            <P>Of course we can also do the opposite. If you want to exchange our local currency into any cryptocurrency you can follow the following steps:</P>
            <H3>Steps in Buying a crypto</H3>
            {displaySteps("coinsphbuy")}
          </div>
          <hr />
        </div>
        <div id="bybit">
          <H2>Bybit</H2>
          <P>ByBit is a cryptocurrency exchange known for its speed and focus on trading derivatives, particularly perpetual contracts. It offers leveraged trading, allowing users to control larger positions than their account balances. This makes it ideal for experienced traders looking for a fast, user-friendly platform with potential for higher returns and risks. However, it may not be suitable for beginners or those seeking a wider range of cryptocurrencies or a simple platform for buying and storing digital assets.</P>
          <H2>Home Page</H2>
          <Image
            src="/assets/InsightsAsset/bybit_homepage.png"
            alt="Bybit HomePage"
            width={1920}
            height={1080}
            className="max-h-full max-w-full"
          />
          <P>
            Like other exchange platform, ByBit requires a KYC verification in order to allow access to its features.
            <span className="text[#A519D7] font-semibold text-[#A519D7] underline">
              <a href="https://www.bybit.com/en/help-center/article/How-to-Complete-Individual-KYC-Verification">
                learn how to verify in ByBit here
              </a>
            </span>
          </P>
          <H2>Why choose ByBit</H2>
          <P>Bybit could be a good fit for experienced traders looking for an advanced platform with a focus on derivatives trading. 
          They offer high leverage, fast transaction speeds, and a good variety of popular cryptocurrencies. Less experienced users might find Bybit challenging due to its focus on margin trading and limited fiat support. 
          Additionally, some features and higher withdrawal limits are locked behind KYC verification.</P>
          <P>Although it might prove to be quite challenging for beginners, it can be beneficial to learn and improve in your knowledge in trading cryptocurrencies.
          Such challenges can be the diversity of fiat currency in the platform. In other words, it does not have direct exchange between cryptocurrencies into PHP currency.
          It is wise to consider ByBit with your trading experiences. Though that is why we will give you insights on how to exchange your cryptocurrencies in this platform.</P>
          <div>
            <H2>How to start with ByBit</H2>
            <P>
              After verifying your account you are now able to trade and exchange your cryptocurrencies, but before that here are quick tips that may help you.
            </P>
            <UL>
              <li>
                <b>Fund your account:</b>To begin trading, you must have cryptocurrency. Various cryptocurrencies, not fiat money (such Philippine Peso), are accepted as deposits on ByBit. To use ByBit, you must transfer cryptocurrency from another wallet or exchange.
              </li>
              <li>
                <b>Investigate the ByBit platform:</b> Become acquainted with the user interface and functionalities like as order kinds, fees, and margin requirements (if leverage is being used). They provide guidelines and tutorials to get you going.
              </li>
              <li><b>Think about your trading approach:</b>Choose the cryptocurrencies you wish to trade and if you plan to trade regularly (spot) or with leverage (derivatives). Recall that while leverage can boost prospective gains, it can also amplify potential losses.
              </li>
              <li>
                <b>Start small (optional):</b>
                Before taking on greater risks, it&apos;s advisable to begin with a little investment if you&apos;re new to cryptocurrency trading in order to gain familiarity with the platform and the market.
              </li>
            </UL>
            <H2>Fund your account (Deposit)</H2>
            <P>Funding your account is necessary, here are a few steps To deposit cryptocurrency into your account.</P>
            <P>1. After logging in, you will be redirected to this page. <b> Click Deposit </b></P>
            <Image
              src="/assets/InsightsAsset/bybit deposit1.png"
              alt="Bybit Deposit 1"
              width={1080}
              height={1920}
              className="max-h-[30rem] max-w-full"
            />
            <P>
              2. Follow the Instructions and a 
              <b> QR Code </b>
               will display, or copy and paste the
              <b> Coin address </b>
               coin address to your wallet that contains your chosen Coin
            </P>
            <Image
              src="/assets/InsightsAsset/bybit deposit2.png"
              alt="Bybit Deposit 2"
              width={1080}
              height={1920}
              className="max-h-[30rem] max-w-full"
            />
            <P>
              <i>
                <b>Note: </b>
                Fiat deposits are also available if you want to deposit USDT or other similar currency.
              </i>
            </P>
          </div>
          <div>
            <H2>Start your first trade</H2>
            <P>Now that you have sufficient funds, it is time to exchange them into your country&apos;s currency or to another cryptocurrency.
            ByBit provides two options: Trade and Convert.</P>
            <H3>Convert</H3>
            <Image
              src="/assets/InsightsAsset/bybit convert1.png"
              alt="Bybit Convert 1"
              width={1920}
              height={1080}
              className="max-h-full max-w-full"
            />
            <Image
              src="/assets/InsightsAsset/bybit convert2.png"
              alt="Bybit Convert 2"
              width={1920}
              height={1080}
              className="max-h-full max-w-full"
            />
            <P>Convert will typically exchange your cryptocurrency into fiat money or real currencies. This also has the benefit of minimal to no transaction fees.</P>
            <P>Trade on the other hand gives you the option to exchange directly to fiat money or to other type of cryptocurrency. Although we recommend the Trade feature as it has a slightly more profit than in Convert. Feel free to explore more about ByBit&apos;s Trade feature.</P>

            <H3>Trade</H3>
            <Image
              src="/assets/InsightsAsset/bybit trade1.png"
              alt="Bybit Trade 1"
              width={1920}
              height={1080}
              className="max-h-full max-w-full"
            />
            <Image
              src="/assets/InsightsAsset/bybit trade2.png"
              alt="Bybit Trade 2"
              width={1920}
              height={1080}
              className="max-h-full max-w-full"
            />
            <P>With the introduction out of the way you can now start exchange your cryptocurrency. We now will be using the Trade feature of Bybit. To guide you, consider the following steps accordingly:</P>
            <H3>How to buy your crypto</H3>
            {displaySteps("bybitbuy")}
            <H3> How to sell your crypto</H3>
            {displaySteps("bybitsell")}
          </div>
          <div>
            <H2>What&apos;s next?</H2>
            <P>Since bybit is an international exchanging platform it may become confusing as to how to convert your USD into PHP, therefore we will provide you tips on how to do so.</P>
            <UL>
              <li><b>Withdraw your crypto:</b>After selling your cryptocurrency on ByBit through perpetual contracts, you will end up with another cryptocurrency, typically USDT (Tether). 
              You will need to withdraw this USDT from ByBit to a platform that allows conversion to PHP.</li>
              <li><b>Transfer to a PHP-friendly platform:
              </b> Choose a cryptocurrency exchange platform in the Philippines that allows PHP trading, like PDAX or Coins.ph. 
              Send your USDT from ByBit to your chosen platform&apos;s USDT wallet address.</li>
              <li><b>Sell USDT for PHP:</b>Once your USDT arrives in your chosen platform&apos;s wallet, you can then sell it for PHP on their platform. 
              They will have options to initiate a PHP withdrawal which you can transfer to your Philippine bank account.</li>
            </UL>
            <P>
              <i><b>Important Note: </b>Remember, there might be fees associated with each step of this process, including withdrawal fees on ByBit and trading fees on the PHP platform.  
              Make sure to factor these in when planning your conversion.</i>
            </P>
          </div>
          <hr />
        </div>

        <div id="binance">
          <H2>Binance</H2>
          <P>A widely-known popular crypto exchanging platform that having 128+ Million users in the platform. It became popular due to an increase of public interest in the crypto space
            and therefore has become the iconic platform to turn your crypto into real currency.
            It is generally used in trading cryptocurrency and converting it to real currencies such as the US Dollars.
            It also provides a KYC system or also known as Know-Your-Customer which is used to verify users by uploading there ID&apos;s and personal information.
          </P>
          <H2>Home Page</H2>
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
          <H2>Why choose Binance</H2>
          <P>Because of Binance&apos;s high levels of liquidity, traders can purchase or sell assets with ease and little risk of large price swings. 
            This facilitates trader&apos;s ability to carry out their trading plans and meet their financial objectives. 
            Some of the lowest trading costs in the bitcoin market are also provided by Binance.
          </P>
          <H2>How to start with Binance</H2>
          <P>To begin using Binance, follow these steps:</P>
          <UL>
            <li><b>Create an Account: </b>Visit the Binance website or download the app, then fill out the registration form with your phone number or email address.</li>
            <li><b>Complete Verification: </b>Binance needs identity verification in order to access all functionalities. Typically, this is done by providing identification credentials, a facial verification, and basic information.</li>
            <li><b>Fund Your Account: </b>You can add money to your Binance account after it has been validated. Peer-to-peer (P2P) trading, bank transfers, and direct cryptocurrency purchases using debit or credit cards are just a few of the options available to you (not available in all locations).</li>
            <li><b>Start Trading: </b>You can investigate the exchange once you have money in your account. Binance provides a range of trading choices and cryptocurrencies. Before getting started, novices can use their resources to learn about cryptocurrency and trading.</li>
          </UL>
          <H2>Exchange your Crypto</H2>
          <P>After setting up your account, consider the following steps on the basic process of exchanging your crypto into fiat currency. This can also include the opposite wherein we can buy crypto using fiat money or basically real world currencies.</P>
          {displaySteps("binance")}
          <hr />
        </div>
      </>
      <div id="others">
        <H2>Other Central Exchanging Platforms</H2>
        <P>The following are websites and apps that you can consider checking out that can help you in exchanging your crypto into real money, and even other services such as trading.</P>
        <UL>
          <li><b>PDAX (Philippine Digital Asset Exchange): </b>is a regulated cryptocurrency exchange in the Philippines. It offers spot trading, margin trading, and over-the-counter (OTC) trading for various cryptocurrencies and PHP.</li>
          <li><b>Maya (formerly PayMaya): </b>is a popular e-wallet in the Philippines that also allows users to buy and sell cryptocurrencies. You can convert your crypto to PHP and withdraw it to your Maya account.</li>
          <li><b>UnionBank: </b>is a universal bank in the Philippines that offers cryptocurrency trading services through its subsidiary, UnionBank GlobalLinker. You can convert your crypto to PHP and withdraw it to your UnionBank account.</li>
          <li><b>Crypto.com: </b>popular exchange that offers a user-friendly interface and a variety of features, including its own cryptocurrency (CRO). Crypto.com is known for its competitive fees and mobile app.</li>
          <li><b>Kraken: </b>A large and established cryptocurrency exchange that offers a good selection of cryptocurrencies and a variety of features, including margin trading and staking. </li>
          <li><b>Coinbase:</b>One of the largest and most well-known cryptocurrency exchanges in the world. Coinbase is a great option for beginners because it has a user-friendly interface, offers a variety of educational resources, and allows users to buy crypto with fiat currency (like US dollars or Euros) using a variety of payment methods, including bank transfers, credit cards, and debit cards. However, Coinbase can have higher fees than some other exchanges.</li>
        </UL>
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
                    <b>Step {index + 1} </b>:{step}
                  </p>
                  <Image
                    src={site.images[index]}
                    alt={`pictureGuide ${index + 1}`}
                    width={200}
                    height={500}
                    style={{
                      minHeight: 500,
                      minWidth: 200,
                      maxHeight: 500,
                    }}
                    quality={80}
                    className="rounded-lg lg:w-[20rem]"
                  />
                </div>
              ))}
            </div>
          ),
      )}
    </div>
  );
}
