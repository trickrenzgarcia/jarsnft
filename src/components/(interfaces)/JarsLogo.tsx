"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export default function JarsLogo() {
  const { theme } = useTheme();
  const [logo, setLogo]: any = useState();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      setLogo(<Image src="/jars_transparent_dark.png" width={50} height={50} alt="jars" />);
      isLoading(false);
    } else {
      setLogo(<Image src="/jars_transparent.png" width={50} height={50} alt="jars" />);
      isLoading(false);
    }
  }, [theme]);

  return loading ? <Skeleton className="mr-2 size-[50px]" /> : <div className="animate-pulse">{logo}</div>;
}
