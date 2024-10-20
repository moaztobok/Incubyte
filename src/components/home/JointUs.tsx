import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

const JointUs = () => {
    const t = useTranslations('Home.join-us')
    return (
        <SectionWrapper className={{
            section: 'bg-muted'
        }}>
            <FadeElement className='flex-1'>
                <div className='flex flex-col gap-4'>
                    <h2 className='Title'>
                        {t('title')}
                    </h2>
                    <p>
                        {t('desc')}
                    </p>
                </div>
            </FadeElement>
            <FadeElement className='flex-1'>
                <div className='flex gap-2 md:justify-center'>
                    <Button className='text-white'>
                        {t('register')}
                    </Button>
                    <Button variant={'outline'} className='bg-background'>
                        {t('apply')}
                    </Button>
                </div>
            </FadeElement>
        </SectionWrapper>
    )
}

export default JointUs