import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingNFTCards() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {Array.from({ length: 4 }).map((_, index: number) => (
        <Skeleton key={index} className="min-h-[268px] min-w-[212px]" />
      ))}
    </div>
  );
}
