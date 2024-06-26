"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "next-themes";

export default function WavyEffect() {
  const { theme } = useTheme();
  return <WavyBackground backgroundFill={theme === "light" ? "white" : "black"}/>;
}
