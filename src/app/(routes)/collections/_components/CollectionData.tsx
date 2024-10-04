import jars from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import PaginationControls from "./PaginationControls";
import { collections } from "@/app/api/_routers";

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

  const hide = () => {
    return 'hidden lg:inline-block'
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 lg:grid-cols-9 place-items-center py-4 space-x-4">
        <h3>Name</h3>
        <h3>Floor Price</h3>
        <h3 className={hide()}>Floor Change</h3>
        <h3 className={hide()}>Volume</h3>
        <h3 className={hide()}>Volume Change</h3>
        <h3 className={hide()}>Sales</h3>
        <h3 className={hide()}>Sales Change</h3>
        <h3>Listed</h3>
        <h3 className={hide()}>Verified</h3>
      </div>

      {slicedCollections.map((collection, i) => (
        <Link
          href={`/collection/${collection.contract}`}
          className="grid grid-cols-3 lg:grid-cols-9 lg:pl-5 place-items-center transition-background hover:bg-accent-foreground/15 rounded-lg space-x-6 gap-4"
          key={i}
        >
          <div className="flex items-center gap-2 justify-self-start py-4">
            <Image
              src={collection.image}
              width={50}
              height={50}
              style={{ minHeight: "60px", minWidth: "60px", objectFit: "cover", objectPosition: "center" }}
              alt="logo of a collection"
              className="size-14 rounded-lg"
            />
            <p className="max-w-[6rem] h-fit truncate">{collection.name}</p>

          </div>
          <div>{collection.sellerFeeBasisPoints}</div> {/* Floor Price */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Floor Change */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Volume */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Volume Change */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Sales */}
          <div className={hide()}>{collection.sellerFeeBasisPoints}</div> {/* Sales Change */}
          <div>{collection.isNsfw}</div> {/* Listed */}
          <div className={hide()}>
          {collection.isVerified ? (
            <Image
              src="/assets/verify.png"
              width={20}
              height={20}
              alt="verified logo"
              className="h-fit"
            />
          ) : null}
        </div> {/* Verified */}
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
