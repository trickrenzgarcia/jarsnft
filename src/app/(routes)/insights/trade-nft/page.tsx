import Image from "next/image";
import { P } from "../_components/TailwindTags";

export default function TradeNftPage() {
  return (
    <section>
      <div id="summary">
        <h1 className="my-4 text-4xl font-bold md:text-5xl">
          How to Trade your NFTs
        </h1>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Purchase or Sell you first NFT!`}</h3>
        <P>{`Buying or Selling NFTs is a vital knowledge that every beginner must have. In this article we will guide you on how to trade your NFTs in JARS NFT.`}</P>
      </div>
      <div id="buying">
        <h2 className="my-6 text-3xl font-bold">How to Buy</h2>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Step 1: Select your desired NFT`}</h3>
        <P>
          {`The first thing in buying an NFT is to choose what kind of NFT you want to buy. There are many factors to consider when buying an NFT. As such, you can read more of it here in `}
          <span className="font-semibold text-[#A519D7] underline">
            <a href="/insights/what-makes-nft-valuable">
              What makes an NFT Valuable?
            </a>
          </span>
        </P>
        <P>{`After selecting your desired NFT, you will be greeted by a similar page just like this:`}</P>
        <Image
          src="/assets/InsightsAsset/TradeNFT/JARS Buy 1.png"
          width={1920}
          height={1080}
          alt="Coinbase Download Extension"
          className="mb-2 max-h-[50%] max-w-full "
        />
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Step 2: Confirm Transaction`}</h3>
        <P>{` Click on 'Confirm and Pay' and after a while your metamask will prompt you to confirm the transaction.`}</P>
        <Image
          src="/assets/InsightsAsset/TradeNFT/JARS Buy 2.png"
          width={1920}
          height={1080}
          alt="Coinbase Download Extension"
          className="mb-6 max-h-[50%] max-w-full "
        />
        <P>
          {` After all is done you can view your acquired NFT in your profile page. Or you can also `}
          <span className="font-semibold text-[#A519D7] underline">
            <a href="/me">View Profile Here</a>
          </span>
          .
        </P>
      </div>
      <div id="selling">
        <h2 className="my-6 text-3xl font-bold">How to Sell</h2>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Step 1: Go to your Profile Page`}</h3>
        <P>{`Selling an NFT means that you already own one. In your profile page where you can view your owned NFTs, this is where you can also choose what NFTs you want to sell.`}</P>
        <Image
          src="/assets/InsightsAsset/TradeNFT/JARS Sell 1.png"
          width={1920}
          height={1080}
          alt="Coinbase Download Extension"
          className="mb-6 max-h-[50%] max-w-full "
        />
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Step 2: Choose an NFT You Want to Sell`}</h3>
        <P>
          {`After choosing which NFT you want to sell you will be redirected to this page and. Select sell and then you will be given a choice `}
          <span className="font-bold">Directing Listing</span>
          {" and "}
          <span className="font-bold">Auction</span>.
        </P>
        <Image
          src="/assets/InsightsAsset/TradeNFT/JARS Sell 2.png"
          width={1920}
          height={1080}
          alt="Coinbase Download Extension"
          className="mb-6 max-h-[30%] max-w-full "
        />
        <P>{`For Direct Listing you only have to set a date on when the listing ends and Price of your NFT. `}</P>
        <P>{`For Auction you will also set the date for when the listing ends, while also setting up the starting bid and the buyout price of your NFT.`}</P>
        <div className="flex flex-col lg:flex-row justify-center gap-5">
          <Image
            src="/assets/InsightsAsset/TradeNFT/JARS Sell 3.png"
            width={1920}
            height={1080}
            alt="Coinbase Download Extension"
            className="mb-6 max-h-full max-w-[20rem] border-1 border-[#A519D7]"
          />
          <Image
            src="/assets/InsightsAsset/TradeNFT/JARS Sell 3 Auction.png"
            width={1920}
            height={1080}
            alt="Coinbase Download Extension"
            className="mb-6 max-h-full max-w-[20rem] border-1 border-[#A519D7]"
          />
        </div>
        <h3 className="my-6 text-xl font-bold tracking-wider">{`Step 3: Wait and Finish`}</h3>
        <P>{`Once your listing has been processed, you will only have to wait until another creator takes interest in your NFT and buys it for themselves.`}</P>
        <Image
          src="/assets/InsightsAsset/TradeNFT/JARS Sell 4.png"
          width={1920}
          height={1080}
          alt="Coinbase Download Extension"
          className="mb-6 max-h-[50%] max-w-full "
        />
      </div>
    </section>
  );
}
