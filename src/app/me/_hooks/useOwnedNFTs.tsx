import { jars } from '@/lib/core/api';
import { AlchemyNFTs } from '@/lib/core/types';
import { useEffect, useState } from 'react'

export default function useOwnedNFTs(walletAddress: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nfts, setNFTs] = useState<AlchemyNFTs>();

  useEffect(() => {
    async function getNFTs() {
      setIsLoading(true);
      try {
        const nfts = await jars.getNFTsForOwner(walletAddress);
        if (nfts) setNFTs(nfts);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getNFTs();
  }, [])

  return { nfts, isLoading, isError }
}
