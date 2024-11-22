"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { open_sans, poppins } from "@/lib/fonts";
import React from "react";

const details = [
  {
    detail: "Total Volume",
    value: 1,
    currency: "POL",
  },
  {
    detail: "Floor Price",
    value: 1,
    currency: "POL",
  },
  { detail: "Listed", value: 1 },
  { detail: "Owners(Unique)", value: 1 },
];

export default function NFTBannerLoading() {
  return (
    <main className="flex w-full flex-col">
      <div className="relative h-[200px] w-auto md:h-[400px]"></div>
      <div className="absolute hidden h-[400px] w-full px-7 py-6 md:block">
        <section className="mb-4 flex justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-[125px] w-[125px] rounded-xl border" />
            <div className={cn("flex w-[500px] flex-col gap-2", open_sans.className)}>
              <Skeleton className="h-7 w-40 border" />
              <Skeleton className="h-5 w-32 border" />
            </div>
          </div>
        </section>
        <section className="mb-3 flex w-full justify-between">
          <div className="flex h-[160px] w-[500px] flex-col gap-1 overflow-x-hidden text-sm font-semibold">
            <Skeleton className="h-5 w-full border" />
            <Skeleton className="h-5 w-[80%] border" />
            <Skeleton className="h-5 w-[72%] border" />
            <Skeleton className="h-5 w-[85%] border" />
          </div>
          <div className="hidden items-center gap-6 pl-3 lg:flex">
            {details.map((detail, i) => (
              <div key={i} className={cn(poppins.className, "w-[110px]")}>
                <Skeleton className="h-20 w-20 border" />
              </div>
            ))}
          </div>
        </section>
        <div className="mb-3 flex gap-3">
          <Skeleton className="h-5 w-32 border"> </Skeleton>
          <Skeleton className="h-5 w-32 border"> </Skeleton>
          <Skeleton className="h-5 w-32 border"> </Skeleton>
          <Skeleton className="h-5 w-32 border"> </Skeleton>
        </div>
      </div>
    </main>
  );
}
