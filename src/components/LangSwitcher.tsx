'use client'

import { capitalize } from '@/lib/utils'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'
import { FiGlobe } from 'react-icons/fi'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function LangSwitcher() {
  const t = useTranslations('Navigation')
  interface Option {
    country: string
    code: string
  }
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const options: Option[] = [
    { country: 'English', code: 'en' },
    { country: 'Français', code: 'fr' },
    { country: 'العربية', code: 'ar' },
  ]

  return (
    <div className='flex items-center justify-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            {t('Language')}
            <FiGlobe className="ms-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {options.map(lang => (
            <DropdownMenuItem key={lang.code} asChild>
              <Link
                href={`/${lang.code}/${urlSegments.join('/')}`}
                className={`w-full ${pathname === `/${lang.code}`
                  ? 'bg-accent text-accent-foreground'
                  : ''
                  }`}
              >

                {capitalize(lang.country)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}