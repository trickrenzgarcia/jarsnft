import { NextResponse } from "next/server";

type RouteParams = { params: { address: string } };

async function getCollection(contract: string, cacheTime?: number) {
  const response = fetch(`http://localhost:5000/collection/${contract}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 60 * 60 * 24 || cacheTime },
  });
  const data = (await response).json();
  return data;
}

export async function GET(req: Request, { params }: RouteParams) {
  const contract = params.address;
  const data = await getCollection(contract);
  return NextResponse.json(data);
}
