'use client'
import { AbstractIntlMessages, NextIntlClientProvider, useMessages } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'
import { ReactNode } from 'react'

const Providers = ({ locale, messages, children }: { locale: string, messages: AbstractIntlMessages, children: ReactNode }) => {
    return (
        <ThemeProvider
            enableSystem
            attribute='class'
            defaultTheme='light'
            themes={[
                'light',
                'dark',
            ]}
        >
            <NextIntlClientProvider
                locale={locale}
                messages={messages as AbstractIntlMessages}
            >
                <NextTopLoader
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    easing='ease'
                    speed={200}
                    shadow='0 0 10px #2299DD,0 0 5px #2299DD'
                    color='var(--primary)'
                    showSpinner={false}
                />
                {children}
            </NextIntlClientProvider>

        </ThemeProvider>
    )
}

export default Providers