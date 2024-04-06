"use client";

import { useUserContext } from "@/components/(providers)";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlchemyNFTs } from "@/lib/core/types";
import { cn, getRandomInt, ipfsToCfIpfs } from "@/lib/utils";
import { ProfileQuery } from "@/types/users";
import { Image, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TabsWrapper({
  user: userContext,
}: {
  user: ProfileQuery;
}) {
  const { user, isLoading: userLoading } = userContext;
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
      if (data) setNFTs(data);
    }
    if (user) getNFTs(user.address);
  }, [user]);

  return (
    <div className="mb-8 w-full">
      <Tabs defaultValue="owned">
        <TabsList>
          <TabsTrigger value="owned">
            Owned NFTs{" "}
            {`${nfts?.totalCount || 0 > 0 ? `(${nfts?.totalCount})` : ""}`}
            {userLoading && "(..)"}
          </TabsTrigger>
          <TabsTrigger value="created">My Collection</TabsTrigger>
          <div></div>
        </TabsList>
        <TabsContent value="owned">
          <div className="w-full rounded-md border p-2">
            <div className="text-lg font-bold">
              Owned Item{(nfts?.totalCount || 0 > 1) && "s"}:{" "}
              {nfts?.totalCount || 0}
            </div>
            {userLoading || loadingNfts ? (
              <div className="grid w-full grid-cols-2 justify-center gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div className="w-full">
                    <Skeleton className="h-[200px] w-full" />
                  </div>
                ))}
              </div>
            ) : (
              nfts && (
                <div className="w-full columns-2 space-y-4 sm:columns-3 md:columns-4 lg:columns-5 xl:grid-cols-5 2xl:grid-cols-6">
                  {nfts?.ownedNfts.map((nft) => (
                    <div key={nft.name + nft.tokenId} className="w-full">
                      <Link href={`${nft.contract.address}/${nft.tokenId}`}>
                        <Card className="rounded-2xl">
                          <CardContent>
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <Image
                                  isBlurred
                                  width={512}
                                  height={512}
                                  src={ipfsToCfIpfs(nft.image.originalUrl)}
                                  alt={nft.name}
                                />
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80">
                                <Avatar>
                                  <AvatarImage src="https://github.com/vercel.png" />
                                  <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                              </HoverCardContent>
                            </HoverCard>
                          </CardContent>
                        </Card>
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
