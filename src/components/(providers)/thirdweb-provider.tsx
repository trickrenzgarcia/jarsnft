"use client";

import React from "react";
import { ThirdwebProvider as ThirdwebProviderV4 } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";
import { TH_API_KEY, TH_AUTH_DOMAIN, TH_CLIENT_ID } from "@/lib/constant";

export default function ThirdwebProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThirdwebProviderV4
      activeChain={Polygon}
      clientId={TH_CLIENT_ID}
      secretKey={TH_API_KEY}
      authConfig={{
        domain: TH_AUTH_DOMAIN,
        authUrl: "/api/auth",
      }}
      autoConnectTimeout={99999999999999}
    >
      {children}
    </ThirdwebProviderV4>
  );
}
