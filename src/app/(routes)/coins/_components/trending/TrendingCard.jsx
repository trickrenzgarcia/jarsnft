import Image from "next/image";
import TrendingCardRow from "./TrendingCardRow";
import { getNftMarketCap, getTrendingCoins } from "../../api/apiCoingecko";

const styles = {
  trendingCard: `w-full p-6 dark:bg-[#1C1C1C] bg-[#CED4DA] rounded-xl flex flex-col`,
};

const TrendingCard = async ({ title, icon, type }) => {
  const data = type === "coins" ? await getTrendingCoins() : await getNftMarketCap();
  return (
    <div className={styles.trendingCard}>
      <div className="flex flex-row items-center justify-center gap-4">
        {icon && <Image src={icon} width={40} height={40} alt="image" />}
        <p className="text-lg font-bold">{title}</p>
      </div>
      {type === "coins"
        ? data.map((coin, index) => {
            return (
              <TrendingCardRow
                key={index}
                number={coin.item.data.price}
                symbol={coin.item.symbol}
                name={coin.item.name}
                icon={coin.item.large}
                sparklines={coin.item.data.sparkline}
                percentChange={coin.item.data.price_change_percentage_24h.usd}
              />
            );
          })
        : data.map((nft, index) => {
            return (
              <TrendingCardRow
                key={index}
                number={nft.data.floor_price}
                name={nft.name}
                symbol={nft.symbol}
                icon={nft.thumb}
                sparklines={nft.data.sparkline}
                percentChange={nft.data.floor_price_in_usd_24h_percentage_change}
              />
            );
          })}
    </div>
  );
};

export default TrendingCard;
