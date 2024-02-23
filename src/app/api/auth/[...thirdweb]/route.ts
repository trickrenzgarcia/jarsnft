import type { ThirdwebAuthUser } from "@thirdweb-dev/auth/next";

import { ThirdwebAuthAppRouter } from "@thirdweb-dev/auth/next";
import { authSession } from "@thirdweb-dev/auth/next-auth";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthAppRouter({
  domain: "http://localhost:3000",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
  authOptions: {
    // Check in database or storage if nonce exists
    validateNonce: async (nonce: string) => {
      const response = await fetch("http://localhost:5000/nonce/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nonce: nonce }),
      });
      const { isExists } = await response.json();
      if (isExists) {
        throw new Error("Nonce has already been used!");
      }

      await fetch("http://localhost:5000/nonce/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nonce: nonce }),
      });
    },
  },
  callbacks: {
    onUser: async (user: ThirdwebAuthUser) => {
      console.log(user, "from api route callbacks: onUser(user) => onUser");

      return user;
    },
    onLogin: (address: string) => {
      console.log(address);

      const session = {
        address: address,
        permissions: ["admin"],
      };

      return session;
    },
    onLogout: async (user) => {
      console.log("user Logout", user);
      return null;
    },
  },
});

export { ThirdwebAuthHandler as GET, ThirdwebAuthHandler as POST };
