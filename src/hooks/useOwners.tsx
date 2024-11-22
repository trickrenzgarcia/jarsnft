import { getOwners } from "@/lib/utils";
import React, { useState } from "react";
import { useEffect } from "react";

export default function useOwners(address: string) {
  const owners = getOwners({
    address: address,
    chain: { id: 137, rpc: `https://137.rpc.thirdweb.com/` },
    client: { clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID, secretKey: process.env.THIRDWEB_API_KEY },
  });
  const [ownersArray, setOwnersArray] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    const getOwnersData = async () => {
      const ownersData = await owners;
      const ownersArray = ownersData.map((owner) => owner.owner);
      setOwnersArray(ownersArray);
    };
    getOwnersData();
  }, [owners]);

  return { ownersArray };
}
