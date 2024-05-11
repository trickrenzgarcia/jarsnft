import { jars } from "@/lib/core/api";
import { shortenAddress } from "@/lib/utils";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/react";
import Link from "next/link";
import { Suspense } from "react";
import NFTImage from "../../_components/NFTImage";
import { Button } from "@/components/ui/button";
import MakeOfferButton from "../../_components/MakeOfferButton";

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
};
export default async function NFTDetails({ params: { address, id } }: NFTProps) {
  const nft = await jars.getNFTByTokenId(address, id);

  const owner = nft.owners.at(nft.owners.length - 1)?.owner_address;
  return (
    <main className="container">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full flex flex-col gap-2 max-w-md py-7 md:px-5">
          
          <h1 className="text-4xl font-bold">{nft.name}</h1>
          <div className="flex gap-2">
            <Image 
              src={nft.collection.image_url} 
              width={22} 
              height={22} 
              alt="Collection"
              className="rounded-full border"
            />
            <Link href={`/collection/${nft.contract_address}`} className="hover:underline">
              <p className="font-semibold">{nft.contract.name}</p>
            </Link>
          </div>
          <div className="flex gap-1 text-md">
            <p>Owned by</p> 
            <Link href={`/user/${owner}`} className="hover:underline text-blue-500">{shortenAddress(owner || "", 6, 4)}</Link>
          </div>
          
          <div className="w-full p-5 rounded-lg border-2 mt-5 mb-5">
            <p>PRICE</p>
            <h1 className="text-2xl font-bold flex items-center">
              <span>N/A</span>
              <span className="text-sm font-normal">{`(not listed)`}</span>
            </h1>
          </div>

          <MakeOfferButton contractAddress={address} tokenId={id} nft={nft} />

        </div>
        <div className="w-full flex justify-center items-center py-7">
          <NFTImage image_url={nft.image_url} name={nft.name} />
        </div>
      </div>
    </main>
  );
}
