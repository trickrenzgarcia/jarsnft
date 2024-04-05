"use client";

import { useUserContext } from "@/components/(providers)";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlchemyNFTs } from "@/lib/core/types";
import { ipfsToCfIpfs } from "@/lib/utils";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TabsWrapper() {
  const { user } = useUserContext();
  const [nfts, setNFTs] = useState<AlchemyNFTs>();
  const [loadingNfts, setLoadingNfts] = useState(false);

  useEffect(() => {
    async function getNFTs(walletAddress: string) {
      setLoadingNfts(true);
      const res = await fetch(`http://localhost:5000/nfts/${walletAddress}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXRLZXkiOiJteXNlY3JldHhkeGQiLCJpYXQiOjE3MDkxMzUyMDYsImV4cCI6MTAzNDkxMzUyMDZ9.TNEMDyIqMuQdZ1NO9iQnPojvkY4ApOk-JozsfTdMetc",
        },
      });
      const data = (await res.json()) as AlchemyNFTs;
      setLoadingNfts(false);
      //if (data) setNFTs(data);
      setLoadingNfts(true);
    }
    if (user) getNFTs(user.address);
  }, [user]);

  return (
    <div className="mb-8 w-full">
      <Tabs defaultValue="owned">
        <TabsList>
          <TabsTrigger value="owned">Owned</TabsTrigger>
          <TabsTrigger value="created">Created</TabsTrigger>
          <div></div>
        </TabsList>
        <TabsContent value="owned">
          <div className="w-full rounded-md border p-2">
            <div className="text-lg font-bold">
              Owned Item{(nfts?.totalCount || 0 > 1) && "s"}:{" "}
              {nfts?.totalCount || 0}
            </div>
            {loadingNfts ? (
              <div className="grid grid-cols-5 gap-4">
                <Skeleton className="h-72 w-72" />
              </div>
            ) : (
              nfts && (
                <div className="w-full columns-2 space-y-4 sm:columns-3 md:columns-4 lg:columns-5">
                  {nfts?.ownedNfts.map((nft) => (
                    <div key={nft.name + nft.tokenId} className="w-full">
                      <Link href={`${nft.contract.address}/${nft.tokenId}`}>
                        <Image
                          isBlurred
                          width={512}
                          height={512}
                          src={ipfsToCfIpfs(nft.image.originalUrl)}
                          alt={nft.name}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
