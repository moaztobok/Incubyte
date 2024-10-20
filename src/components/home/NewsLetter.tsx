import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

const NewsLetter = () => {
    const t = useTranslations('Home.newsletter')
    return (
        <SectionWrapper className={{
            section: 'bg-muted'
        }}>
            <FadeElement className='flex-1 gap'>
                <div className='flex flex-col gap-4'>
                    <h2 className='Title'>
                        {t('title')}  </h2>
                    <p>
                        {t('desc')}                  </p>
                    <form className='flex gap-4'>
                        <Input placeholder={t('placeholder')} className='max-w-xs' />
                        <Button className='text-white'>
                            {t('button')}
                        </Button>
                    </form>
                    <p className='text-xs text-muted-foreground'>
                        {t('terms')}
                    </p>
                </div>
            </FadeElement>
        </SectionWrapper>
    )
}

export default NewsLetter