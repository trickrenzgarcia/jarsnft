
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      APP_URL: string;
      LOCAL_URL: string;
      BACKEND_URL: string;
      THIRDWEB_CLIENT_ID: string;
      THIRDWEB_API_KEY: string;
      PRIVATE_KEY: string;
      JWT_SECRET: string;
      JWT_TOKEN: string;
      DATABASE_URL: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_NAME: string;
      DB_PASS: string;
      NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN: string;
      NEXT_PUBLIC_THIRDWEB_CLIENT_ID: string;
      NEXT_PUBLIC_THIRDWEB_API_KEY: string;
      PRIVATE_KEY: string;
      AUTH_PRIVATE_KEY: string | undefined;
      NFTMARKETPLACE_JARS_CONTRACT: string;
      SIMPLEHASH_BASE_URL: string;
      SIMPLEHASH_API_KEY: string;
      SEPOLIA_ALCHEMY_API_KEY: string;
      SEPOLIA_ALCHEMY_BASE_URL: string;
      SEPOLIA_ALCHEMY_WEBSOCKET: string;
      SUPABASE_URL: string;
      SUPABASE_API_KEY: string;
    }
  }
  interface BigInt {
    toJSON(): Number;
  }
}

export {}