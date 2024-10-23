'use client'
import { useTranslations } from 'next-intl'
import LogoIcon from '../app/icons/logo'
import LangSwitcher from './LangSwitcher'
import { ThemeSwitch } from './ThemeSwitch'
import { Link } from '@/i18n'

export const Header = () => {
  const t = useTranslations('Navigation')
  return (
    <header className='flex  fixed top-0 bg-background left-0 z-10 w-full flex-row items-center justify-between'>
      <div className='flex wrapper my-0 w-full justify-between py-4'>
        <Link href='/' className='flex items-center min-w-40'>
          <LogoIcon />
        </Link>
        <div className='md:flex flex-row items-center gap-3 hidden font-medium'>
          <nav className='inline-flex gap-6'>
            <Link className='hover:text-primary' href='/'>{t('Home')}</Link>
            <Link className='hover:text-primary' href={`/about`}>
              {t('About')}
            </Link>
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
    </header>
  )
}
