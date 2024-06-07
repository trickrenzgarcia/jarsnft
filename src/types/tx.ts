export type TxResult = {
  id:      ID;
  receipt: Receipt;
}

export interface ID {
  type: string;
  hex:  string;
}

export interface Receipt {
  to:                string;
  from:              string;
  contractAddress:   null;
  transactionIndex:  number;
  gasUsed:           ID;
  logsBloom:         string;
  blockHash:         string;
  transactionHash:   string;
  logs:              Log[];
  blockNumber:       number;
  confirmations:     number;
  cumulativeGasUsed: ID;
  effectiveGasPrice: ID;
  status:            number;
  type:              number;
  byzantium:         boolean;
  events:            Event[];
}

export interface Event {
  transactionIndex: number;
  blockNumber:      number;
  transactionHash:  string;
  address:          string;
  topics:           string[];
  data:             string;
  logIndex:         number;
  blockHash:        string;
  args:             Array<ID | string>;
  event:            string;
  eventSignature:   string;
}

export interface Log {
  transactionIndex: number;
  blockNumber:      number;
  transactionHash:  string;
  address:          string;
  topics:           string[];
  data:             string;
  logIndex:         number;
  blockHash:        string;
}