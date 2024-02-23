import { NextResponse } from "next/server";
import { getUser } from "../auth/[...thirdweb]/route";

export async function GET(req: Request) {
  const user = await getUser();

  return NextResponse.json(user);
}
