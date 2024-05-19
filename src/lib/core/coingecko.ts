/**
 * @file coingecko.ts
 * @summary Contains functions to interact with the CoinGecko API for free
 * @version 3.0.1
 */

// https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=php
const BASE_URL = "https://api.coingecko.com/api/v3";

/**
 * Fetches the current price of the Matic Network token in PHP
 * @returns The current price of Matic Network in PHP
 */
export async function getMaticPriceInPHP(value: string): Promise<string> {
  const response = await fetch(`${BASE_URL}/simple/price?ids=matic-network&vs_currencies=php`);
  const data = await response.json();

  let rate = data["matic-network"].php;
  let amount = parseFloat(value);
  
  return (rate * amount).toFixed(2);
}
