import React from 'react'
import SectionWrapper from '../SectionWrapper'
import Image from 'next/image'
import Discord from './Discord'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { FadeElement, FadeText } from '../ui/fade-text'
import { useTranslations } from 'next-intl'

const Community = () => {
    const t = useTranslations('About.Community')
    return (
        <SectionWrapper
            className={{
                innerWrapper: 'relative flex flex-col items-start min-h-[30vh] text-start overflow-hidden md:rounded-md my-auto '
            }}>
            <FadeElement className='z-20 w-full h-full gap-4 my-auto flex flex-1 flex-col justify-center'>
                <FadeText className='Title  text-white' text={t('title')} />
                <FadeText className=' text-white' text={t('desc')}
                    framerProps={{
                        show: { transition: { delay: 0.2 } }
                    }} />

                <FadeElement className='flex gap-2' framerProps={{
                    show: { transition: { delay: 0.4 } }
                }}>
                    <Link href='/#' className='bg-white text-primary  aspect-square h-10 w-10 p-1 rounded-full grid place-items-center'>
                        <Discord />
                    </Link>
                    <Link href='/#' className='bg-white text-primary  aspect-square h-10 w-10 p-1 rounded-full grid place-items-center'>
                        <Facebook size={24} strokeWidth={1} />
                    </Link>
                    <Link href='/#' className='bg-white text-primary  aspect-square h-10 w-10 p-1 rounded-full grid place-items-center'>
                        <Instagram size={24} strokeWidth={1} />
                    </Link>
                    <Link href='/#' className='bg-white text-primary  aspect-square h-10 w-10 p-1 rounded-full grid place-items-center'>
                        <Linkedin size={24} strokeWidth={1} />
                    </Link>
                </FadeElement>
            </FadeElement>

            <div className='bg-gradient-to-t from-primary/40 to-background/30 absolute h-full w-full z-10 inset-0' />
            <Image width={1000} height={300} alt='community' src='/images/community.jpg' className='w-full h-full absolute inset-0 object-cover -z-1' />
        </SectionWrapper>
    )
}

export default Community