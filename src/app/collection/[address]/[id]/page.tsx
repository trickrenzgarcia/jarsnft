import { jars } from "@/lib/core/api";
import { shortenAddress } from "@/lib/utils";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/react";
import Link from "next/link";
import { Suspense } from "react";
import NFTImage from "../../_components/NFTImage";
import { Button } from "@/components/ui/button";
import MakeOfferButton from "../../_components/MakeOfferButton";
import NftCard from "./NftCard";

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
};
export default async function NFTDetails({ params: { address, id } }: NFTProps) {
  
  return (
    <main className="container">
      <NftCard address={address} id={id}/>
    </main>
  );
}
