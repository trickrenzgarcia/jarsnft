"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function JarsLogo() {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Image
          src="/jars_transparent_dark.png"
          width={50}
          height={50}
          alt="jars"
        />
      ) : (
        <Image src="/jars_transparent.png" width={50} height={50} alt="jars" />
      )}
    </>
  );
}
