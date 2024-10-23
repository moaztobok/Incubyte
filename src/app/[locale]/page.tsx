import AlgeriaFuture from '@/components/home/AlgeriaFuture'
import ConnectWithUs from '@/components/home/ConnectWithUs'
import EducationPrograms from '@/components/home/EducationPrograms'
import JointUs from '@/components/home/JointUs'
import NewsLetter from '@/components/home/NewsLetter'
import HeroSection from '../../components/home/HeroSection'

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
