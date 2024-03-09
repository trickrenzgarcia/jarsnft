import type { ThirdwebAuthUser } from "@thirdweb-dev/auth/next";
import { ThirdwebAuthAppRouter } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

import { dbUser } from "@/lib/ctx";

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
      if(!await dbUser.isUserExists(address)) {
        await dbUser.createUser(address);
      }

      const { user } = await dbUser.getUser(address);

      const session = {
        email: user.email,
        name: user.name,
        is_listed: user.is_listed,
        create_at: user.createdAt,
      }
      return session
    },
    onToken(token) {
      return token;
    },
    onUser: async (user: ThirdwebAuthUser<any, { is_listed: boolean }>) => {
      const { user: u } = await dbUser.getUser(user.address);
      return {...user, session: { ...user.session, is_listed: u.is_listed }}
    },
  },
});

export { ThirdwebAuthHandler as GET, ThirdwebAuthHandler as POST };
