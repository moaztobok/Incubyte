import type { Metadata } from 'next'
import {
  useMessages
} from 'next-intl'
import { Inter, Noto_Kufi_Arabic } from 'next/font/google'

import { cn } from '@/lib/utils'
import Providers from '../provides/Providers'
import { Header } from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"] })
export const metadata: Metadata = {
  title: 'Next Temp',
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
      className={cn('scroll-smooth font-medium ', inter.className,)}
      suppressHydrationWarning
    >
      <body className={cn(inter.className)}
      >
        <Providers locale={locale} messages={messages} >
          <Header />
          {children}
        </Providers>

      </body>
    </html>
  )
}
