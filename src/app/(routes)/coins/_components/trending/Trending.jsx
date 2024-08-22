import React from "react";
import fire from "../../assets/gif/fire.gif";
import up from "../../assets/gif/up.gif";
import greed from "../../assets/gif/greed.gif";
import { TrendingCard, FearAndGreedCard } from ".";
// import TrendingCard from "./TrendingCard";
// import FearAndGreedCard from "./FearAndGreedCard";
import { getCoingeckoGlobalData } from "../../api/apiCoingecko";
import { roundTwoDecimalPlaces } from "../../api/currencyFunctions";
import { TbCaretUpFilled } from "react-icons/tb";
import { TbCaretDownFilled } from "react-icons/tb";

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `font-bold text-3xl`,
  flexCenter: `hidden xl:flex items-center gap-5`,
};

const Trending = async () => {
  try {
    const data = await getCoingeckoGlobalData();
    const percentageChange = data.data.market_cap_change_percentage_24h_usd;
    const totalMarketCapUSD = data.data.total_market_cap.usd;
    const formattedMarketCapUSD = (totalMarketCapUSD / 1e12).toFixed(3);

    return (
      <div
        className={`${styles.trendingWrapper} mt-5 border-y-2 border-[#a5a5a580] py-6 dark:border-[#6e6e6e69] xl:my-5`}
      >
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Todays Cryptocurrency Prices by Market Cap
          </h1>
        </div>
        <br />
        <div className="flex items-center">
          <p>
            The Global Crypto Market Cap is ${formattedMarketCapUSD} Trillion, a
          </p>
          <span
            className={`flex gap-1 ${percentageChange < 0 ? "text-red-500" : "text-green-500"}`}
          >
            {percentageChange < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />}
            {roundTwoDecimalPlaces(percentageChange)} %&nbsp;
          </span>
          <p className="gap-1">
            {percentageChange < 0 ? "decrease" : "increase"} over the last day.
          </p>
        </div>
        <br />
        <div className={styles.flexCenter} style={{ height: "max-content" }}>
          <TrendingCard title="Trending Coins (24h)" icon={fire} type="coins" />
          <TrendingCard title="Top NFTs (24h)" icon={up} type="nfts" />
          <FearAndGreedCard title="Fear and Greed Index" icon={greed} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching global data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Trending;
