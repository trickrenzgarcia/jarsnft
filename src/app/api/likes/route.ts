import { NextResponse } from "next/server";

let likes = 99;

export async function GET() {
  return NextResponse.json({ likes });
}

export async function POST(req: Request) {
  const { amount } = await req.json();

  if (amount) {
    likes += Number(amount);
  }

  return NextResponse.json({ likes });
}
