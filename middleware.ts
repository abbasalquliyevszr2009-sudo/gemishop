import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = request.headers.get('authorization')

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      if (user === 'admin' && pwd === 'WAlquliyevabbasGemiShop-2009_W') {
        return NextResponse.next()
      }
    }

    return new NextResponse('Giriş qadağandır!', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    })
  }
}

