import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const NewsLetter = () => {
    return (
        <SectionWrapper className={{
            section: 'bg-muted'
        }}>
            <FadeElement className='flex-1 gap'>
                <div className='flex flex-col gap-4'>
                    <h2 className='Title'>
                        Stay Updated with Incubyte                    </h2>
                    <p>
                        Join our newsletter for the latest updates on programs, events, and opportunities at Incubyte.                    </p>
                    <form className='flex gap-4'>
                        <Input placeholder='Your Email Here' className='max-w-xs' />
                        <Button className='text-white'>
                            Subscribe
                        </Button>
                    </form>
                    <p className='text-xs text-muted-foreground'>
                        By clicking Join Now, you agree to our Terms and Conditions.
                    </p>
                </div>
            </FadeElement>
        </SectionWrapper>
    )
}

export default NewsLetter