import CollectionData from "./_components/CollectionData";
import DropdownControls from "./_components/DropdownControls";
import React from "react";

export default function CollectionsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <>
      <h1 className="animate-once animate-duration-[1200ms] animate-ease-in mx-auto my-6 animate-flip-down text-3xl font-bold lg:text-5xl">
        Collections Stats
      </h1>
      <hr />
      <DropdownControls searchParams={searchParams} />
      <CollectionData searchParams={searchParams} />
    </>
  );
}
