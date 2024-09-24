import { SimpleHashCollection } from "@/types/simple-hash";
import { SimpleHashContracts } from "@/types/simple-hash";
import { SimpleHashNFT, SimpleHashNFTByWallet } from "@/types/simple-hash/nft";

const baseURL = process.env.SIMPLEHASH_BASE_URL;
const apiKey = process.env.SIMPLEHASH_API_KEY;

type Chain =
  | "ethereum"
  | "ethereum-sepolia"
  | "polygon"
  | "solana"
  | "polygon-zkevm"
  | "polygon-mumbai"
  | "polygon-zkevm-testnet"
  | "polygon-amoy";

const chain: Chain = "ethereum-sepolia";

const get = async (endpoint: string) =>
  fetch(endpoint, {
    headers: {
      "X-API-KEY": apiKey,
    },
  });

export const getCollection = async (contractAddress: string) => {
  const response = await get(
    `${baseURL}/nfts/collections/${chain}/${contractAddress}?include_top_contract_details=1&limit=50`
  );
  const data = await response.json();
  return data as SimpleHashCollection;
};

export const getContractsByDeployer = async (walletAddress: string) => {
  const response = await get(
    `${baseURL}/contracts_by_deployer?chains=${chain}&wallet_addresses=${walletAddress}&limit=50`
  );
  const data = await response.json();
  return data as SimpleHashContracts;
};

export const getNFTByTokenId = async (contractAddress: string, tokenId: string) => {
  const response = await get(
    `${baseURL}/nfts/${chain}/${contractAddress}/${tokenId}`
  );
  const data = await response.json();
  return data as SimpleHashNFT;
}

export const getNFTsByWallet = async (walletAddress: string) => {
  const response = await get(
    `${baseURL}/nfts/owners?chains=${chain}&wallet_addresses=${walletAddress}&limit=50`
  );
  const data = await response.json();
  return data as SimpleHashNFTByWallet;
}

