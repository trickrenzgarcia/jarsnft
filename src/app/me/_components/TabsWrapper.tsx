"use client";

import { useUserContext } from "@/components/(providers)";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlchemyNFTs } from "@/lib/core/types";
import { ipfsToCfIpfs } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TabsWrapper() {
  const { user } = useUserContext();
  const [nfts, setNFTs] = useState<AlchemyNFTs>();

  useEffect(() => {
    async function getNFTs(walletAddress: string) {
      const res = await fetch(`http://localhost:5000/nfts/${walletAddress}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXRLZXkiOiJteXNlY3JldHhkeGQiLCJpYXQiOjE3MDkxMzUyMDYsImV4cCI6MTAzNDkxMzUyMDZ9.TNEMDyIqMuQdZ1NO9iQnPojvkY4ApOk-JozsfTdMetc",
        },
      });
      const data = (await res.json()) as AlchemyNFTs;

      if (data) setNFTs(data);
    }
    if (user) getNFTs(user.address);
  }, [user]);

  return (
    <div className="w-full ">
      <Tabs defaultValue="owned">
        <TabsList>
          <TabsTrigger value="owned">Owned</TabsTrigger>
          <TabsTrigger value="created">Created</TabsTrigger>
          <div></div>
        </TabsList>
        <TabsContent value="owned">
          <div className="w-full rounded-md border p-2">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {nfts?.ownedNfts.map((nft) => (
                <Card className="">
                  <Image
                    src={ipfsToCfIpfs(nft.image.originalUrl)}
                    alt={nft.name}
                    width={512}
                    height={512}
                    className="aspect-square"
                  />
                </Card>
              ))}
              {/* <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div> */}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
