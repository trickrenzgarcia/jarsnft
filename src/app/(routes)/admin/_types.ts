import { BigNumber } from "ethers";

export type Transaction = {
  eventName: string;
  data: any;
  transaction: {
    blockNumber: number;
    blockHash: string;
    transactionIndex: number;
    removed: boolean;
    address: string;
    data: string;
    topics: string[];
    transactionHash: string;
    logIndex: number;
    event: string;
    eventSignature: string;
  }[]
}

export type TransactionData = {
  totalTransactionsCount: number;
  listingCount: number;
  transactions: Transaction[];
}

export type Sales = {
  eventName: string;
  data: {
    listingCreator: string;
    listingId: BigNumber;
    assetContract: string;
    tokenId: BigNumber;
    buyer: string;
    quantityBought: BigNumber;
    totalPricePaid: BigNumber;
  };
  transaction: {
    blockNumber: number;
    blockHash: string;
    transactionIndex: number;
    removed: boolean;
    address: string;
    data: string;
    topics: string[];
    transactionHash: string;
    logIndex: number;
    event: string;
    eventSignature: string;
  }[]
}

export type SalesData = {
  totalSalesPrice: number;
  totalSalesCount: number;
  totalMarketplaceFee: number;
  sales: Sales[];
}