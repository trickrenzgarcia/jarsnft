"use client";

import { Spinner } from "@nextui-org/react";

export default function LoadingBackground() {
  return (
    <div className="h-[calc(100vh-70px)] w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <Spinner label="Loading..." />
      </div>
    </div>
  );
}
