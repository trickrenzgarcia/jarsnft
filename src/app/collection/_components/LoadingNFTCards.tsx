import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingNFTCards() {
  return (
    <div className="flex w-full items-start">
      <section className="relative p-12">
        <div className="grid h-[400px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
          <Skeleton className="h-[250px] w-[220px] gap-4 rounded-xl border"></Skeleton>
        </div>
      </section>
    </div>
  );
}
