import type { Metadata } from 'next'
import {
  useMessages
} from 'next-intl'
import { Chivo, Inter, Noto_Kufi_Arabic } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import { Header } from '../../components/Header'
import Providers from '../provides/Providers'
import './globals.css'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ["latin"] });
const chivo = Chivo({ subsets: ["latin"] });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"] })
export const metadata: Metadata = {
  title: 'ITEXC INCUBYTE',
  description: 'ITEXC INCUBYTE is a startup incubator that aims to help startups grow and scale their businesses.',
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className=''
      suppressHydrationWarning
    >
      <body className={cn('text-lg selection:bg-primary selection:text-white', locale === 'ar' ? kufi.className : chivo.className)}
      >
        <Providers locale={locale} messages={messages} >
          <Header />
          {children}
          <Footer />
        </Providers>

      </body>
    </html>
  )
}
