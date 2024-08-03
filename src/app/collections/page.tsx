import CollectionData from "./_components/CollectionData";
import DropdownControls from "./_components/DropdownControls";

export default function CollectionsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Collections</h1>
      <DropdownControls searchParams={searchParams} />
      <CollectionData searchParams={searchParams} />
    </>
  );
}
