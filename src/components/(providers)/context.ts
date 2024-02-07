import { MultiCollectionContextProps, NFTCollection } from "@/types";
import { createContext, useContext } from "react";

export const CollectionsContext = createContext<NFTCollection[] | undefined>(
  undefined
);

export const CollectionContext = createContext<NFTCollection | undefined>(
  undefined
);

export const MultiCollectionContext = createContext<
  MultiCollectionContextProps | undefined
>(undefined);

export function useCollectionsContext() {
  const collections = useContext(CollectionsContext);

  if (collections === undefined) {
    throw new Error(
      "The collections context is undefined, wrap in CollectionsContext.Provider"
    );
  }

  return collections;
}

type Category = "arts" | "pfps" | "photography" | "popular";

export function useMultiCollection(category: Category) {
  const multiCollection = useContext(MultiCollectionContext);

  if (multiCollection === undefined) {
    throw new Error("Multicollection is undefined");
  }

  switch (category) {
    case "arts":
      return multiCollection.arts;
    case "pfps":
      return multiCollection.pfps;
    case "photography":
      return multiCollection.photography;
    case "popular":
      return multiCollection.popular;
    default:
      throw new Error("Multicollection category is undefined!");
  }
}

export function useCollectionContext() {
  const collection = useContext(CollectionContext);

  if (collection === undefined) {
    throw new Error(
      "The collection context is undefined, wrap in CollectionContext.Provider"
    );
  }

  return collection;
}
