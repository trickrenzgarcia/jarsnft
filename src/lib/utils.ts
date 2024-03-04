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

export function shortenAddress(address: string): string {
  // Check if the address has at least 10 characters
  if (address.length >= 10) {
    // Extract the first 6 characters
    const start = address.slice(0, 6);
    // Extract the last 4 characters
    const end = address.slice(-4);
    // Return the shortened address
    return `${start}...${end}`;
  } else {
    // If the address is shorter than 10 characters, return it as is
    return address;
  }
}