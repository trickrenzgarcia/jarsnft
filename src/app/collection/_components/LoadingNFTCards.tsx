import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingNFTCards() {
  return (
    <div className="flex w-full items-start">
      <section className="relative p-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
          <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
          <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
          <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
          <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
          <Skeleton className="h-[291px] w-[291px] rounded-xl border"></Skeleton>
        </div>
      </section>
    </div>
  );
}
