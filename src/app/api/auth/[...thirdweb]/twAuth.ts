import {
  ThirdwebAuthAppRouter,
  ThirdwebAuthUser,
} from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm"
import jars from "@/lib/api";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthAppRouter({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN!,
  wallet: new PrivateKeyWallet(process.env.AUTH_PRIVATE_KEY as string, "sepolia"),
  authOptions: {
    tokenDurationInSeconds: 60 * 60 * 24 * 7,
    loginPayloadDurationInSeconds: 60 * 60 * 24 * 7,
    refreshIntervalInSeconds: 60 * 60 * 24 * 7,
  },
  callbacks: {
    onLogin: async (address: string) => {
      const isUser = await jars.isUserExists(address);

      if(!isUser) {
        await jars.createUser(address);
      }

      const user = await jars.getUser(address);

      const session = {
        uid: user.uid,
        email: user.email,
        name: user.name,
        isListed: user.isListed,
        role: user.role,
        createdAt: user.createdAt,
      }

      return session
    },
    onUser: async (user: ThirdwebAuthUser<any, { isListed: number }>) => {
      const dbUser = await jars.getUser(user.address);

      const rewriteUser = {
        ...user,
        session: { ...user.session, isListed: dbUser.isListed }
      }

      return rewriteUser;
    }
  }
})