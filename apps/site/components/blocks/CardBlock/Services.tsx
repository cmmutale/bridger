import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucidePaintbrush, LucideSettings, LucideMonitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MeetingLink from '@/components/ui/meeting-link'

const services = [
    {
        name: 'Development & Design',
        description: 'We design and develop your website from ground up building fast and secure.',
        icon: <LucideMonitor className='size-12' />,
    },
    {
        name: 'Branding & Marketing',
        description: 'Designing websites and giving you the right words to tell your story.',
        icon: <LucidePaintbrush className='size-12' />,
    },
    {
        name: 'Maintenance & hosting',
        description: `We host your website making sure it's secure and always running.`,
        icon: <LucideSettings className='size-12' />,
    },
]

export default function Services() {
    return (
        <div className="section branding-primary">
            <div className="section__wrapper container mx-auto px-4 py-24">
                <div className="section__content space-y-4 text-center">
                    <div className="section__copy">
                        <h2 className='text-3xl sm:text-4xl font-bold capitalize'>
                            What we specialize in.</h2>
                    </div>
                    <div className="section__cta">
                        <div className="button--row flex flex-wrap gap-4 justify-center">
                            <MeetingLink>
                                <Button
                                    size={`lg`}
                                    variant={`outline`}
                                    className='rounded-full hover:px-12 hover:tracking-widest 
                                    duration-300 transition-all
                                    active:px-6'>Get started today!</Button>
                            </MeetingLink>
                        </div>
                    </div>

                    <div className="cards grid text-left">
                        <div className='grid lg:grid-cols-3'>
                            {services.map((service, index) => {
                                return (
                                    <Card key={index} className='text-center'>
                                        <CardHeader>
                                            <span className='mx-auto'>{service.icon}</span>
                                            <CardTitle>{service.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className='font-semibold clip-text'>
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
