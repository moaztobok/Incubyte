import { cn } from "@/lib/utils";
import Link from "next/link";
import SmallIcon from "../ItexcIcon";
import AnimatedGradientText from "../ui/animated-gradient-text";
import GridPattern from "../ui/animated-grid-pattern";
import { Button } from "../ui/button";
import { FadeElement, FadeText } from "../ui/fade-text";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations()
    return (
        <div className="grid place-items-center h-screen" >
            <GridPattern width={80} height={80} className={cn(
                "opacity-20",
            )} />
            <div className="wrapper gap-4 my-0 flex flex-col justify-center items-center h-full text-center">
                <FadeElement>
                    <AnimatedGradientText className="flex justify-between rounded-full py-1 px-0 pe-3 ps-2">
                        <div className="h-8 aspect-square">
                            <SmallIcon />
                        </div>
                        <span className="ms-2">By itexc group</span>
                    </AnimatedGradientText>
                </FadeElement>
                <div className="max-w-[100vw]">
                    <FadeText framerProps={{
                        show: { transition: { delay: 0.2 } }
                    }} className="md:text-6xl text-2xl font-bold w-full" text={t('Home.Hero-section.next-gen')} /></div>

                <div className="max-w-2xl">
                    <FadeText framerProps={{
                        show: { transition: { delay: 0.4 } }
                    }} className="text-lg max-w-xl text-balance" text={t('Home.Hero-section.hero-desc')} />
                </div>
                <FadeElement framerProps={{
                    show: { transition: { delay: 0.6 } }
                }}>
                    <Button variant={"outline"} className="bg-background">
                        <Link href="/about">{t('Home.Hero-section.Learn_More')}</Link>
                    </Button>
                </FadeElement>
            </div>
        </div>
    )
}