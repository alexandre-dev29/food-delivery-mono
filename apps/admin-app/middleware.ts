import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = process.env.ACCESS_TOKEN_SECRET;

async function verify(token: string, secret: string): Promise<any> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
  return payload;
}

export default async function middleware(req: NextRequest) {
  const url = req.url;

  if (
    url.startsWith("/_next") || // exclude Next.js internals
    url.startsWith("/api") || //  exclude all API routes
    url.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  const { cookies } = req;
  const jwt = cookies.get("token").value;

  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/auth/login";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      await verify(jwt, secret); // <---- ERROR COMES FROM HERE
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/auth/login";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return NextResponse.next();
}
