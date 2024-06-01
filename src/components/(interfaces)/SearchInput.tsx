"use client"

import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import { jars } from '@/lib/core/api';
import { NFTCollection } from '@/lib/core/types';
import { Card, CardContent } from '../ui/card';
import { Spinner } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataResults, setDataResults] = useState<NFTCollection[] | null | undefined>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSearch = async () => {
      setIsLoading(true);
      const res = await jars.getSearchResults(searchQuery);
      if (res === null) {
        setDataResults(null);
      } else {
        setDataResults(res);

        
      }
      setIsLoading(false);
      console.log(dataResults);
    }
    if(searchQuery.length >= 3) {
      fetchSearch();
    } else {
      setDataResults(null);
    }
  }, [searchQuery]);

  return (
    <div className='w-full relative flex flex-col'>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder='Search'
        className='rounded-lg'
      />
      {isFocused && (
        <div className='w-full absolute mt-[50px]'>
          <Card className=''>
            <CardContent className='p-4'>
              {isLoading ? (
                <div className='flex justify-center'>
                  <Spinner size='md' />
                </div>
              ) : dataResults === null ? (
                <div>
                  <p className='text-sm text-muted-foreground'>Search something</p>
                </div>
              ) : dataResults && (dataResults.length > 0) ? (
                <div className='flex flex-col'>
                  {dataResults.map((result) => (
                    <Link href={`/collection/${result.contract}`} className='cursor-pointer'>
                      <div key={result.contract} className='flex p-2 gap-2 hover:bg-muted rounded-lg'>
                        <div className="flex aspect-square items-center justify-center">
                          <Image src={result.image} alt={result.name} width={30} height={30}
                            style={{ objectFit: "cover" }}
                            className='w-full h-full rounded-md border-1' />
                        </div>
                        
                        <div className='flex flex-col'>
                          <p className='text-sm font-bold'>{result.name}</p>
                          
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
              ) : (
                <div>
                  <p className='text-sm text-muted-foreground'>No results found.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
      )}
    </div>
  )
}
