import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // retrieve the current response
  const res = NextResponse.next();

  // if the incoming is for the desired API endpoint
  if (req.nextUrl.pathname === "/special-data") {
    res.headers.append("Access-Control-Allow-Credentials", "false");
    res.headers.append("Access-Control-Allow-Origin", "https://example.com");
    res.headers.append("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
    res.headers.append("Access-Control-Allow-Headers", "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date");
  } else {
    // generic CORS policy omitted for brevity....
  }

  return res;
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: "/api/:path*",
};
