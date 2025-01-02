"use client"

import * as React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ShapesIcon } from 'lucide-react'
import CustomTooltip from '../ui/custom-tooltip'

const chains = [
  { name: 'All Chains', slug: '/', icon: '/static/all-chain.png' },
  { name: 'Ethereum', slug: '/ethereum', icon: '/static/ethereum-chain.png' },
  { name: 'Polygon', slug: '/polygon', icon: '/static/polygon-chain.png' },
  { name: 'Base', slug: '/base', icon: '/static/base-chain.png' },
  { name: 'Avalanche', slug: '/avalanche', icon: '/static/avalanche-chain.png' },
  { name: 'Blast', slug: '/blast', icon: '/static/blast-chain.jpg' },
  { name: 'Arbitrum', slug: '/arbitrum', icon: '/static/arbitrum-chain.png' },
  { name: 'Optimism', slug: '/optimism', icon: '/static/optimism-chain.png' },
]

export default function NavChains() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const match = chains.find((chain) => chain.slug === pathname)

  const handleChainClick = (slug: string) => {
    router.push(slug)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className='' variant="ghost">
          {match && <Image src={match.icon} width={16} height={16} alt={match.name} className={cn((pathname === '/ethereum' || '/') && 'invert')}/>}
          {match?.name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-48 grid grid-cols-3 gap-3 bg-background/90'>
        {chains.map((chain) => (
          <CustomTooltip
            key={chain.slug}
            text={chain.name}
            className="py-1 px-2"
          >
            <Button 
              variant="ghost"
              className={cn('w-fit px-3', pathname === chain.slug && 'bg-white hover:bg-current')}
              onClick={() => handleChainClick(chain.slug)}
            >
              {chain.slug === '/' ? 
                <ShapesIcon className={cn('text-2xl text-white', pathname === chain.slug && 'invert')} /> : 
                <Image 
                  src={chain.icon}
                  alt={chain.name}
                  className={cn(chain.name === "Ethereum" && pathname !== chain.slug && 'invert')}
                  width={16} 
                  height={16}
                />
              }
            </Button>
          </CustomTooltip>
        ))}
      </PopoverContent>
    </Popover>
  )
}
