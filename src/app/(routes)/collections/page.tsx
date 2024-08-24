import CollectionData from "./_components/CollectionData";
import DropdownControls from "./_components/DropdownControls";

export default function CollectionsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <>
      <h1 className="animate-once animate-duration-[1200ms] animate-ease-in mx-auto mb-6 mt-4 animate-flip-down text-3xl font-bold lg:text-7xl">
        Collections
      </h1>
      <DropdownControls searchParams={searchParams} />
      <CollectionData searchParams={searchParams} />
    </>
  );
}
