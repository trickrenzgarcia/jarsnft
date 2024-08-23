import { getCoingeckoGlobalData, getGasFee } from "../../api/apiCoingecko";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TopHeader = async () => {
  const data = await getCoingeckoGlobalData();
  const gasData = await getGasFee();
  const activeCryptos = data.data.active_cryptocurrencies;
  const activeMarkets = data.data.markets;
  const volume24h = data.data.total_volume;
  const formattedVolume = Object.values(volume24h).reduce(
    (acc, value) => acc + value,
    0,
  );
  const formatVolume = (formattedVolume / 1e12).toFixed(3);
  const totalMarketCapUSD = data.data.total_market_cap.usd;
  const formattedMarketCapUSD = (totalMarketCapUSD / 1e12).toFixed(3);
  const btcDominance = data.data.market_cap_percentage.btc;
  const formattedBTC = Number(btcDominance.toFixed(1));
  const ethDominance = data.data.market_cap_percentage.eth;
  const formattedETH = Number(ethDominance.toFixed(1));
  const styles = {
    h2: "text-lg font-bold"
  };
  return (
    <div className="my-4 flex flex-wrap justify-center gap-5">
      <p>
        <span className={styles.h2}>{`Coins: `}</span> {`${activeCryptos}`}
      </p>
      <p>
        <span className={styles.h2}>{`Exchanges: `}</span> {` ${activeMarkets}`}
      </p>
      <p>
        <span className={styles.h2}>{`Market Cap: `}</span>{" "}
        {`${formattedMarketCapUSD}T`}
      </p>
      <p>
        <span className={styles.h2}>{`24h Vol: `}</span> {`${formatVolume}`}
      </p>
      <p>
        <span className={styles.h2}>{`Dominance: BTC `}</span>{" "}
        {`${formattedBTC}% | ETH ${formattedETH}%`}
      </p>
      <span>
        <span className={styles.h2}>{`Gas Fee: `}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {gasData.result.ProposeGasPrice} GWEI
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Fast: {gasData.result.FastGasPrice} GWEI</p>
              <p>Standard: {gasData.result.ProposeGasPrice} GWEI</p>
              <p>Safe: {gasData.result.SafeGasPrice} GWEI</p>
              <p>Base Fee: {gasData.result.suggestBaseFee} GWEI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </span>
    </div>
  );
};

export default TopHeader;
