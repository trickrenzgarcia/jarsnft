import { Category, CollectionPopularData, CollectionResponse } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BACKEND_URL } from "./constant";
import { ethers } from "ethers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const weiToEth = (wei: number | ethers.BigNumberish) => ethers.utils.formatEther(wei);

export const weiToGwei = (wei: number | ethers.BigNumberish) =>
  ethers.utils.formatUnits(wei, "gwei");

export const usdCentsToUSD = (usdCents: number) => usdCents / 100;

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

export function shortenAddress(
  address: string,
  char1: number = 6,
  char2: number = 4,
): string {
  // Check if the address has at least 10 characters
  if (address.length >= 10) {
    // Extract the first 6 characters
    const start = address.slice(0, char1);
    // Extract the last 4 characters
    const end = address.slice(-char2);
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
export function shortenFileName(
  fileName: string,
  first: number = 10,
  last: number = 5,
): string {
  // Check if fileName length is greater than 24
  if (fileName.length > 24) {
    // Extracting file name without extension
    const nameWithoutExtension = fileName.substring(
      0,
      fileName.lastIndexOf("."),
    );

    // Extracting file extension
    const fileExtension = fileName.substring(fileName.lastIndexOf("."));

    // Determine the length to truncate the file name to fit the total length of 24
    const middleChars = 24 - first - last - 3; // Subtracting 3 for the ellipsis

    // Constructing the truncated file name
    const truncatedFileName =
      nameWithoutExtension.substring(0, first) +
      "..." +
      nameWithoutExtension.substring(
        nameWithoutExtension.length - middleChars,
      ) +
      nameWithoutExtension.substring(nameWithoutExtension.length - last) +
      fileExtension;

    return truncatedFileName;
  } else {
    // Return the original file name if its length is not greater than 24
    return fileName;
  }
}

export function ipfsToCfIpfs(urlStr: string): string {
  const url = new URL(urlStr, "https://ipfs.io");

  if (url.hostname !== "ipfs.io") {
    return "";
  }

  if (!urlStr) return "";

  const cid = url.pathname.split("/")[1];
  return `https://cf-ipfs.com/${cid}${url.pathname.slice(cid.length + 1)}${url.search}`;
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  } else {
    // Truncate the string and append "..." to indicate truncation
    return str.slice(0, maxLength) + "...";
  }
}

export function displayName(address: string, maxLength: number = 8) {
  if(address.length <= maxLength) return address;

  // if(address.includes("0x69b05D8ed116Bb160B8a268a4315D2767123eFA1")) {
  //   return "In Auction"
  // }

  return address.slice(2, maxLength).toUpperCase();
}

export function getShortenedURLParam(name: string) {
  // Convert name to lowercase and replace spaces with hyphens
  let urlParam = name.trim().toLowerCase().replace(/\s+/g, "-");

  // Check if the generated URL parameter already exists
  const existingParams = new Set();

  // Function to generate unique URL parameter if it already exists
  function generateUniqueURLParam(param: string) {
    let index = 1;
    let newParam = param;
    while (existingParams.has(newParam)) {
      newParam = `${param}-${index}`;
      index++;
    }
    return newParam;
  }

  // If URL parameter already exists, generate a unique one
  if (existingParams.has(urlParam)) {
    urlParam = generateUniqueURLParam(urlParam);
  }

  // Add the generated URL parameter to the existing set
  existingParams.add(urlParam);

  return urlParam;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

const BASE_URL = BACKEND_URL + '/v1'

export async function getPopularCollections() {
  const response = fetch(`${BASE_URL}/collections/popular`);
  const data = (await response).json();

  return await data as CollectionPopularData[];
}
