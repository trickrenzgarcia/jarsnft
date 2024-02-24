"use client"

import { Moon, Sun } from 'lucide-react'

type ModeToggleProps = {
  setTheme: (theme: string) => void,
  theme: string | undefined
}
export default function ModeToggle({ setTheme, theme } : ModeToggleProps) {
  
  return (
    <div className='w-[50px] h-[50px] bg-gray-200 dark:bg-card text-2xl rounded-[10px] cursor-pointer'>
      {theme === "dark" ? (
        <div className='w-full h-full flex items-center justify-center' onClick={() => setTheme("light")}>
          <Moon className='h-6 w-6' />
        </div>

      ) : (
        <div className='w-full h-full flex items-center justify-center' onClick={() => setTheme("dark")}>
          <Sun className='h-6 w-6' />
        </div>
      )}
    </div>
  )
}