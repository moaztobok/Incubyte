import { useTranslations } from 'next-intl'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'

const Story = () => {
    const t = useTranslations('About.Story')
    return (
        <SectionWrapper>
            <FadeElement className="flex-1  ">
                <div className="flex flex-col gap-4 justify-center h-full">
                    <p>
                        {t('our-story')}
                    </p>
                    <h2 className="Title">
                        {t('title')}
                    </h2>
                </div>
            </FadeElement>
            <FadeElement className="flex-1 flex justify-center items-center">
                <p>
                    {t('desc')}
                </p>
            </FadeElement>
        </SectionWrapper>
    )
}

export default Story