"use client";

import CollectionRows from "./_components/CollectionRows";
import DropdownButton from "./_components/DropdownButton";
import PaginationUI from "./_components/PaginationUI";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export default function Page() {
  const [data, setData] = useState<{ image: string; isVerified: boolean }[]>(
    [],
  );

  function generateFakeData() {
    const newImage = faker.image.urlPicsumPhotos();
    const fakerBoolean = faker.datatype.boolean();
    return { image: newImage, isVerified: fakerBoolean };
  }

  useEffect(() => {
    const storedData = localStorage.getItem("fakerData");

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      const newData = Array.from({ length: 15 }, generateFakeData);
      setData(newData);
      localStorage.setItem("fakerData", JSON.stringify(newData));
    }
  }, []);

  return (
    <div>
      <h1 className="mb-10 text-4xl font-bold">Collections</h1>

      <DropdownButton />
      {/* Column Titles */}
      <div className="mb-4 grid grid-cols-10 text-gray-500">
        <div className="col-span-2"></div>
        <p className="text-center">Floor</p>
        <p className="text-center">Floor Chg</p>
        <p className="text-center">Volume</p>
        <p className="text-center">Vol Chg</p>
        <p className="text-center">Sales</p>
        <p className="text-center">Sales Chg</p>
        <p className="col-span-2 text-right">Listed</p>
      </div>

      {/* Collections Rows */}
      {data.map((item, i) => {
        return (
          <CollectionRows
            collectionHref="#"
            collectionLogoSrc={item.image}
            collectionName="Sample Name"
            isVerified={item.isVerified}
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

      <PaginationUI />
    </div>
  );
}
