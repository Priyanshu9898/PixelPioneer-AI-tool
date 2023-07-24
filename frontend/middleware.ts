
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get("token")?.value || "";

  const isPublicPath = path === "/login" || path === "/register";

  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/', request.url))
  }

  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/caption/:path*',
    '/:path*',
    '/profile/:path*',
  ],
}