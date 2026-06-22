import { NextResponse } from 'next/server';

export function middleware(request) {
  const authHeader = request.headers.get('authorization');
  
  if (authHeader === 'Basic YWRtaW46V0FscXVsaXlldmFiYmFzR2VtaXNob3AtMjAwOV9X') {
    return NextResponse.next();
  }

  return new NextResponse('Giriş qadağandır!', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic' },
  });
}

export const config = {
  matcher: '/admin/:path*',
};
