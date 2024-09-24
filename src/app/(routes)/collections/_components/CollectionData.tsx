import jars from "@/lib/api";
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
    currentCollections = await jars.collection.getTrending("art");
  } else if (selectedCategory === "photography") {
    currentCollections = await jars.collection.getTrending("photography");
  } else if (selectedCategory === "pfp") {
    currentCollections = await jars.collection.getTrending("pfp");
  }

  const slicedCollections = currentCollections.slice(start, end);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-8 place-items-center py-4">
        <div></div>
        <div>Floor Price</div>
        <div>Floor Change</div>
        <div>Volume</div>
        <div>Volume Change</div>
        <div>Sales</div>
        <div>Sales Change</div>
        <div>Listed</div>
      </div>

      {slicedCollections.map((collection, i) => (
        <Link
          href={`/collection/${collection.contract}`}
          className="grid grid-cols-8 place-items-center transition-background hover:bg-neutral-800"
          key={i}
        >
          <div className="flex items-center gap-4 justify-self-start py-4">
            <Image
              src={collection.image}
              width={50}
              height={50}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt="logo of a collection"
              className="size-14 rounded-md"
            />
            <p className="h-fit truncate">{collection.name}</p>
            {true && <Image src="/assets/verify.png" width={20} height={20} alt="verified logo" className="h-fit" />}
          </div>
          <div className="">{collection.sellerFeeBasisPoints}</div> {/* Floor Price */}
          <div className="">{collection.sellerFeeBasisPoints}</div> {/* Floor Change */}
          <div className="">{collection.sellerFeeBasisPoints}</div> {/* Volume */}
          <div className="">{collection.sellerFeeBasisPoints}</div> {/* Volume Change */}
          <div className="">{collection.sellerFeeBasisPoints}</div> {/* Sales */}
          <div className="">{collection.sellerFeeBasisPoints}</div> {/* Sales Change */}
          <div className="">{collection.sellerFeeBasisPoints}</div> {/* Listed */}
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
