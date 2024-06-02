import { jars } from "@/lib/core/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  if(!q) {
    return NextResponse.json(null);
  }

  const results = await jars.getSearchResults(q);
  console.log(results);
  return NextResponse.json(results);
}