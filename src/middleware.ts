import { locales } from './i18n'
import { localePrefix } from './navigation'

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix,
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
