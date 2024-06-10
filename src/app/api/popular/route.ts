import { BASE_URL } from "@/lib/ctx";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const response = await fetch(`${BASE_URL}/collections/popular`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 60 * 60 * 24 }
  });

  const data = await response.json();

  return NextResponse.json(data);
}