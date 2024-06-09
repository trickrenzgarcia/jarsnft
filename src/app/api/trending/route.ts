import { BASE_URL } from "@/lib/ctx";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const trendingSchema = z.object({
  category: z.enum(["art", "photography", "pfp", "gaming"], {
    required_error: "Category is required",
  }),
  page: z.string().min(1),
  limit: z.string().min(1),
});

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  const page = req.nextUrl.searchParams.get("page");
  const limit = req.nextUrl.searchParams.get("limit");

  const trending = trendingSchema.safeParse({
    category,
    page,
    limit,
  });

  if(!trending.success) {
    return NextResponse.json({
      error: trending.error.errors[0].message,
    }, {
      status: 400,
    });
  }

  try { 
    const response = await fetch(`${BASE_URL}/collections/trending?category=${category}&page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 60 * 60 }
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch(error) {
    return NextResponse.json({
      // @ts-ignore
      error: error.message,
    }, {
      status: 500,
    });
  }
}