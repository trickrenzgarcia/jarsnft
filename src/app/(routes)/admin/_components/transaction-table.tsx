"use client"

import { TooltipMsg } from '@/components/(interfaces)'
import { useMarketPlaceContext } from '@/components/hooks/use-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, polygonScan, polygonScanTx, shortenAddress, shortenTxHash } from '@/lib/utils'
import { NewSaleEvent } from '@/types/event'
import {  ContractEvent, useContractEvents } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaCopy, FaRegQuestionCircle, FaRegEye } from "react-icons/fa";

export function TransactionTable() {
  const { marketPlaceContract, loadingMarketPlace, errorMarketPlace } = useMarketPlaceContext()
  const { data: sales, isLoading: loadingSales, isError: errorSales } = useContractEvents(marketPlaceContract, "NewSale")
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5;

  // Filtered sales based on the search term
  const filteredSales = sales
    ? sales.filter((sale) => {
        const transactionId = sale.transaction.transactionHash.toLowerCase();
        const seller = sale.data.listingCreator.toLowerCase();
        const buyer = sale.data.buyer.toLowerCase();
        return (
          transactionId.includes(searchTerm.toLowerCase()) ||
          seller.includes(searchTerm.toLowerCase()) ||
          buyer.includes(searchTerm.toLowerCase())
        );
      })
    : [];

  const totalPages = sales ? Math.ceil(sales.length / itemsPerPage): 1;
  const paginatedSales = sales ? sales.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage): []

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div className="border-black bg-purple-300/70 dark:bg-[#404040] shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] rounded-2xl">
      <div className="p-4">
        <Input
          type="text"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-80 bg-[#EFE9F7] dark:bg-[#2E2E2F] rounded-xl"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-10 max-w-10 flex items-center justify-center'>
              <TooltipMsg message='Preview of the transaction' delay={250}>
                <FaRegQuestionCircle />
              </TooltipMsg>
            </TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Seller (Owner)</TableHead>
            <TableHead>From (Jars)</TableHead>
            <TableHead>To (Buyer)</TableHead>
            <TableHead>Price (POL)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loadingSales && <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>}
          {paginatedSales.length === 0 && !loadingSales && (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No transactions found.
              </TableCell>
            </TableRow>
          )}

          {filteredSales.map((sale) => (
            <TableRow key={sale.transaction.transactionHash}>
              <TableCell className='w-10 max-w-10'>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className='hover:cursor-pointer p-2 hover:bg-muted rounded-lg'>
                      <FaRegEye />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className='w-80'>
                    <div className='flex flex-col gap-4 p-1'>
                      <h1 className='font-bold'>Transaction Info</h1>
                      <div className='flex flex-col'>
                        <span className='font-semibold text-sm'>Block Number:</span>
                        <span className='text-sm'>{sale.transaction.blockNumber}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='font-semibold text-sm'>Block Hash:</span>
                        <span className='text-sm'>{shortenTxHash(sale.transaction.blockHash)}</span>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
              <TableCell className="font-mono flex items-center">
                <Link href={polygonScanTx(sale.transaction.transactionHash)} target="_blank" className='hover:underline hover:text-blue-500'>
                  {shortenTxHash(sale.transaction.transactionHash)}
                </Link>
                <TooltipMsg message='Copy Transaction Hash' delay={350}>
                  <FaCopy className='text-sm hover:cursor-pointer' onClick={() => navigator.clipboard.writeText(sale.transaction.transactionHash)}/>
                </TooltipMsg>
              </TableCell>
              <TableCell className="font-mono">
                <Link href={polygonScan(sale.data.listingCreator)} target="_blank" className='hover:underline hover:text-blue-500'>
                  {shortenAddress(sale.data.listingCreator)}
                </Link>
              </TableCell>
              <TableCell className="font-mono">
                <Link href={polygonScan(sale.transaction.address)} target="_blank" className='hover:underline hover:text-blue-500'>
                  {shortenAddress(sale.transaction.address)}
                </Link>
              </TableCell>
              <TableCell className="font-mono">
                <Link href={polygonScan(sale.data.buyer)} target="_blank" className='hover:underline hover:text-blue-500'>
                  {shortenAddress(sale.data.buyer)}
                </Link>
              </TableCell>
              <TableCell>{ethers.utils.formatEther(sale.data.totalPricePaid)} POL</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6} className="text-center space-x-2">
              <Button
                className={cn("rounded-lg p-1", currentPage === 1 && "hidden")}
                disabled={currentPage === 1}
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeft size={18} />
              </Button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <Button
                className={cn("rounded-lg p-1", currentPage === totalPages && "hidden")}
                disabled={currentPage === totalPages}
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ChevronRight size={18} />
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}