import Image from 'next/image'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'
import { useTranslations } from 'next-intl'

const Gap = () => {
    const t = useTranslations('About.Gap')
    return (
        <SectionWrapper
            className={{
                section: 'bg-muted',
            }}>
            <FadeElement className="flex-1">
                <div className="flex flex-col gap-4 justify-center h-full">
                    <h2 className="Title">
                       {t('title')}
                    </h2>
                    <p className='text-balance'>
                       {t('desc')}
                    </p>
                </div>
            </FadeElement>
            <FadeElement className="flex-1 flex justify-center items-center">
                <div className='w-1/2 '>
                    <Image src='/images/incubyte-by-itexc.svg' alt='incubyte by itexc' width={500} height={500} />
                </div>
            </FadeElement>
        </SectionWrapper>
    )
}

export default Gap