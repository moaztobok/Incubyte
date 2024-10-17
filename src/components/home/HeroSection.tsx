import { cn } from "@/lib/utils";
import Link from "next/link";
import SmallIcon from "../ItexcIcon";
import AnimatedGradientText from "../ui/animated-gradient-text";
import GridPattern from "../ui/animated-grid-pattern";
import { Button } from "../ui/button";
import { FadeElement, FadeText } from "../ui/fade-text";

export default function HeroSection() {
    return (
        <div className="grid place-items-center h-screen" >
            <GridPattern height={100} width={100} className={cn(
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
                    }} className="md:text-6xl text-2xl font-bold w-full" text="Next-gen Business Incubator" />                </div>

                <div className="max-w-2xl">
                    <FadeText framerProps={{
                        show: { transition: { delay: 0.4 } }
                    }} className="text-lg max-w-xl text-balance" text="Incubyte: Empowering Algerian innovators with the resources, mentorship, and training to turn ideas into successful ventures." />
                </div>
                <FadeElement framerProps={{
                    show: { transition: { delay: 0.6 } }
                }}>
                    <Button variant={"outline"} className="bg-background">
                        <Link href="/about">Learn More</Link>
                    </Button>
                </FadeElement>
            </div>
        </div>
    )
}