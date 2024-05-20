"use client"

import React from 'react'

type CreateAuctionProps = {
  sellState: 'idle' | 'confirmation' | 'success';
  setSellState: React.Dispatch<React.SetStateAction<"idle" | "confirmation" | "success">>;
}

export default function CreateAuction({ sellState, setSellState }: CreateAuctionProps) {
  return (
    <div>CreateAuction</div>
  )
}
