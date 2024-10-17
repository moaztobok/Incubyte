import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';
import { Card } from '../ui/card';
import { FadeElement, FadeText } from '../ui/fade-text';
import { HeartHandshake, HeartHandshakeIcon, Link, NotebookPen, Rocket } from 'lucide-react';

const EducationPrograms = () => {

    const data = [
        {
            title: "Accelerate Your Startup Journey with Tailored Incubation Services and Support",
            description: "Our education programs are designed to equip you with essential skills for success.",
            icon: <div className='w-16 aspect-square rounded-full bg-primary text-white flex items-center justify-center'>
                <NotebookPen size={24} />
            </div>
        },
        {
            title: "Unlock Your Potential with Expert Mentorship and Guidance",
            description: "Our mentorship programs connect you with experienced professionals to guide your growth.",
            icon: <div className='w-16 aspect-square rounded-full bg-primary text-white flex items-center justify-center'>
                <HeartHandshakeIcon size={24} />
            </div>
        },
        {
            title: "Build Your Network and Access Valuable Resources for Your Startup",
            description: "We facilitate access to resources and connections that foster entrepreneurial success.",
            icon: <div className='w-16 aspect-square rounded-full bg-primary text-white flex items-center justify-center'>
                <Rocket size={24} />
            </div>
        }
    ];
    return (
        <SectionWrapper className={{
            innerWrapper: 'flex flex-col',
        }}>
            <div className='flex flex-col items-center gap-8  text-center'>
                <div className='max-w-3xl text-center'>
                    <FadeText className='Title' text='Empower Your Future with Our Comprehensive Education Programs and Resources' />
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    {data.map((data, index) => (
                        <FadeElement key={index}>
                            <Card className="border-none flex w-full h-full flex-col items-center gap-4 shadow-none">
                                {/* <div className="w-full relative">
                                    <Image
                                        width={24}
                                        height={24}
                                        alt={''}
                                        src={data.icon}
                                        className="object-cover aspect-[6/4] top-0 left-0"
                                    />
                                </div> */}
                                {data.icon}
                                <h2 className="text-lg font-semibold hover:underline">
                                    {data.title}
                                </h2>
                                <span className="text-muted-foreground">
                                    {data.description}
                                </span>
                            </Card>
                        </FadeElement>
                    ))}</div>

            </div>
        </SectionWrapper>
    )
}

export default EducationPrograms