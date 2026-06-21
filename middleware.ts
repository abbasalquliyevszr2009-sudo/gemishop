import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (authHeader) {
    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    // Bura istifadəçi adın və şifrən:
    if (auth[0] === 'admin' && auth[1] === '12345') {
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

