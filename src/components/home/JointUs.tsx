import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'
import { Button } from '../ui/button'

const JointUs = () => {
    return (
        <SectionWrapper className={{
            section: 'bg-muted'
        }}>
            <FadeElement className='flex-1'>
                <div className='flex flex-col gap-4'>
                    <h2 className='Title'>
                        Join Our Programs Today!
                    </h2>
                    <p>
                        Empower your future with our expert-led training.
                    </p>
                </div>
            </FadeElement>
            <FadeElement className='flex-1'>
                <div className='flex gap-2 md:justify-center'>
                    <Button className='text-white'>
                        Register
                    </Button>
                    <Button variant={'outline'} className='bg-background'>
                        Apply
                    </Button>
                </div>
            </FadeElement>
        </SectionWrapper>
    )
}

export default JointUs