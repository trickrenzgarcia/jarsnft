"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function SwitchMode() {
  const { theme, setTheme } = useTheme();
  
  if (!theme) return null;

  return (
    <Button
      variant="ghost"
      className={cn(
        "cursor-pointer px-2 hover:animate-in",
        theme === "dark" ? "hover:text-yellow-400 " : "hover:text-purple-700",
      )}
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    >
      {theme === "dark" ? <SunMedium /> : <Moon />}
    </Button>
  );
}
