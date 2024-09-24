import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export const sdk =
  ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY as string, "sepolia", {
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    secretKey: process.env.NEXT_PUBLIC_THIRDWEB_API_KEY,
  }) || undefined;