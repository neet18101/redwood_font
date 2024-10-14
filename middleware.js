// middleware.js
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Secret to decrypt the token
const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const token = await getToken({ req, secret });
  alert(JSON.stringify(token))

  const { pathname } = req.nextUrl;

  // Allow requests if the following is true:
  // 1. Token exists (user is authenticated)
  // 2. The user is accessing a public route like /admin (sign-in page)
  if (token || pathname === '/admin') {
    return NextResponse.next();
  }

  // Redirect unauthenticated user trying to access a protected route
  if (pathname.startsWith('/admin/dashboard')||pathname.startsWith('/admin/add-content-menu')||pathname.startsWith('/admin/add-menu')) {
    return NextResponse.redirect(new URL('/admin', req.url));
  }else{

  }
}

// Define routes that should use this middleware
export const config = {
  matcher: ['/admin/dashboard/:path*,/admin/add-content-menu/:path*,/admin/add-menu/:path*'], // Protect the dashboard and sub-paths
};
