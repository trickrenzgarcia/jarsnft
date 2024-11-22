"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { NFT_MARKETPLACE } from '@/lib/constant'
import { useContract, useContractEvents } from '@thirdweb-dev/react'

const transactions = [
  { id: '0x123...abc', from: '0xA1B...C2D', to: '0xE3F...G4H', nft: 'CryptoPunk #1234', price: '10.5 ETH', date: '2023-06-01' },
  { id: '0x456...def', from: '0xI5J...K6L', to: '0xM7N...O8P', nft: 'Bored Ape #5678', price: '80 ETH', date: '2023-06-02' },
  { id: '0x789...ghi', from: '0xQ9R...S0T', to: '0xU1V...W2X', nft: 'Doodle #9012', price: '2.75 ETH', date: '2023-06-03' },
  { id: '0xabc...jkl', from: '0xY3Z...A4B', to: '0xC5D...E6F', nft: 'Azuki #3456', price: '15 ETH', date: '2023-06-04' },
  { id: '0xdef...mno', from: '0xG7H...I8J', to: '0xK9L...M0N', nft: 'CloneX #7890', price: '7.2 ETH', date: '2023-06-05' },
]

export function TransactionTable() {
  const { contract } = useContract(NFT_MARKETPLACE, "marketplace-v3")
  const { data: sales, isLoading: loadingSales, isError: errorSales } = useContractEvents(contract, "NewSale")

  return (
    <div className="border-black bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>NFT</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sales && transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-mono">{tx.id}</TableCell>
              <TableCell className="font-mono">{tx.from}</TableCell>
              <TableCell className="font-mono">{tx.to}</TableCell>
              <TableCell>{tx.nft}</TableCell>
              <TableCell>{tx.price}</TableCell>
              <TableCell>{tx.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}