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
      <h2 className={styles.base}>{`Coins: ${activeCryptos}`}</h2>
      <h2 className={styles.base}>{`Exchanges: ${activeExchanges}`}</h2>
      <h2 className={styles.base}>{`Market Cap: ${marketCap}`}T</h2>
      <h2 className={styles.base}>{`24h Vol: ${formattedVolume}`}B</h2>
      <h2 className={styles.base}>{`Dominance: BTC ${btcDominance}% | ETH ${ethDominance}%`}</h2>

      <h2 className={styles.base}>Gas Fee:</h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className={styles.base}>{gasData.result.ProposeGasPrice} Gwei</TooltipTrigger>
          <TooltipContent side="bottom">
            <h2 className={styles.base}>Fast: {gasData.result.FastGasPrice} Gwei</h2>
            <h2 className={styles.base}>Standard: {gasData.result.ProposeGasPrice} Gwei</h2>
            <h2 className={styles.base}>Safe: {gasData.result.SafeGasPrice} Gwei</h2>
            <h2 className={styles.base}>Base Fee: {gasData.result.suggestBaseFee} Gwei</h2>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TopHeader;
