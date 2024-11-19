import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucidePaintbrush, LucideSettings, LucideMonitor } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
                            <Link href={`#`}>
                                <Button
                                    size={`lg`}
                                    variant={`outline`}
                                    className='rounded-full hover:px-12 hover:tracking-widest 
                                    duration-300 transition-all
                                    active:px-6'>Learn more</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="cards grid text-left">
                        <div className='grid lg:grid-cols-3'>
                            <Card>
                                <CardHeader>
                                    <LucideMonitor className='w-8 h-8' />
                                    <CardTitle>Development & Design</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='font-semibold clip-text'>
                                        We design and develop your website from ground up building fast and secure.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <LucidePaintbrush className='w-8 h-8' />
                                    <CardTitle>Branding & Marketing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='font-semibold clip-text'>
                                        Designing websites and giving you the right words to tell your story.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <LucideSettings className='w-8 h-8' />
                                    <CardTitle>Maintenance & hosting</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='font-semibold clip-text'>
                                        We host your website making sure it's secure and always running.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
