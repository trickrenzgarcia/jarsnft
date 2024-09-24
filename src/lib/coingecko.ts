/**
 * @file coingecko.ts
 * @summary Contains functions to interact with the CoinGecko API for free
 * @version 3.0.1
 */

// https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=php

/**
 * Fetches the current price of the Matic Network token in PHP
 * @returns The current price of Matic Network in PHP
 */
export async function getMaticPriceInPHP(value: string): Promise<string> {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=php", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    next: {
      revalidate: 60 * 60 * 3
    },
    cache: "force-cache"
  });
  const data = await response.json();

  let rate = data["matic-network"].php;
  let amount = parseFloat(value);
  
  return (rate * amount).toFixed(3);
}
