import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Zap, BookOpen, Rocket } from 'lucide-react'
import { FadeElement, FadeText } from '../ui/fade-text'
import { useTranslations } from 'next-intl'

const OurPrograms = () => {
    const t = useTranslations('About.Mission')
    const tabContent = {
        skillBoosters: {
            title: t('list.one.title'),
            content: t('list.one.desc'),
            icon: Zap
        },
        pathPrograms: {
            title: t('list.two.title'),
            content: t('list.two.desc'),
            icon: BookOpen
        },
        incubator: {
            title: t('list.three.title'),
            content: t('list.three.desc'),
            icon: Rocket
        }
    }

    return (
        <Tabs defaultValue="skillBoosters" className="wrapper flex flex-col gap-4">
            <FadeText text={t('title')} className='Title' />
            <FadeText text={t('desc')} />

            <FadeElement>

                <TabsList className='flex flex-col md:flex-row w-full'>
                    <TabsTrigger value="skillBoosters" className='data-[state=active]:bg-primary flex-1 w-full data-[state=active]:text-white text-lg'>
                        <FadeText text={t('list.one.title')} />
                    </TabsTrigger>
                    <TabsTrigger value="pathPrograms" className='data-[state=active]:bg-primary flex-1 w-full data-[state=active]:text-white text-lg'>                    <FadeText framerProps={{
                        show: { transition: { delay: 0.2 } }
                    }} text={t('list.two.title')} />
                    </TabsTrigger>
                    <TabsTrigger value="incubator" className='data-[state=active]:bg-primary flex-1 w-full data-[state=active]:text-white text-lg h-fit'> <FadeText framerProps={{
                        show: { transition: { delay: 0.4 } }
                    }} text={t('list.three.title')} /></TabsTrigger>
                </TabsList>
            </FadeElement>

            {Object.entries(tabContent).map(([key, { title, content, icon: Icon }]) => (
                <TabsContent key={key} value={key}>
                    <FadeElement>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Icon className="mr-2 text-primary" />
                                    {title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">{content}</p>
                            </CardContent>
                        </Card>
                    </FadeElement>
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default OurPrograms