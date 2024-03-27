"use client";

import NFTCreateContractCard from "../_components/NFTCreateContractCard";
import DetailsCard from "../_components/DetailsCard";
import ProfileCard from "../_components/ProfileCard";
import { useUserContext } from "@/components/(providers)";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function DeployContractPage() {
  const { user, isLoading } = useUserContext();

  if(isLoading) {
    return (
      <div className="w-full flex flex-col h-[calc(100vh-57px)] items-center justify-center">
        <LoadingLogo />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col mx-auto md:flex-row justify-center md:py-8 gap-5">
      <section>
        <NFTCreateContractCard
          title="Create NFT Collection"
          description='The NFT Collection contract is suitable for when you want to have a collection of unique NFTs, but not "drop" or "release" them for your community to claim.'
        />
      </section>
      <section className="hidden lg:block">
        {(isLoading && <>Loading ProfileCard...</>) || <ProfileCard user={user} />}
        <DetailsCard title="Once your contract deployment is complete, you'll have the ability to:" />
      </section>
    </main>
  );
}

function LoadingLogo() {
  return (
    <motion.div
      className="w-14 h-14 self-center"
      // initial={{ opacity: 0.1, borderRadius: "10%", rotate: 180, backgroundColor: "#EB8253" }}
      animate={{ opacity: 1, borderRadius: ['10%', '50%', '10%', '50%', '10%'], rotate: [180, 0, 180, 0, 180], backgroundColor: ['#EB8253', '#A3CCC1'] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}
    ></motion.div>
  );
}