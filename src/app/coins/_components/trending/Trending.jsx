import React from "react";
import flame from "/public/flame.svg";
import rocket from "/public/rocket.svg";
import dollar from "/public/dollar.svg";
import { TrendingCard, FearAndGreedCard } from ".";
import { getCoingeckoGlobalData } from "../../api/apiCoingecko";
import { roundTwoDecimalPlaces } from "../../api/currencyFunctions";
import { TbCaretUpFilled } from "react-icons/tb";
import { TbCaretDownFilled } from "react-icons/tb";

const Trending = async () => {
  try {
    let data = await getCoingeckoGlobalData();
    let percentChange = data.data.market_cap_change_percentage_24h_usd;
    let usdCap = (data.data.total_market_cap.usd / 1e12).toFixed(3);
    const icon = percentChange < 0 ? <TbCaretDownFilled /> : <TbCaretUpFilled />;
    const result = percentChange < 0 ? "decrease" : "increase";
    const resultColor = percentChange < 0 ? "#DC143C" : "#2eff00";

    return (
      <>
        <div className="my-4 flex flex-1 flex-col gap-4">
          <div className="text-sm font-bold lg:text-4xl">Todays Cryptocurrency Prices by Market Cap</div>
          <div className="flex items-center gap-1 text-sm font-semibold lg:text-3xl">
            {`The Global Crypto Market Cap is ${usdCap}T,`} <span style={{ color: resultColor }}>{icon}</span>
            <span style={{ color: resultColor }}>{`a ${roundTwoDecimalPlaces(percentChange)}% ${result}`}</span> over the last day.
          </div>
        </div>

        <div className="flex-1 items-center gap-5 lg:flex">
          <TrendingCard title="Trending Coins (24h)" icon={flame} type="coins" />
          <TrendingCard title="Top NFTs (24h)" icon={rocket} type="nfts" />
          <FearAndGreedCard title="Fear and Greed Index" icon={dollar} />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching global data:", error);
    return <div>Error fetching data</div>;
  }
};

export default Trending;
