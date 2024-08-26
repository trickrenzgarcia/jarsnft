import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CategoryTrend({ name, link }: any) {
  return (
    <div className="my-2 flex flex-col justify-between gap-y-2 lg:flex-row">
      <h1 className="content-center self-center text-center text-2xl font-bold lg:text-4xl">Trending in {name}</h1>
      <div></div>
      <Button className="lg:text-md leading-md rounded-xl text-sm font-bold">
        <Link href={link}>View {name}</Link>
      </Button>
    </div>
  );
}
