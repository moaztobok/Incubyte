import { useTranslations } from 'next-intl'
import HeroSection from './components/home/HeroSection'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <>
      <HeroSection />
    </>
  )
}
