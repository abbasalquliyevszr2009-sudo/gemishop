import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // İstifadəçi adı və şifrəni burda dəyiş
    if (user === 'admin' && pwd === 'WAlquliyevabbasGemiShop-2009_W') {
      return NextResponse.next();
    }
  }

  // İstənilən səhifəyə girişi bağlayır
  return new NextResponse('Giriş qadağandır!', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// BÜTÜN SƏHİFƏLƏR ÜÇÜN
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
