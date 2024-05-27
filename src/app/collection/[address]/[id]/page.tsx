import NftCard from "./NftCard";

type NFTProps = {
  params: {
    address: string;
    id: string;
  };
};

export default async function NFTDetails({
  params: { address, id },
}: NFTProps) {
  return (
    <main className="container pb-20">
      <NftCard address={address} id={id} />
    </main>
  );
}
