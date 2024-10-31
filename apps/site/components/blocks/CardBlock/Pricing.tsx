import React from 'react'
import { CardBlock, CardCopyText, CardList } from '.'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Pricing() {
    return (
        <section className='min-h-[600px] flex items-center justify-center sm:py-12 py-24'>
            <CardBlock variant={`topToDown`}>
                <CardCopyText>
                    <h1 className='font-bold text-center text-3xl sm:text-4xl capitalize'>
                        A service package for <span className='font-heading'> every budget</span>.
                    </h1>
                </CardCopyText>
                <CardList>
                    <div className='space-y-8'>
                        <Card className='flex-1'>
                            <CardContent className='p-4 space-y-4 flex items-start flex-col sm:flex-row'>
                                <div className='flex-1 space-y-4'>
                                    <CardTitle>
                                        <span className='font-heading'>Starter Plan</span>
                                    </CardTitle>
                                    <h1 className='font-extrabold text-4xl'>
                                        50 <span className='text-base'>/page</span>,
                                        5.99
                                        <span className='text-base'>/month</span>
                                    </h1>
                                </div>
                                <div className='flex-1'>
                                    <ul>
                                        <li className='list-disc'>Up to 3 web pages</li>
                                        <li className='list-disc'>Copywriting</li>
                                        <li className='list-disc'>Monthly strategy call</li>
                                        <li className='list-disc'>2x rounds of revisions per month</li>
                                        <li className='list-disc'>Updates every 48 hours during design or maintenance process</li>
                                        <li className='list-disc'>Framer/Wordpress Development: +$20</li>
                                        <li className='list-disc'>24hr response time for support and maintenance</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='flex-1'>
                            <CardContent className='p-4 space-y-4 flex items-start flex-col sm:flex-row'>
                                <div className='flex-1 space-y-4'>
                                    <CardTitle>
                                        <span className='font-heading'>Growth Plan</span>
                                    </CardTitle>
                                    <h1 className='font-extrabold text-4xl'>
                                        50 <span className='text-base'>/page</span>,
                                        9.99
                                        <span className='text-base'>/month</span>
                                    </h1>
                                </div>
                                <div className='flex-1'>
                                    <ul>
                                        <li className='list-disc'>+ Starter plan</li>
                                        <li className='list-disc'>Any number of web pages</li>
                                        <li className='list-disc'>On demand strategy calls</li>
                                        <li className='list-disc'>Expert Project Management</li>
                                        <li className='list-disc'>12hr response time for support and maintenance</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CardList>
            </CardBlock>
        </section>
    )
}
