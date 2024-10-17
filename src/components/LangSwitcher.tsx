'use client'

import { capitalize } from '@/lib/utils'
import Link from 'next/link'
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

export default function LangSwitcher() {
  interface Option {
    country: string
    code: string
  }
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const options: Option[] = [
    { country: 'English', code: 'en' },
    { country: 'Deutsch', code: 'de' },
    { country: 'Français', code: 'fr' },
    { country: 'Español', code: 'es' },
    { country: 'Русский', code: 'ru' },
    { country: '日本語', code: 'ja' },
    { country: 'العربية', code: 'ar' },
    { country: 'فارسی', code: 'fa' }
  ]

  return (
    <div className='flex items-center justify-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            Language
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
                <button
                  lang={lang.code}
                  className="w-full text-left"
                >
                  {capitalize(lang.country)}
                </button>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}