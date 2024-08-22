import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default function CategoryTrend(prop: any) {
  return (
    <div className="mb-6 flex">
      <h3 className="content-center self-start text-2xl font-semibold">Trending in {prop.name}</h3>
      <Button variant="ghost" className="lg:text-md leading-md ml-auto rounded-xl bg-[#1b1b1b] py-4 text-sm font-bold hover:bg-[#252525] lg:px-6 ">
        <Link href="/category/photography">View Category</Link>
      </Button>
    </div>
  );
}
