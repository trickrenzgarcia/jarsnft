import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingNFTCards() {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton key={index} className="size-80" />
      ))}
    </div>
  );
}