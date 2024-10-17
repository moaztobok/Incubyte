import Link from "next/link"
import SectionWrapper from "./SectionWrapper"

export const Footer = () => {
  return <SectionWrapper className={
    {
      section: 'my-0',
      innerWrapper: 'my-0 py-0 text-sm'
    }
  }>
    <footer className="flex flex-col md:flex-row justify-between flex-wrap w-full gap-16   py-10">
      <div className="flex justify-between flex-wrap gap-8">
        <Link href="/policies" className="underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-services" className="underline">
          Terms of Service
        </Link>
        <Link href="/cookies" className="underline">
          Cookies Settings
        </Link>
      </div>
      <p>© 2024 ITEXC GROUP. All rights reserved</p>
    </footer>
  </SectionWrapper>
}
