import { Alchemy, AlchemySettings, Network, NftFilters } from "alchemy-sdk";

const config: AlchemySettings = {
  apiKey: process.env.SEPOLIA_ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(config);

export default alchemy;
