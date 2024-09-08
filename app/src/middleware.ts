import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: '/:path*',
};