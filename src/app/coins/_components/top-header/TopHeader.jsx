import { getCoingeckoGlobalData, getGasFee } from "../../api/apiCoingecko";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TopHeader = async () => {
  let [data, gasData] = await Promise.all([getCoingeckoGlobalData(), getGasFee()]);

  let {
    active_cryptocurrencies: activeCryptos,
    markets: activeExchanges,
    total_market_cap: { usd: marketCapUSD },
    total_volume: totalVolume,
    market_cap_percentage: { btc, eth },
  } = data.data;

  let marketCap = (marketCapUSD / 1e12).toFixed(3);
  let formattedVolume = (Object.values(totalVolume).reduce((acc, value) => acc + value, 0) / 1e12).toFixed(3);
  let btcDominance = Number(btc.toFixed(1));
  let ethDominance = Number(eth.toFixed(1));

  const styles = {
    base: "text-md lg:text-lg font-semibold",
  };

  return (
    <div className="my-6 flex flex-wrap justify-center gap-5">
      <h2 className={styles.base}>Coins: <span className="text-gray-400">{activeCryptos}</span></h2>
      <h2 className={styles.base}>Exchanges: <span className="text-gray-400">{activeExchanges}</span></h2>
      <h2 className={styles.base}>Market Cap: <span className="text-gray-400">{marketCap}T</span></h2>
      <h2 className={styles.base}>24h Vol: <span className="text-gray-400">{formattedVolume}B</span></h2>
      <h2 className={styles.base}>Dominance: BTC <span className="text-gray-400">{btcDominance}%</span> | ETH <span className="text-gray-400">{ethDominance}%</span></h2>

      <h2 className={styles.base}>Gas Fee:</h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className={styles.base}>{gasData.result.ProposeGasPrice} Gwei</TooltipTrigger>
          <TooltipContent side="bottom">
          <h2 className={styles.base}>Fast: <span className="text-gray-400">{gasData.result.FastGasPrice} Gwei</span></h2>
          <h2 className={styles.base}>Standard: <span className="text-gray-400">{gasData.result.ProposeGasPrice} Gwei</span></h2>
          <h2 className={styles.base}>Safe: <span className="text-gray-400">{gasData.result.SafeGasPrice} Gwei</span> </h2>
          <h2 className={styles.base}>Base Fee: <span className="text-gray-400">{gasData.result.suggestBaseFee} Gwei</span> </h2>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TopHeader;
