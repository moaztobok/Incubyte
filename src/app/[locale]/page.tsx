import AlgeriaFuture from '@/components/home/AlgeriaFuture'
import HeroSection from '../../components/home/HeroSection'
import EducationPrograms from '@/components/home/EducationPrograms'
import JointUs from '@/components/home/JointUs'
import NewsLetter from '@/components/home/NewsLetter'
import ConnectWithUs from '@/components/home/ConnectWithUs'

export default function page() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <AlgeriaFuture />
      <EducationPrograms />
      <JointUs />
      <ConnectWithUs />
      <NewsLetter />
    </main>
  )
}
