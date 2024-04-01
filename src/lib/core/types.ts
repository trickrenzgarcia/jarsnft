export type User = {
  id: number;
  uid: string;
  address: string;
  name: string;
  email: string;
  is_listed: boolean;
  createdAt: string;
};

export type NFTCollection = {
  contract: string;
  image: string;
  name: string;
  symbol: string;
  description: string;
  app_uri: string;
  external_link: string;
  fee_recipient: string;
  seller_fee_basis_points: number;
  primary_sale_recipient: string;
  trusted_forwarders: string[];
  created_at: string;
};
