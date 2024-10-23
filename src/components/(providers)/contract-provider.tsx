'use client'

import { type SmartContract, useContract, useContractMetadata } from '@thirdweb-dev/react';
import { BaseContract } from 'ethers';
import { createContext, ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode;
  address: string;
}

export type ContractContext = {
  contract: SmartContract<BaseContract> | undefined;
  collection: any;
  loadingCollection: boolean;
  errorCollection: boolean;
}

export const ContractContext = createContext<ContractContext | undefined>(undefined)

function ContractProvider({ children, address }: Props) {
  const { contract } = useContract(address)
  const { data: collection, isLoading: loadingCollection, isError: errorCollection } = useContractMetadata(contract)

  const contractMemo = useMemo(() => {
    return {
      contract,
      collection,
      loadingCollection,
      errorCollection
    }
  }, [contract, collection, loadingCollection, errorCollection])
  
  return <ContractContext.Provider value={contractMemo}>{children}</ContractContext.Provider>
}

export default ContractProvider