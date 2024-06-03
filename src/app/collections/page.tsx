import CollectionTable from "./_components/CollectionTable";
import DropdownButton from "./_components/DropdownButton";
import { jars } from "@/lib/core/api";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const nftCollections = await jars.getNFTCollections();
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const entries = nftCollections.slice(start, end);

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Collections</h1>
      <DropdownButton />
      {/* Column Titles */}
      <div className="col-span-2 mb-4 grid grid-cols-10 text-gray-500">
        <div className="col-span-2"></div>
        <p className="text-center">Floor Price</p>
        <p className="text-center">Floor Change</p>
        <p className="text-center">Volume</p>
        <p className="text-center">Volume Change</p>
        <p className="text-center">Sales</p>
        <p className="text-center">Sales Change</p>
        <p className="col-span-2 text-right">Listed</p>
      </div>

      <CollectionTable
        collectionsLength={nftCollections.length}
        collections={entries}
        start={start}
        end={end}
      />
    </>
  );
}
