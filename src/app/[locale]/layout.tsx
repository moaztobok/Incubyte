import type { Metadata } from 'next'
import {
  useMessages
} from 'next-intl'
import { Inter, Noto_Kufi_Arabic } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Header } from '../../components/Header'
import Providers from '../provides/Providers'
import './globals.css'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"] })
export const metadata: Metadata = {
  title: 'ITEXC INCUBYTE',
  description: 'create next app By Yahya Parvar!'
}

export default function RootLayout({
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
      <body className={cn('text-lg', inter.className)}
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
