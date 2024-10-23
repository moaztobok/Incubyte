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

interface LangSwitcherProps {
  buttonVariant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link" | null | undefined
  buttonSize?: "default" | "sm" | "lg" | "icon" | null | undefined
  icon?: React.ReactNode,
  dropdownOptions?: Option[]
  className?: string
  align?: "center" | "end" | "start" | undefined
}

interface Option {
  country: string
  code: string
}

export default function LangSwitcher({
  buttonVariant = "outline",
  align = 'center',
  buttonSize = "sm",
  icon = <FiGlobe className="ms-2 h-4 w-4" />,
  dropdownOptions,
  className = ''
}: LangSwitcherProps) {
  const t = useTranslations('Navigation')
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const defaultOptions: Option[] = [
    { country: 'English', code: 'en' },
    { country: 'Français', code: 'fr' },
    { country: 'العربية', code: 'ar' },
  ]

  const options = dropdownOptions || defaultOptions

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant={buttonVariant} size={buttonSize}>
            {t('Language')}
            {icon}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={align}>
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
