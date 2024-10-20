import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'
import { Mail, MapPinIcon, Phone } from 'lucide-react'
import Map from './Map'
import { useTranslations } from 'next-intl'

const ConnectWithUs = () => {
    const t = useTranslations('Home.connect')

    return (
        <SectionWrapper>
            <FadeElement className='flex flex-col gap-4 flex-[0.5]'>
                <h2 className='Title'>
                {t('title')}
                </h2>
                <p className='text-muted-foreground text-sm'>
    {t('desc')}
                    </p>
                <div className='flex flex-col gap-6 my-4 text-md'>
                    <FadeElement>
                        <div className='flex flex-col gap-2'>
                            <Mail />
                            <h2 className='font-semibold text-lg'>{t('email')}</h2>
                            <p>{t('')}</p>
                            <p className='text-primary'>
                                contact@itexcgroup.com                            </p>
                        </div>
                    </FadeElement>
                    <FadeElement>
                        <div className='flex flex-col gap-2'>
                            <Phone />
                            <h2 className='font-semibold text-lg'>{t('phone')}</h2>
                            <p>{t('phone-desc')}</p>
                            <p className='text-primary'>
                                contact@itexcgroup.com
                            </p>
                        </div>
                    </FadeElement>
                    <FadeElement>
                        <div className='flex flex-col gap-2'>
                            <MapPinIcon />
                            <h2 className='font-semibold text-lg'>
                            {
                                t('office')
                            }
                            </h2>
                            <p>    {
                                t('office-desc')
                            }</p>
                            <p className='text-primary'>
                            {
                                t('address')
                            }

                            </p>
                        </div>
                    </FadeElement>
                </div>
            </FadeElement>
            <FadeElement className='flex-1'>
                <Map />
            </FadeElement>
        </SectionWrapper>
    )
}

export default ConnectWithUs