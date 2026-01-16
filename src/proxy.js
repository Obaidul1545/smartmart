import { NextResponse } from 'next/server';

export function proxy(request) {
  const isLoggedin = request.cookies.get('auth')?.value == 'true';

  if (!isLoggedin) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item/:path*'],
};
