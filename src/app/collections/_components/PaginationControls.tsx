import {
  PaginationContent,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  Pagination,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export default function PaginationControls({
  searchParams,
  className,
  hasPrevPage,
  hasNextPage,
  collectionLength,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  className: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  collectionLength: number;
}) {
  const page = searchParams["page"] ?? 1;
  const limit = 5;
  const category = (searchParams["category"] as string) ?? "all";

  let startPage = Number(page) - 4;
  let endPage = startPage + 8;

  const pages = [];
  const totalPages = Math.ceil(collectionLength / limit);

  if (Number(page) < 5) {
    startPage = 1;
  }
  if (totalPages < endPage) {
    endPage = totalPages;
  }

  const diff = startPage - endPage + 8;
  if (startPage - diff > 0) {
    startPage -= diff;
  }

  for (let index = startPage; index <= endPage; index++) {
    pages.push(index);
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={!hasPrevPage}
            tabIndex={!hasPrevPage ? -1 : undefined}
            href={`?category=${category}&page=${Number(page) - 1}`}
            className={cn({ "pointer-events-none opacity-50": !hasPrevPage })}
            scroll={false}
          />
        </PaginationItem>
        {startPage > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`?category=${category}&page=${page}`} scroll={false}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            aria-disabled={!hasNextPage}
            tabIndex={!hasNextPage ? -1 : undefined}
            href={`?category=${category}&page=${Number(page) + 1}`}
            className={cn({ "pointer-events-none opacity-50": !hasNextPage })}
            scroll={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
