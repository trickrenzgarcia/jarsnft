import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsWrapper() {
  return (
    <div className="w-full">
      <Tabs defaultValue="owned">
        <TabsList>
          <TabsTrigger value="owned">Owned</TabsTrigger>
          <TabsTrigger value="created">Created</TabsTrigger>
        </TabsList>
        <TabsContent value="owned">Your Owned NFTs</TabsContent>
      </Tabs>
    </div>
  );
}
