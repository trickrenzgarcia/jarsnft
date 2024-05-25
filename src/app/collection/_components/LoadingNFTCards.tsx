import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingNFTCards() {
  return (
    <div className="grid gap-4 grid-cols-2 xl:grid-cols-6 2xl:grid-cols-8">
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton key={index} className="w-[120px] h-[120px]" />
      ))}
    </div>
  );
}
