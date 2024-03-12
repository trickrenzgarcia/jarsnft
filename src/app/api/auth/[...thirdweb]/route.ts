import type { ThirdwebAuthUser } from "@thirdweb-dev/auth/next";
import { ThirdwebAuthAppRouter } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

import { jars } from "@/lib/core/api";

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
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY as string, "sepolia"),
  authOptions: {
    //Check in database or storage if nonce exists
    //validateNonce: validateNonce,
  },
  callbacks: {
    onLogin: async (address: string) => {
      if(!await jars.isUserExists(address)) {
        await jars.createUser(address);
        
      }
      
      const { name, email, is_listed, created_at } = await jars.getUser(address);
      console.log("Error", name, email, is_listed)
      const session = {
        email: email,
        name: name,
        is_listed: is_listed,
        create_at: created_at,
      }
      return session
    },
    onToken(token) {
      console.log(token)
      return token;
    },
    onUser: async (user: ThirdwebAuthUser<any, { is_listed: boolean }>) => {
      console.log(user)
      const apiUser = await jars.getUser(user.address);
      return {...user, session: { ...user.session, is_listed: apiUser.is_listed }}
    },
  },
});

export { ThirdwebAuthHandler as GET, ThirdwebAuthHandler as POST };
