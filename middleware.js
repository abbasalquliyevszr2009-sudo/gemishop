import { NextResponse } from 'next/server';

export function middleware(request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const authValue = authHeader.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === 'admin' && pwd === 'WAlquliyevabbasGemishop-2009_W') {
      return NextResponse.next();
    }
  }

  return new NextResponse('Giriş qadağandır!', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic' },
  });
}

export const config = {
  matcher: '/admin/:path*',
};
