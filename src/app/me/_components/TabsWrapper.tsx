import { useUserContext } from "@/components/(providers)";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { jars } from "@/lib/core/api";
import { useAddress, useChain, useOwnedNFTs } from "@thirdweb-dev/react";

export default async function TabsWrapper() {
  const nfts = await jars.getNFTsForOwner(
    "0x18a583Eb4D800ACc57067274e6b496db7Bd7E1Fd",
  );

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
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
