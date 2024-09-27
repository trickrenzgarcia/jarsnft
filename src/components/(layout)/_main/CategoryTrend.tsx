import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CategoryTrend({ name, link }: any) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-y-2 my-2">
      <h1 className="text-center content-center self-center text-xl lg:text-5xl font-bold">Trending in {name}</h1>
      <div></div>
      <Button className="lg:text-md leading-md rounded-xl text-sm font-bold">
        <Link href={link}>View {name}</Link>
      </Button>
    </div>
  );
}