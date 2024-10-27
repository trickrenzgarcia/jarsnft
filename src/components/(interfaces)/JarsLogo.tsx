"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function JarsLogo() {
  const { theme } = useTheme();
  const [logo, setLogo]: any = useState();

  useEffect(() => {
    if (theme === "dark") {
      setLogo(<Image src="/jars_transparent_dark.png" width={50} height={50} alt="jars" />);
    }
    else {
      setLogo(<Image src="/jars_transparent.png" width={50} height={50} alt="jars" />);
    }
  }, [theme]);

  return (
    <div className="animate-pulse">
      {logo}
    </div>
  );
}
