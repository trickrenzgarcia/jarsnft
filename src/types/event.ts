export type ContractEvent = {
  address: string;
  topics: string[];
  data: string;
  blockNumber: number;
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  logIndex: number;
  removed: boolean;
};

export type BaseEventArgs = {
  assetContract: string;
  tokenId: number | BigInt;
};

export type NewSaleEventArgs = BaseEventArgs & {
  listingCreator: string;
  listingId: number;
  buyer: string;
  quantityBought: number;
  totalPricePaid: string | number | BigInt;
}

export type NewListingEventArgs = BaseEventArgs & {
  listingCreator: string;
  listingId: number;
  listing: {
    listingId: number;
    tokenId: number | BigInt;
    quantity: number;
    pricePerToken: string | number | BigInt;
    startTimestamp: number;
    endTimestamp: number;
    listingCreator: string;
    assetContract: string;
    currency: string;
    tokenType: number;
    status: number;
    reserved: boolean;
  }
}

export type NewAuctionEventArgs = BaseEventArgs & {
  auctionCreator: string;
  auctionId: number;
  auction: {
    auctionId: number;
    tokenId: number | BigInt;
    quantity: number;
    minimumBidAmount: number;
    buyoutBidAmount: number;
    timeBufferInSeconds: number;
    bidBufferBps: number;
    startTimestamp: number;
    endTimestamp: number;
    auctionCreator: string;
    assetContract: string;
    currency: string;
    tokenType: number;
    status: number;
  }
}

export type NewBidEventArgs = BaseEventArgs & {
  auctionId: number;
  bidder: string;
  bidAmount: number;
  auction: NewAuctionEventArgs['auction']
}

export type NewSaleEvent = ContractEvent & {
  eventName: "NewSale";
  args: NewSaleEventArgs;
}

export type NewListingEvent = ContractEvent & {
  eventName: "NewListing";
  args: NewListingEventArgs;
}

export type NewAuctionEvent = ContractEvent & {
  eventName: "NewAuction";
  args: NewAuctionEventArgs;
}

export type NewBidEvent = ContractEvent & {
  eventName: "NewBid";
  args: NewBidEventArgs;
}

