"use client";

import dynamic from 'next/dynamic'
import { useTheme } from "next-themes";

const LuMoon = dynamic(() => import("react-icons/lu").then((mod) => mod.LuMoon), { ssr: false });
const LuSun = dynamic(() => import("react-icons/lu").then((mod) => mod.LuSun), { ssr: false });

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="
      h-[50px] w-[50px] flex justify-center items-center cursor-pointer rounded-[10px] 
      bg-gray-200 dark:bg-card"
      onClick={(e) => {
        e.preventDefault();
        theme === "dark" ? setTheme("light") : setTheme("dark")}
      }
    >
      {theme === "dark" ? 
      <LuSun className="text-xl" suppressHydrationWarning /> 
      :
      <LuMoon className="text-xl" suppressHydrationWarning />
      }
      
    </div>
  );
}
