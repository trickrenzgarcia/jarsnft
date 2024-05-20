import CollectionTable from "./_components/CollectionTable";
import DropdownButton from "./_components/DropdownButton";
import { use } from "react";

async function getNFTCollections() {
  return (
    await fetch("http://localhost:5000/deploy/nft-collection", {
      // cache: "no-store",
    })
  ).json();
}

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const nftCollections = use(getNFTCollections());
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const entries = nftCollections.slice(start, end);

  return (
    <div suppressHydrationWarning={true}>
      <h1 className="mb-10 text-4xl font-bold">Collections</h1>

      <DropdownButton />
      {/* Column Titles */}
      <div className="mb-4 grid grid-cols-10 text-gray-500">
        <div className="col-span-2"></div>
        <p className="text-center">Floor</p>
        <p className="text-center">Floor Chg</p>
        <p className="text-center">Volume</p>
        <p className="text-center">Vol Chg</p>
        <p className="text-center">Sales</p>
        <p className="text-center">Sales Chg</p>
        <p className="col-span-2 text-right">Listed</p>
      </div>

      <CollectionTable
        collectionsLength={nftCollections.length}
        collections={entries}
        start={start}
        end={end}
      />
    </div>
  );
}
