import { BigNumber } from "ethers";

export type Transaction = {
  address: string;
  blockHash: string;
  blockNumber: number;
  data: string;
  event: string;
  eventSignature: string;
  logIndex: number;
  removed: boolean;
  topics: string[];
  transactionHash: string;
  trasactionIndex: number;
}

export type NewBid = {
  data: DataNewBid;
  eventName: string;
  transaction: Transaction;
}

export type DataNewBid = {
  assetContract: string;
  auction: DataNewBidAuction;
  auctionId: BigNumber;
  bidAmount: BigNumber;
  bidder: string;
}

export type DataNewBidAuction = {
  assetContract: string;
  auctionCreator: string;
  auctionId: BigNumber;
  buyoutBidAmount: BigNumber;
  currency: string;
  endTimestamp: BigNumber;
  minimumBidAmount: BigNumber;
  quantity: BigNumber;
  startTimestamp: BigNumber;
  status: number;
  timeBufferInSeconds: BigNumber;
  tokenId: BigNumber;
  tokenType: number;
}