"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function PaginationUI({
  collectionsLength,
  start,
  end,
}: {
  collectionsLength: number;
  start: number;
  end: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "5";

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (start > 0)
                router.push(`/?page=${Number(page) - 1}&per_page=${perPage}`);
            }}
            href={`${pathname}/?page=${start > 0 ? Number(page) - 1 : 1}&per_page=${perPage}`}
          />
        </PaginationItem>
        <PaginationItem className="mx-4">
          {page} / {Math.ceil(10 / Number(perPage))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              console.log(end);
              console.log(collectionsLength);
              if (end < collectionsLength)
                router.push(`/?page=${Number(page) + 1}&per_page=${perPage}`);
            }}
            href={`${pathname}/?page=${end < collectionsLength ? Number(page) + 1 : Number(page)}&per_page=${perPage}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
