"use client";

import {
  useAddress,
  useAuth,
  useConnect,
  metamaskWallet,
} from "@thirdweb-dev/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import React from "react";
import { Button } from "../ui/button";

const metamaskConfig = metamaskWallet();

export default function AuthLoginButton() {
  const auth = useAuth();
  const address = useAddress();
  const connect = useConnect();
  const { data: session } = useSession();
  const [secret, setSecret] = useState();

  const getSecret = async () => {
    const res = await fetch("api/secret");
    const data = await res.json();
    setSecret(data);
  };

  const loginWithWallet = async () => {
    // Prompt the user to sign a login with wallet message
    const payload = await auth?.login();

    // Then send the payload to next auth as login credentials
    // using the "credentials" provider method
    await signIn("credentials", {
      payload: JSON.stringify(payload),
      redirect: false,
    });
  };

  useEffect(() => {
    console.log(session);
    console.log(address);
  }, [session, address]);

  return (
    <>
      {!!session ? (
        <Button onClick={() => signOut()}>Logout</Button>
      ) : address ? (
        <Button onClick={() => loginWithWallet()}>Login Wallet</Button>
      ) : (
        <Button
          onClick={async () => {
            await connect(metamaskConfig, {
              chainId: 11155111,
            });
          }}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
