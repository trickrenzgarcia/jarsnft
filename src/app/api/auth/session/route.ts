import { NextResponse } from "next/server";
import { getUser } from "../[...thirdweb]/route";

export async function GET(req: Request) {
  const user = await getUser();

  if (!user) {
    return NextResponse.json({ success: false, message: "Not authorized" });
  }

  return NextResponse.json({ success: true, user });
}
