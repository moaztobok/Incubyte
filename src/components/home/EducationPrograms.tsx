import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';
import { Card } from '../ui/card';
import { FadeElement, FadeText } from '../ui/fade-text';
import { HeartHandshake, HeartHandshakeIcon, Link, NotebookPen, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

const EducationPrograms = () => {
    const t = useTranslations('Home.Education-programs');
    const data = [
        {
            title: t('list.one'),
            description: t('list.one-desc'),
            icon: <div className='w-16 aspect-square rounded-full bg-primary text-white flex items-center justify-center'>
                <NotebookPen size={24} />
            </div>
        },
        {
            title: t('list.two'),
            description: t('list.two-desc'),
            icon: <div className='w-16 aspect-square rounded-full bg-primary text-white flex items-center justify-center'>
                <HeartHandshakeIcon size={24} />
            </div>
        },
        {
            title: t('list.three'),
            description: t('list.three-desc'),
            icon: <div className='w-16 aspect-square rounded-full bg-primary text-white flex items-center justify-center'>
                <Rocket size={24} />
            </div>
        }
    ];
    return (
        <SectionWrapper className={{
            innerWrapper: 'flex flex-col items',
        }}>
            <div className='flex flex-col items-center gap-8  text-center flex-1'>
                <div className='max-w-3xl text-center'>
                    <FadeText className='Title' text={t('title')} />
                </div>
                <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
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