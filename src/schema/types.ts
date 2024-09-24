export type ContractMetadata = {
  app_uri?: string;
  name: string;
  description: string;
  image?: string;
  external_link?: string;
  seller_fee_basis_points?: number;
  fee_recipient?: string;
  symbol: string;
  platform_fee_basis_points?: number;
  platform_fee_recipient?: string;
  primary_sale_recipient?: string;
  trusted_forwarders?: string;
}