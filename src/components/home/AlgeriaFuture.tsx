import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { FadeElement, FadeText } from '../ui/fade-text'
import List from '../ui/List'
import ListItem from '../ui/ListItem'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AlgeriaFuture = () => {
    const t = useTranslations('Home.Future-section')
    return (
        <SectionWrapper>
            <FadeElement className='flex-1 flex items-center'>
                <div className='flex flex-col gap-4'>
                    <h2 className='Title'>
                        {t('title')}
                    </h2>
                    <p>
                        {t('desc')}
                    </p>
                    <List>
                        <ListItem text={t('list.one')} />
                        <ListItem text={t('list.two')} />
                        <ListItem text={t('list.three')} />
                    </List>
                </div>
            </FadeElement>
            <FadeElement className='flex-1 flex items-center justify-center'>
                <Image className='w-full' alt='Incubyte' width={500} height={400} src='https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </FadeElement>
        </SectionWrapper>
    )
}

export default AlgeriaFuture