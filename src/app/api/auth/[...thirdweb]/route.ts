import type { ThirdwebAuthUser } from "@thirdweb-dev/auth/next";
import { ThirdwebAuthAppRouter } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

import * as db from "@/lib/ctx"
import { ApiResponse, User } from "@/types/ctx.types";

/* 
  1. Validate nonce
  2. onLogin() - 
  3. onToken() -
  4. onUser() -
*/

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

  console.log("Validated nonce");
}

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthAppRouter({
  domain: "http://localhost:3000",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
  authOptions: {
    //Check in database or storage if nonce exists
    validateNonce: validateNonce,
  },
  callbacks: {
    onLogin: async (address: string) => {
      if(!await db.userExists(address)) {
        // IF no user exists, THEN create user
        await db.createUser({ address: address });
      }
      const user = await db.getUser(address);

      const session = {
        email: user.email,
        name: user.name,
        is_listed: user.is_listed,
        create_at: user.createdAt
      }
      
      return session
    },
    onToken(token) {
      return token;
    },
    onUser: async (user: ThirdwebAuthUser) => {
      
      return user;
    }
  },
});

export { ThirdwebAuthHandler as GET, ThirdwebAuthHandler as POST };
