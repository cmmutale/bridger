import React from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { Button } from '../ui/button'
import MeetingLink from '../ui/meeting-link'

export default function Cta() {
    return (
        <section className="wrapper new-section bg-white py-[var(--space-l)]">
            <div className="container_background"></div>
            <div className="container_content u-container u-container--narrow bg-[var(--branding-primary)] text-[var(--branding-secondary)] space-y-[var(--space-m)]">
                <div className="textbox space-y-[var(--space-s)]">
                    <h2 className='font-bold fs-3 font-[family-name:var(--font-heading)] text-center'>Let’s Make Your Vision a Reality</h2>
                    <p className='mx-auto text-center'>Click below to get started. Your dream website is just a few clicks away!
                    </p>
                </div>
                <div className="card-grid">
                    <div className="card-grid_content u-grid auto-grid">
                        <Card className='border-[4px] border-[var(--branding-alt)] bg-[var(--branding-secondary)] text-[var(--branding-alt)]'>
                            <CardHeader className='space-y-[var(--space-m)]'>
                                <CardTitle>Schedule A Free, No-Pressure Consultation</CardTitle>
                                <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                            </CardHeader>
                            <CardFooter>
                                <MeetingLink>
                                    <Button className='w-full'>Lets Chat</Button>
                                </MeetingLink>
                            </CardFooter>
                        </Card>
                        <Card className='bg-[var(--branding-alt)] text-[var(--branding-secondary)]'>
                            <CardHeader className='space-y-[var(--space-m)]'>
                                <CardTitle>Test out one of our templates today.</CardTitle>
                                <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                            </CardHeader>
                            <CardFooter>
                                <MeetingLink>
                                    <Button className='w-full' variant={`secondary`}>Try A Template</Button>
                                </MeetingLink>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
