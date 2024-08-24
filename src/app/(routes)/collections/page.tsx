import CollectionData from "./_components/CollectionData";
import DropdownControls from "./_components/DropdownControls";

export default function CollectionsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <h1 className="animate-flip-down animate-once animate-duration-[1200ms] animate-ease-in my-2 mx-auto font-bold text-3xl lg:text-7xl">Collections</h1>
      <DropdownControls searchParams={searchParams} />
      <CollectionData searchParams={searchParams} />
    </>
  );
}
