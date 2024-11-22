"use client"

import { useMarketPlaceContext } from '@/components/hooks/use-context'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { NewSaleEvent } from '@/types/event'
import {  ContractEvent, useContractEvents } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

const transactions = [
  { id: '0x123...abc', from: '0xA1B...C2D', to: '0xE3F...G4H', nft: 'CryptoPunk #1234', price: '10.5 ETH', date: '2023-06-01' },
  { id: '0x456...def', from: '0xI5J...K6L', to: '0xM7N...O8P', nft: 'Bored Ape #5678', price: '80 ETH', date: '2023-06-02' },
  { id: '0x789...ghi', from: '0xQ9R...S0T', to: '0xU1V...W2X', nft: 'Doodle #9012', price: '2.75 ETH', date: '2023-06-03' },
  { id: '0xabc...jkl', from: '0xY3Z...A4B', to: '0xC5D...E6F', nft: 'Azuki #3456', price: '15 ETH', date: '2023-06-04' },
  { id: '0xdef...mno', from: '0xG7H...I8J', to: '0xK9L...M0N', nft: 'CloneX #7890', price: '7.2 ETH', date: '2023-06-05' },
]

type Transaction = {
  transactionHash: string
  from: string
  to?: string
  price: string
  date: string
  age: number
}

export function TransactionTable() {
  const { marketPlaceContract, loadingMarketPlace, errorMarketPlace } = useMarketPlaceContext()
  const { data: sales, isLoading: loadingSales, isError: errorSales } = useContractEvents(marketPlaceContract, "NewSale")
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const getTransactions = async (txHash: string) => {
      const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com")
      
      try {
        const tx = await provider.getTransaction(txHash)

        if(!tx) {
          throw new Error("Transaction not found")
        }

        const block = await provider.getBlock(tx.blockNumber!)

        if(!block) {
          throw new Error("Block not found")
        }

        // Convert timestamp to date
        const txDate = new Date(block.timestamp * 1000)

        // Calculate age
        const now = new Date()
        const ageInMilliseconds = now.getTime() - txDate.getTime()
        const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24))

        // Set the transaction
        setTransactions((prev) => [
          ...prev,
          {
            transactionHash: tx.hash,
            from: tx.from,
            to: tx.to || "N/A", // Provide fallback for undefined
            price: tx.value.toString(),
            date: txDate.toISOString(),
            age: ageInDays,
          },
        ]);
      } catch(error) {
        console.error("Error fetching transaction:", error);
      }
    }

    if(sales) {
      for(let i = 0; i < sales.length; i++) {
        getTransactions(sales[i].transaction.transactionHash)
      }
    }
  }, [sales])

  return (
    <div className="border-black bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions && transactions.map((tx) => (
            <TableRow key={tx.transactionHash}>
              <TableCell className="font-mono">{tx.transactionHash}</TableCell>
              <TableCell className="font-mono">{tx.from}</TableCell>
              <TableCell className="font-mono">{tx.to}</TableCell>
              <TableCell>{tx.price}</TableCell>
              <TableCell>{tx.age}</TableCell>
              <TableCell>{tx.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}