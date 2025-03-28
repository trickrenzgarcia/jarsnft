"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlchemyNFTs } from "@/types";
import { ProfileQuery } from "@/types/users";
import { useEffect, useState } from "react";
import OwnedNFTs from "./OwnedNFTs";
import jars from "@/lib/api";
import { Spinner } from "@nextui-org/react";
import { SimpleHashNFT } from "@/types/simple-hash/nft";

export default function TabsWrapper({ user: userContext }: { user: ProfileQuery }) {
  const { user, isLoading: userLoading } = userContext;
  const [nfts, setNFTs] = useState<SimpleHashNFT[]>();
  const [loadingNfts, setLoadingNfts] = useState(false);

  useEffect(() => {
    async function getNFTs(walletAddress: string) {
      setLoadingNfts(true);
      const nfts = await jars.getNFTsByWallet(walletAddress);
      setLoadingNfts(false);
      if (nfts) setNFTs(nfts);
    }
    if (user) getNFTs(user.address);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="mb-8 w-full">
      <Tabs defaultValue="owned">
        <div className="ml-5 flex items-center gap-2 md:ml-0">
          <TabsList>
            <TabsTrigger value="owned" className="gap-1">
              <span>Owned NFTs</span>
              {`${nfts?.length || 0 > 0 ? `(${nfts?.length})` : "(0)"}`}
              {userLoading && <Spinner size="sm" />}
            </TabsTrigger>
            {/* <TabsTrigger value="onsale">On sale</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
            <TabsTrigger value="created">Created</TabsTrigger> */}
            {/* <TabsTrigger value="liked">Liked NFTs</TabsTrigger> */}
          </TabsList>
          {/* <h1>Search : ....</h1> */}
        </div>

        <TabsContent value="owned">
          <OwnedNFTs nfts={nfts} userLoading={userLoading} loadingNfts={loadingNfts} />
        </TabsContent>

        {/* <TabsContent value="onsale">
          <div>Onsale</div>
        </TabsContent>

        <TabsContent value="offers">
          <div>Offers</div>
        </TabsContent>

        <TabsContent value="created">
          <div>Created NFTs</div>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
