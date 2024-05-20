declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL: string;
      NEXT_PUBLIC_LOCAL_URL: string;
      NEXT_PUBLIC_AUTH_SECRET: string;
      NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN: string;
      NEXT_PUBLIC_JWT_AUTH_TOKEN: string;
      THIRDWEB_CLIENT_ID: string;
      THIRDWEB_API_KEY: string;
      THIRDWEB_AUTH_PRIVATE_KEY: string;
      PRIVATE_KEY: string;
      NEXT_PUBLIC_THIRDWEB_CLIENT_ID: string;
      NEXT_PUBLIC_THIRDWEB_API_KEY: string;
      NEXT_PUBLIC_BACKEND_URL: string;
      JWT_AUTH_TOKEN: string;
      NFTMARKETPLACE_JARS_CONTRACT: string;
    }
  }
}

export {};
