import { getOwners } from "@/lib/utils";
import React, { useState } from "react";
import { useEffect } from "react";

export default function useOwnersLength(address: string) {
  const owners = getOwners({
    address: address,
    chain: { id: 137, rpc: `https://137.rpc.thirdweb.com/` },
    client: { clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID, secretKey: process.env.THIRDWEB_API_KEY },
  });
  const [ownersLength, setOwnersLength] = useState(0);

  useEffect(() => {
    const getOwnersData = async () => {
      const ownersData = await owners;
      const ownersArray = ownersData.map((owner) => owner.owner);
      const ownersSet = new Set(ownersArray);
      setOwnersLength(ownersSet.size);
    };
    getOwnersData();
  }, [owners]);

  return { ownersLength };
}
