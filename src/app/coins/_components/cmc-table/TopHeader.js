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
    0
  );
  const formatVolume = (formattedVolume / 1e12).toFixed(3);
  const totalMarketCapUSD = data.data.total_market_cap.usd;
  const formattedMarketCapUSD = (totalMarketCapUSD / 1e12).toFixed(3);
  const btcDominance = data.data.market_cap_percentage.btc;
  const formattedBTC = Number(btcDominance.toFixed(1));
  const ethDominance = data.data.market_cap_percentage.eth;
  const formattedETH = Number(ethDominance.toFixed(1));

  return (
    <div className="border-bottom py-3 px-5 ml-12">
    <span className="d-inline-block mr-3">
      <b>Coins: </b>
      <span className="text-info">{activeCryptos}</span>
    </span>
    <span className="d-inline-block mr-3">
      <b>Exchanges: </b>
      <span className="text-info">{activeMarkets}</span>
    </span>
    <span className="d-inline-block mr-3">
      <b>Market Cap: </b>
      <span className="text-info">
      ${formattedMarketCapUSD}
      </span>
      <span>
      T
      </span>
    </span>
    <span className="d-inline-block mr-3">
      <b>24h Vol: </b>
      <span className="text-info">
      ${formatVolume}
      </span>
    </span>
    <span className="d-inline-block mr-3">
      <b>Dominance: </b>
      <span>
        BTC <b className='font-bold'>{formattedBTC}%</b> ETH <b className='font-bold'>{formattedETH}%</b>
      </span>
    </span>
    <span className="d-inline-block mr-3">
      <b className="mr-1">
      <i className="d-inline-block mr-1" />
      <span>Gas Fee:</span>
      </b>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{gasData.result.ProposeGasPrice} GWEI</TooltipTrigger>
          <TooltipContent side='bottom'>
          <p>Fast: {gasData.result.FastGasPrice} GWEI</p>
          <p>Standard: {gasData.result.ProposeGasPrice} GWEI</p>
          <p>Safe: {gasData.result.SafeGasPrice} GWEI</p>
          <p>Base Fee: {gasData.result.suggestBaseFee}</p>
          </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </span>
    
  </div>
  );
};

export default TopHeader;
