import jars from '@/lib/api';
import { SimpleHashNFT } from '@/types/simple-hash/nft';
import { useEffect, useState } from 'react'

export default function useOwnedNFTs(walletAddress: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [nfts, setNFTs] = useState<SimpleHashNFT[]>();

  useEffect(() => {
    async function getNFTs() {
      setIsLoading(true);
      try {
        const nfts = await jars.getNFTsByWallet(walletAddress);
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
