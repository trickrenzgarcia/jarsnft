import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CategoryTrend({ name, link }: any) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-y-2 my-2">
      <h1 className="text-center content-center self-center text-xl lg:text-5xl font-bold">Trending in {name}</h1>
      <div></div>
      <Button variant="ghost" className="lg:text-md leading-md rounded-xl bg-[#1b1b1b] text-sm font-bold hover:bg-[#252525]">
        <Link href={link}>View {name}</Link>
      </Button>
    </div>
  );
}
