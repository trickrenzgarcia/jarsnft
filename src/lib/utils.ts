import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(number: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixIndex = 0;

  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex++;
  }

  return (
    number.toLocaleString("en-US", { maximumFractionDigits: 2 }) +
    suffixes[suffixIndex]
  );
}
