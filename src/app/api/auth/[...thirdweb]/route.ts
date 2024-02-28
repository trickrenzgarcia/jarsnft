import type { ThirdwebAuthUser } from "@thirdweb-dev/auth/next";
import { ThirdwebAuthAppRouter } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

import * as db from "@/lib/ctx"
import { ApiResponse, User } from "@/types/ctx.types";

async function validateNonce(nonce: string) {
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

}

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthAppRouter({
  domain: "http://localhost:3000",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
  authOptions: {
    //Check in database or storage if nonce exists
    validateNonce: validateNonce,
  },
  callbacks: {
    onUser: async (user: ThirdwebAuthUser) => {
      console.log(user, "from api route callbacks: onUser(user) => onUser");

      return user;
    },
    onLogin: async (address: string) => {
      if(!await db.userExists(address)) {
        // IF no user exists, THEN create user
        await db.createUser({ address: address });
      }

      const user: any = await db.getUser(address);
      
      const session = {
        address: address,
        user: user.data
      };

      return session;
    },
  },
});

export { ThirdwebAuthHandler as GET, ThirdwebAuthHandler as POST };
