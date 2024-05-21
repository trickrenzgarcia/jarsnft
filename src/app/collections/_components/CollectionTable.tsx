"use client";

import CollectionRows from "../_components/CollectionRows";
import PaginationUI from "../_components/PaginationUI";
import { faker } from "@faker-js/faker";
import { NFTCollection } from "@/lib/core/types";

export default function CollectionTable({
  collectionsLength,
  collections,
  start,
  end,
}: {
  collectionsLength: number;
  collections: NFTCollection[];
  start: number;
  end: number;
}) {
  return (
    <>
      {collections.map((item, i) => {
        return (
          <CollectionRows
            collectionHref="#"
            collectionLogoSrc={item.image}
            collectionName={item.name}
            isVerified={faker.datatype.boolean()}
            floorPrice={faker.number.float({
              min: 1,
              max: 10,
              fractionDigits: 2,
            })}
            floorChange={faker.number.float({
              min: -5,
              max: 5,
              fractionDigits: 2,
            })}
            volume={faker.number.float({
              min: 100,
              max: 2000,
              fractionDigits: 2,
            })}
            volumeChange={faker.number.float({
              min: -70,
              max: 70,
              fractionDigits: 2,
            })}
            sales={faker.number.float({
              min: 10,
              max: 500,
              fractionDigits: 0,
            })}
            salesChange={faker.number.float({
              min: -70,
              max: 70,
              fractionDigits: 2,
            })}
            allCurrentListedNFTs={faker.number.float({
              min: 200,
              max: 800,
              fractionDigits: 0,
            })}
            allCurrentNFTS={faker.number.float({
              min: 3000,
              max: 20000,
              fractionDigits: 0,
            })}
            key={i}
          />
        );
      })}

      <PaginationUI
        collectionsLength={collectionsLength}
        start={start}
        end={end}
      />
    </>
  );
}
