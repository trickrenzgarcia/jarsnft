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

/** 
 * Shortens the file name by keeping the first `first` characters and the last `last` characters
 * @param fileName The file name to be shortened
 * @param first The number of characters to keep from the start of the file name
 * @param last The number of characters to keep from the end of the file name
 * @default first 10
 * @default last 5
 * @returns The shortened file name
*/
export function shortenFileName(fileName: string, first: number = 10, last: number = 5): string {
  // Check if fileName length is greater than 24
  if (fileName.length > 24) {
    // Extracting file name without extension
    const nameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.'));

    // Extracting file extension
    const fileExtension = fileName.substring(fileName.lastIndexOf('.'));

    // Determine the length to truncate the file name to fit the total length of 24
    const middleChars = 24 - first - last - 3; // Subtracting 3 for the ellipsis

    // Constructing the truncated file name
    const truncatedFileName = nameWithoutExtension.substring(0, first) + "..." + nameWithoutExtension.substring(nameWithoutExtension.length - middleChars) + nameWithoutExtension.substring(nameWithoutExtension.length - last) + fileExtension;

    return truncatedFileName;
  } else {
    // Return the original file name if its length is not greater than 24
    return fileName;
  }
}