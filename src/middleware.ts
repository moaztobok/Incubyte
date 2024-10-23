// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Create the middleware configuration
const intlMiddleware = createMiddleware({
  // Define your locales
  locales: ['en', 'fr', 'ar'],

  // Set your default locale
  defaultLocale: 'en',

  // Optional: Customize localePrefix to control URL structure
  localePrefix: 'always', // 'as-needed' | 'never' | 'always'

  // Optional: Add locale detection
  localeDetection: true
});

// Export the middleware handler
export default function middleware(request: NextRequest) {
  // Optional: You can add custom logic here before calling intlMiddleware
  // For example, checking cookies, headers, or user preferences

  return intlMiddleware(request);
}

// Configure the middleware matcher
export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /images (e.g. public files)
  // - /favicon.ico (favicon file)
  matcher: ['/((?!api|_next|_vercel|images|favicon.ico).*)']
};