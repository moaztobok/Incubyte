'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import { ThemeSwitch } from './ThemeSwitch'

export const Header = () => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex bg-background fixed top-0 left-0 w-full flex-row items-center justify-between'>
      <div className='flex wrapper my-0 w-full justify-between py-4'>

        <Link href='/' className='flex items-center min-w-40'>
          <LogoIcon />
        </Link>
        <div className='md:flex flex-row items-center gap-3 hidden '>
          <nav className='mr-10 inline-flex gap-5'>
            <Link href={`/about`}>
              {t('About')}
            </Link>
            <Link href=''>{t('Support')}</Link>
          </nav>
          <ThemeSwitch />
          <LangSwitcher />
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
          </a>
        </div>
      </div>
    </div>
  )
}
