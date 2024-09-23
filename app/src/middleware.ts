
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest)
{
  const token = await getToken({ req, secret })

  if (req.nextUrl.pathname.startsWith('/_next') || req.nextUrl.pathname.includes('.')) {
      return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith('/api/auth/')) {
    return NextResponse.next();
  }

  if (!token) {
    if(!req.nextUrl.pathname.startsWith("/auth") || req.nextUrl.pathname.endsWith("verifyIdentity")) return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  console.log("TOKEN: ", token)

  if(token && !token.verified)
  {
    if(!req.nextUrl.pathname.endsWith("verifyIdentity") && !req.nextUrl.pathname.endsWith("error")) return NextResponse.redirect(new URL(`/auth/${token.name}/verifyIdentity`, req.url));
    if(req.nextUrl.pathname !== `/auth/${token.name}/verifyIdentity` && !req.nextUrl.pathname.endsWith("error")) return NextResponse.redirect(new URL('/auth/error', req.url))
  }
  
  if(token && token.verified && req.nextUrl.pathname.startsWith("/auth")) return NextResponse.redirect(new URL("/", req.url))

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
