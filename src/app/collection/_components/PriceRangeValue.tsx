"use client"

import { Input, input } from '@nextui-org/react'
import React, { useState } from 'react'

export default function PriceRangeValue() {
  const [range, setRange] = useState<{ min: number | undefined, max: number | undefined }>({
    min: undefined,
    max: undefined
  })

  const handleMinPriceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputRange = e.target.value

    if(/^\d*\.?\d*$/.test(inputRange)) {
      setRange((prevState) => ({
        ...prevState,
        min: parseInt(inputRange)
      }))
    }

    if(!range.min) setRange((state) => ({...state, min: undefined }))
  }

  const handleMaxPriceValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputRange = e.target.value

    if(/^\d*\.?\d*$/.test(inputRange)) {
      setRange((prevState) => ({
        ...prevState,
        max: parseInt(inputRange)
      }))
    }

    if(!range.max) setRange((state) => ({...state, max: undefined }))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Get the pressed key
    const key = e.key;

    // Allow only numeric values and specific control keys (like backspace, delete, arrow keys)
    if (!/^\d$/.test(key) && key !== '.' && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(key)) {
      e.preventDefault();
    }
  }

  return (
    <div className='flex justify-between gap-3'>
      <Input 
        type='text' value={range.min?.toString()} 
        onChange={handleMinPriceValue}
        onKeyDown={handleKeyPress}
        placeholder='Min price'
      />
      <Input 
        type='text' value={range.max?.toString()} 
        onChange={handleMaxPriceValue}
        onKeyDown={handleKeyPress}
        placeholder='Max price'
      />
    </div>
  )
}