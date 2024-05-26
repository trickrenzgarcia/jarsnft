"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React from "react"
import useOwnedNFTs from "../_hooks/useOwnedNFTs"
import { Image } from "@nextui-org/react"
import { ipfsToCfIpfs } from "@/lib/utils"
import { cn } from "@/utils/cn"
import { Skeleton } from "@/components/ui/skeleton"
import updateAvatar from "@/app/actions/updateAvatar"
import { useUserContext } from "@/components/(providers)"

type EditModeAvatarDialogProps = {
  children: React.ReactNode,
  address: string,
}

export function EditModeAvatarDialog({ children, address }: EditModeAvatarDialogProps) {
  const { nfts, isLoading, isError } = useOwnedNFTs(address);
  const [selectedNFT, setSelectedNFT] = React.useState<string>("");
  const { setRefreshAvatar } = useUserContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl">Choose an NFT from Your Wallet</DialogTitle>
        </DialogHeader>
        <div className="w-full max-h-screen md:max-h-[412px]">
          {isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
          )}
          {!isLoading && nfts && nfts.length === 0 && (
            <div className="flex gap-3 py-12 flex-col items-center justify-center">
              <Image src="/jars_muted.png" width={150} height={150} alt="Not Found" />
              <p className="text-sm">No NFTs found.</p>
            </div>
          )}
          {nfts && nfts.length > 0 && (
            <div className={cn("w-full pr-1 h-full scroll-smooth overflow-y-scroll")}>
              <div className="columns-3 gap-3 space-y-2">
              {nfts.map((nft, i) => (
                nft.previews.image_medium_url ?
                (<Image 
                  key={i} 
                  src={nft.previews.image_medium_url} 
                  alt={nft.name}
                  className={cn((selectedNFT === (`${nft.image_url} ${nft.token_id}`)) && "border-2 border-purple-500")}
                  onClick={(e) => {
                    e.preventDefault()
                    if((selectedNFT === (`${nft.image_url} ${nft.token_id}`))) {
                      setSelectedNFT("")
                    } else {
                      setSelectedNFT(`${nft.image_url} ${nft.token_id}`)
                    }
                  }}
                />) : null
              ))}
              </div>
              
            </div>
          
          )}
        </div>
        <DialogFooter className="flex justify-evenly gap-2">
          <DialogClose asChild className="w-full">
            <Button type="button" variant="secondary">Close</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" variant="default" className="w-full" disabled={!nfts || !selectedNFT}
              onClick={async (e) => {
                // Save the selected NFT to the user profile
                await updateAvatar(address, selectedNFT.split(" ")[0]);
                setRefreshAvatar(self.crypto.randomUUID());
                setSelectedNFT("");
              }}
            >Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}