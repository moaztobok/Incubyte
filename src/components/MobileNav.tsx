"use client"

import { Home, Info, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import LangSwitcher from "./LangSwitcher"
import { ThemeSwitch } from "./ThemeSwitch"
import { useTranslations } from "next-intl"
import LogoIcon from "@/app/icons/logo"

export default function MobileNavSheet() {
    const [open, setOpen] = useState(false)
    const t = useTranslations('Navigation')
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="top" >
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex">
                            INCUBYTE
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4 h-full justify-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        onClick={() => setOpen(false)}
                    >
                        <Home className="h-5 w-5 text-primary" strokeWidth={1} />
                        {t('Home')}
                    </Link>
                    <Link
                        href="/about"
                        className="flex items-center gap-2"
                        onClick={() => setOpen(false)}
                    >
                        <Info className="h-5 w-5 text-primary" strokeWidth={1} />
                        {t('About')}
                    </Link>
                    <div className="flex gap-2
                    ">
                        <LangSwitcher />
                        <ThemeSwitch />
                    </div>

                </div>
            </SheetContent>
        </Sheet>
    )
}