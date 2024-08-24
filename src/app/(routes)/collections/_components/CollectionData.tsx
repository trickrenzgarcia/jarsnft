import { jars } from "@/lib/core/api";
import * as getCollections from "@/utils/getCollections";
import Image from "next/image";
import Link from "next/link";
import PaginationControls from "./PaginationControls";

export default async function CollectionData({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const page = searchParams["page"] ?? 1;
  const limit = 5;

  const start = (Number(page) - 1) * limit;
  const end = start + limit;

  const selectedCategory = (searchParams["category"] as string) ?? "all";
  let currentCollections = await jars.getNFTCollections();

  if (selectedCategory === "all") {
    currentCollections = await jars.getNFTCollections();
  } else if (selectedCategory === "art") {
    currentCollections = await getCollections.getArtCollections();
  } else if (selectedCategory === "photography") {
    currentCollections = await getCollections.getPhotosCollections();
  } else if (selectedCategory === "pfp") {
    currentCollections = await getCollections.getPFPsCollections();
  }

  const slicedCollections = currentCollections.slice(start, end);

  const dataUse = {
    hide: "hidden lg:grid",
    hidelg: "lg:hidden",
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-5 lg:grid-cols-8 place-items-center py-4 space-x-4">
        <div className={dataUse.hidelg}></div>
        <div className={dataUse.hidelg}>Name</div>
        <div></div>
        <div>Floor Price</div>
        <div className={dataUse.hide}>Floor Change</div>
        <div className={dataUse.hide}>Volume</div>
        <div className={dataUse.hide}>Volume Change</div>
        <div className={dataUse.hide}>Sales</div>
        <div className={dataUse.hide}>Sales Change</div>
        <div>Listed</div>
      </div>

      {slicedCollections.map((collection, i) => (
        <Link
          href={`/collection/${collection.contract}`}
          className="grid grid-cols-5 lg:grid-cols-8 place-items-center transition-background hover:bg-accent-foreground/15 rounded-lg space-x-4"
          key={i}
        >
          <div className="ml-1 flex items-center gap-4 justify-self-start py-4">
            <Image
              src={collection.image}
              width={50}
              height={50}
              style={{ minHeight: "60px", minWidth: "60px", objectFit: "cover", objectPosition: "center" }}
              alt="logo of a collection"
              className="size-14 rounded-lg"
            />
            <p className="max-w-[14rem] h-fit w-full truncate">{collection.name}</p>
            {true && <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" />}
          </div>
          <div className={dataUse.hidelg}></div>
          <div className={dataUse.hidelg}></div>
          <div className="">{collection.seller_fee_basis_points}</div> {/* Floor Price */}
          <div className={dataUse.hide}>{collection.seller_fee_basis_points}</div> {/* Floor Change */}
          <div className={dataUse.hide}>{collection.seller_fee_basis_points}</div> {/* Volume */}
          <div className={dataUse.hide}>{collection.seller_fee_basis_points}</div> {/* Volume Change */}
          <div className={dataUse.hide}>{collection.seller_fee_basis_points}</div> {/* Sales */}
          <div className={dataUse.hide}>{collection.seller_fee_basis_points}</div> {/* Sales Change */}
          <div className="">{collection.seller_fee_basis_points}</div> {/* Listed */}
        </Link>
      ))}
      <PaginationControls
        searchParams={searchParams}
        className="py-4"
        hasPrevPage={start > 0}
        hasNextPage={end < currentCollections.length}
        collectionLength={currentCollections.length}
      />
    </div>
  );
}
