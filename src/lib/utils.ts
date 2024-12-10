import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// replace ipfs:// with https://ipfs.io/ipfs/
export function formatIPFS(ipfs: string) {
  return ipfs.replace("ipfs://", process.env.NEXT_PUBLIC_IPFS_GATEWAY!);
}

export function truncate(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
