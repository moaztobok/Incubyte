// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { locales } from './i18n';

// Create the middleware configuration
const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  localePrefix: 'always', // 'as-needed' | 'never' | 'always'
  localeDetection: true

});

export default function middleware(request: NextRequest) {

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/(en|ar|fr)/:path*"]
};