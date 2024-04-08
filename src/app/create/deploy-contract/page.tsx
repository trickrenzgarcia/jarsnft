"use client";

import NFTCreateContractCard from "../_components/NFTCreateContractCard";
import DetailsCard from "../_components/DetailsCard";
import ProfileCard from "../_components/ProfileCard";
import { useUserContext } from "@/components/(providers)";
import { Loading } from "@/components/(skeletons)";
import NoConnectedWallet from "@/app/me/_components/NoConnectedWallet";

export default function DeployContractPage() {
  const user = useUserContext();

  if (user.isLoading) {
    return (
      <div className="flex h-[calc(100vh-57px)] w-full items-center justify-center">
        <Loading animation="bouncy" />
      </div>
    );
  }

  if (!user.isLoggedIn) {
    return <NoConnectedWallet />;
  }

  return (
    <main className="mx-auto flex w-full flex-col justify-center gap-5 md:flex-row md:py-8">
      <section>
        <NFTCreateContractCard
          user={user}
          title="Create NFT Collection ERC-721"
          description="The NFT Collection contract is suitable for when you want to have a collection of unique NFTs."
        />
      </section>
      <section className="hidden lg:block">
        {(user.isLoading && <>Loading ProfileCard...</>) || (
          <ProfileCard user={user.user} />
        )}
        <DetailsCard title="Once your contract deployment is complete, you'll have the ability to:" />
      </section>
    </main>
  );
}
