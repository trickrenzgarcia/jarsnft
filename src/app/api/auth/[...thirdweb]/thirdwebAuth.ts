import {
  ThirdwebAuthAppRouter,
  ThirdwebAuthUser,
} from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { jars } from "@/lib/core/api";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthAppRouter({
  domain: "http://localhost:3000",
  wallet: new PrivateKeyWallet(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY as string,
    "sepolia",
  ),
  authOptions: {
    //Check in database or storage if nonce exists
    // validateNonce: async (nonce: string) => {
    //   await jars.saveNonce(nonce);
    // },
    tokenDurationInSeconds: 60 * 60 * 24 * 3, // 3 days
    refreshIntervalInSeconds: 60 * 60 * 3, // 3 hour
  },
  callbacks: {
    onLogin: async (address: string) => {
      const isUser = await jars.isUserExists(address);
      if (!isUser) {
        await jars.createUser(address);
      }

      const user = await jars.getUser(address);

      const session = {
        email: user.email,
        name: user.name,
        is_listed: user.is_listed,
        role: user.role,
        create_at: user.created_at,
      };

      return session;
    },
    onUser: async (user: ThirdwebAuthUser<any, { is_listed: boolean }>) => {
      const apiUser = await jars.getUser(user.address);
      const rewriteUser = {
        ...user,
        session: { ...user.session, is_listed: apiUser.is_listed },
      };

      return rewriteUser;
    },
  },
});
