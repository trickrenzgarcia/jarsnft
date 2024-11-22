"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import jars from "@/lib/api";
import { NFTCollection } from "@/types";
import { Card, CardContent } from "../ui/card";
import { Spinner } from "@nextui-org/react";
import { SiPolygon } from "react-icons/si";

import Image from "next/image";
import Link from "next/link";
import { ipfsToHttps } from "@/lib/utils";
import SearchResult from "./SearchResult";

export default function SearchInput(props: any) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataResults, setDataResults] = useState<NFTCollection[] | null | undefined>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSearch = async () => {
      setIsLoading(true);
      const res = await jars.getSearchResults(searchQuery);
      setDataResults(res);
      setIsLoading(false);
    };
    if (searchQuery.length >= 3) {
      fetchSearch();
    } else {
      setDataResults(null);
    }
  }, [searchQuery]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsFocused(false);
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      router.push(href);
    }
  };

  return (
    <div className="relative flex w-full flex-col">
      <div className="flex items-center gap-4">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          placeholder="Search"
          className="rounded-lg"
        />
        <button onClick={props.handleClick} className="block text-3xl xl:hidden">
          &times;
        </button>
      </div>
      {isFocused && (
        <div className="absolute mt-[50px] w-full">
          <Card className="">
            <CardContent className="p-4">
              {isLoading ? (
                <div className="flex justify-center">
                  <Spinner size="md" />
                </div>
              ) : dataResults === null ? (
                <div>
                  <p className="text-sm text-muted-foreground">Search something</p>
                </div>
              ) : dataResults && dataResults.length > 0 ? (
                <div className="flex flex-col">
                  {dataResults.map((result) => (
                    <SearchResult result={result} handleLinkClick={handleLinkClick} />
                  ))}
                </div>
              ) : (
                <div>
                  <p className="text-sm text-muted-foreground">No results found.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
