import React from "react";
import fire from "../../assets/gif/fire.gif";
import up from "../../assets/gif/up.gif";
import greed from "../../assets/gif/greed.gif";
import TrendingCard from "./TrendingCard";
import FearAndGreedCard from "./FearAndGreedCard";
import { getCoingeckoGlobalData } from "../../api/apiCoingecko";
import { roundTwoDecimalPlaces } from "../../api/currencyFunctions";
import { TbCaretUpFilled } from "react-icons/tb";
import { TbCaretDownFilled } from "react-icons/tb";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `font-bold text-3xl text-white`,
  flexCenter: `flex items-center`,
};

const Trending = async () => {
  try {
    const data = await getCoingeckoGlobalData();
    const percentageChange = data.data.market_cap_change_percentage_24h_usd;
    const totalMarketCapUSD = data.data.total_market_cap.usd;
    const formattedMarketCapUSD = (totalMarketCapUSD / 1e12).toFixed(3);

    return (
      <div className="text-white">
        <div className={styles.trendingWrapper}>
          <div className="flex justify-between">
            <h1 className={styles.h1}>
              Todays Cryptocurrency Prices by Market Cap
            </h1>
          </div>
          <br />
          <div className="flex ml-2 mt-1">
            <p>
              The Global Crypto Market Cap is ${formattedMarketCapUSD} Trillion,
              a &nbsp;{" "}
            </p>
            <span
              className={`flex gap-1 ${
                percentageChange < 0 ? "text-[#ff3a33]" : "text-green-400"
              }`}
            >
              {" "}
              {percentageChange < 0 ? (
                <TbCaretDownFilled />
              ) : (
                <TbCaretUpFilled />
              )}
              {roundTwoDecimalPlaces(percentageChange)} %
            </span>
            <p> &nbsp; decrease over the last day.</p>
          </div>
          <br />
          <div className={styles.flexCenter}>
            <TrendingCard title="Trending Coins (24h)" icon={fire} type="coins"/>
            <TrendingCard title="Top NFTs (24h)" icon={up} type="nfts" />
            <FearAndGreedCard title="Fear and Greed Index" icon={greed} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching global data:", error);
    // You can handle the error or render an error message here
    return <div>Error fetching data</div>;
  }
};

export default Trending;
