import { Alchemy, AlchemySettings, Network, NftFilters } from "alchemy-sdk";

const config: AlchemySettings = {
  apiKey: process.env.POLYGON_ALCHEMY_API_KEY,
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(config);

export default alchemy;
