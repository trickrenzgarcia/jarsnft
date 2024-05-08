export async function fetchFromApi(
  endpoint: string,
  cacheTime?: number,
): Promise<any> {
  const _url = new URL("https://api.coingecko.com/api/v3/" + endpoint);
  const response = await fetch(_url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  });

  const data = await response.json();
  return data;
}

export async function getTrendingCoins() {
  const data = await fetchFromApi("search/trending");
  return data.coins.splice(0, 3);
}

export async function getNftMarketCap() {
  const data = await fetchFromApi("search/trending");
  return data.nfts.splice(0, 3);
}

export async function getCoingeckoGlobalData(cacheTime?: number): Promise<any> {
  const apiUrl: string = "https://api.coingecko.com/api/v3/global";
  const response: Response = await fetch(apiUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  });
  const data = await response.json();
  return data;
}

export async function getGasFee(cacheTime?: number): Promise<any> {
  const apiUrl: string =
    "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=1YFCZB8YSYNTWPS4DCRN91G2P3VHCGZ1GE";
  const response: Response = await fetch(apiUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  });
  const data = await response.json();
  return data;
}
