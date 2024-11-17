declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_APP_URL: string;
      APP_URL: string;
      API_URL: string;
      PLATFORM_ADDRESS: string;
      JWT_SECRET: string;
      JWT_TOKEN: string;
      DATABASE_URL: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_PASS: string;
      CHAIN: string;
      CHAIN_ID: number;

      NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN: string;
      NEXT_PUBLIC_THIRDWEB_CLIENT_ID: string;
      NEXT_PUBLIC_THIRDWEB_API_KEY: string;
      THIRDWEB_API_KEY: string;
      PRIVATE_KEY: string;
      AUTH_PRIVATE_KEY: string;
      NEXT_PUBLIC_PLATFORM_ADDRESS: string;
      NEXT_PUBLIC_IPFS_GATEWAY: string;

      INFURA_API_PUBLIC_KEY: string;
      INFURA_API_SECRET_KEY: string;
      INFURA_JSON_RPC_HTTPS: string;
      ALCHEMY_SECRET_KEY: string;

      SIMPLEHASH_BASE_URL: string;
      SIMPLEHASH_API_KEY: string;

      POLYGON_ALCHEMY_API_KEY: string;
      POLYGON_ALCHEMY_BASE_URL: string;
      POLYGON_ALCHEMY_WEBSOCKET: string;

      SUPABASE_URL: string;
      SUPABASE_API_KEY: string;

      REPLICATE_API_KEY: string;

      ETHERSCAN_API_KEY: string;

      NEXT_PUBLIC_CG_API_KEY: string;

      RESEND_API_KEY: string;

      NEXT_PUBLIC_GEMINI_API_KEY: string;
    }
  }
  interface BigInt {
    toJSON(): Number;
  }
}

export {};
