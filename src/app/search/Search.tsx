"use client"

import { useSearchParams } from "next/navigation"

import React from 'react'

export default function Search() {
  const search = useSearchParams();
  const searchQuery = search.get('q');

  
  return (
    <div>{searchQuery}</div>
  )
}
