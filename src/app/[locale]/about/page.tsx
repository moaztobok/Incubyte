import Community from '@/components/about/Community'
import HeroSection from '@/components/about/HeroSection'
import Incubyte from '@/components/about/Incubyte'
import OurMission from '@/components/about/OurMission'
import Story from '@/components/about/Story'
import Gap from '@/components/about/TheGap'

export default function About() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <Story />
      <Gap />
      <Incubyte />
      <OurMission />
      <Community />
    </main>
  )
}
