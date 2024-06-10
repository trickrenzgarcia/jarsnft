import DropdownButton from "./_components/DropdownButton";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Collections</h1>
      <DropdownButton searchParams={searchParams} />
    </>
  );
}
