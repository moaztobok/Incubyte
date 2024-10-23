
import List from "@/components/ui/List";
import ListItem from "@/components/ui/ListItem";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import { FadeElement } from "../ui/fade-text";
import { useTranslations } from "next-intl";

const Incubyte = () => {
    const t = useTranslations('About.Why')

    return (
        <SectionWrapper>
            <FadeElement className="flex-1  ">
                <div className="flex flex-col gap-4 justify-center h-full">
                    <h2 className="Title">
                        {t('title')}
                    </h2>
                    <p>
                        {t('desc')}
                    </p>
                    <List>
                        <ListItem text={t('list.one')} />
                        <ListItem text={t('list.two')} />
                        <ListItem text={t('list.three')} />
                        <ListItem text={t('list.four')} />
                        <ListItem text={t('list.five')} />
                    </List>
                </div>
            </FadeElement>
            <FadeElement className="flex-1 flex justify-center items-center">
                {<Image alt="Algeria Illustartion" width={400} height={500} className="w-full" src='/images/incubyte-algeria.svg' />}
            </FadeElement>
        </SectionWrapper>
    );
};

export default Incubyte;
