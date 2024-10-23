import { useTranslations } from 'next-intl'
import React from 'react'

const HeroSection = () => {
    const t = useTranslations('About.Hero')
    return (
        <div className=' grid place-items-center relative overflow-hidden'>
            {/* <span className='w-48 aspect-square rounded-full bg-primary blur-[100px] -top-20 end-0 absolute z-[5]' /> */}
            <div className='flex flex-col gap-4 items-center justify-center wrapper'>
                <h1 className='md:text-5xl Title  font-bold max-w-screen-md text-center'>
                    {t('aim')}<span className='text-primary '>
                        {' '} {t('algeria')}</span>
                </h1>
                <p className='text-primary font-semibold '>
                    {t('slogan')}
                </p>
            </div>
        </div>
    )
}

export default HeroSection