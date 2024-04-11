"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlchemyNFTs } from "@/lib/core/types";
import { ProfileQuery } from "@/types/users";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";
import OwnedNFTs from "./OwnedNFTs";

export default function TabsWrapper({
  user: userContext,
}: {
  user: ProfileQuery;
}) {
  const { user, isLoading: userLoading } = userContext;
  const [nfts, setNFTs] = useState<AlchemyNFTs>();
  const [loadingNfts, setLoadingNfts] = useState(false);
  const isXsm = useMedia("(max-width: 480px)");
  const isSm = useMedia("(max-width: 640px)");
  const isMd = useMedia("(max-width: 768px)");
  const isLg = useMedia("(max-width: 1024px)");
  const isXl = useMedia("(max-width: 1280px)");
  const is2xl = useMedia("max-width: 1536px)");
  const [numCards, setNumCards] = useState<number>(detechScreenSize());

  function detechScreenSize(): number {
    if (isSm) return 4;
    else if (isMd) return 6;
    else if (isLg) return 8;
    else if (isXl) return 10;
    else if (is2xl) return 10;
    else {
      if (isXl) return 4;
      else return 10;
    }
  }

  useEffect(() => {
    let num = detechScreenSize();
    setNumCards(num);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSm, isMd, isLg, isXl, is2xl]);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="mb-8 w-full">
      <Tabs defaultValue="owned">
        <div className="flex items-center gap-2">
          <TabsList>
            <TabsTrigger value="owned">
              Owned NFTs{" "}
              {`${nfts?.totalCount || 0 > 0 ? `(${nfts?.totalCount})` : ""}`}
              {userLoading && "(..)"}
            </TabsTrigger>
            <TabsTrigger value="onsale">On sale</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
            <TabsTrigger value="created">Created</TabsTrigger>
            {/* <TabsTrigger value="liked">Liked NFTs</TabsTrigger> */}
          </TabsList>
          {/* <h1>Search : ....</h1> */}
        </div>

        <TabsContent value="owned">
          <OwnedNFTs
            nfts={nfts}
            userLoading={userLoading}
            loadingNfts={loadingNfts}
            numCards={numCards}
          />
        </TabsContent>

        <TabsContent value="onsale">
          <div>Onsale</div>
        </TabsContent>

        <TabsContent value="offers">
          <div>Offers</div>
        </TabsContent>

        <TabsContent value="created">
          <div>Created NFTs</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
