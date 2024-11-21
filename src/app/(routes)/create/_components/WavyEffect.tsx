"use client";

import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyEffect() {
  const { theme } = useTheme();

  return (
    <WavyBackground
      key={theme} // Re-renders WavyBackground whenever the theme changes
      className="my-auto w-screen"
      backgroundFill={theme === "light" ? "white" : "black"}
    />
  );
}
