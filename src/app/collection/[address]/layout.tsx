import { Navbar } from "@/components/(layout)";
import { Suspense } from "react";
import NFTBannerMetadata from "../_components/NFTBannerMetadata";
import { env } from "@/lib/env.mjs";
import { getMetadata } from "@/lib/ctx";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Input } from "@nextui-org/react";
import PriceRangeValue from "../_components/PriceRangeValue";
import {
  CustomContractMetadata,
  useContract,
  useMetadata,
} from "@thirdweb-dev/react";

// For better user experience SSG (Static Site Generation)
// export async function generateStaticParams() {
//   const metadatas: MetadataSchema[] = await fetch(env.NEXT_PUBLIC_BACKEND_URL+"/metadata/all").then((res) => res.json())

//   return metadatas.map((data: MetadataSchema) => ({
//     address: data.cid
//   }))
// }

type CollectionParams = {
  params: { address: string };
  children: React.ReactNode;
};

export default async function CollectionLayout({
  params: { address },
  children,
}: CollectionParams) {
  /* FOR DATABASE
  const data = await getMetadata(address)
  */

  return (
    <main>
      <header>
        <Navbar display="fixed" />
      </header>
      <div className="mb-[70px] w-full" />
      <Suspense fallback={<LoadingMetadata />}>
        <NFTBannerMetadata address={address} />
      </Suspense>
      <div className="flex w-full items-start">
        <section className="sticky left-0 top-[100px] hidden h-auto w-[380px] min-w-[380px] overflow-y-auto border-r border-zinc-800 px-6 md:block">
          <Separator className="my-3 w-full bg-zinc-800" />
          <div className="">
            <PriceRangeValue />
          </div>
        </section>
        <section className="relative p-6">{children}</section>
      </div>
    </main>
  );
}

function LoadingMetadata() {
  return <div>Loading...</div>;
}
