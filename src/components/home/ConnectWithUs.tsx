import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { FadeElement } from '../ui/fade-text'
import { Mail, MapPinIcon, Phone } from 'lucide-react'
import Map from './Map'

const ConnectWithUs = () => {
    return (
        <SectionWrapper>
            <FadeElement className='flex flex-col gap-4 flex-[0.5]'>
                <h2 className='Title'>
                    Connect with us
                </h2>
                <p className='text-muted-foreground text-sm'>
                    We’re here to help you succeed in your journey.
                </p>
                <div className='flex flex-col gap-6 my-4 text-md'>
                    <FadeElement>
                        <div className='flex flex-col gap-2'>
                            <Mail />
                            <h2 className='font-semibold text-lg'>Email</h2>
                            <p>Reach us anytime at</p>
                            <p className='text-primary'>
                                contact@itexcgroup.com                            </p>
                        </div>
                    </FadeElement>
                    <FadeElement>
                        <div className='flex flex-col gap-2'>
                            <Phone />
                            <h2 className='font-semibold text-lg'>Phone</h2>
                            <p>Call us for inquiries at</p>
                            <p className='text-primary'>
                                contact@itexcgroup.com
                            </p>
                        </div>
                    </FadeElement>
                    <FadeElement>
                        <div className='flex flex-col gap-2'>
                            <MapPinIcon />
                            <h2 className='font-semibold text-lg'>Office</h2>
                            <p>Reach us anytime at</p>
                            <p className='text-primary'>
                                Subdivision of the commune, Lot N01, Building N02, Dar El-Beida, Algiers.
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