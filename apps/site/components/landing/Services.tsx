import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { LucidePaintbrush, LucideSettings, LucideMonitor } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MeetingLink from '@/components/ui/meeting-link'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const services = [
    {
        name: 'Development & Design',
        description: 'Your website should do more than look good — it should work beautifully. We build fast, secure, and responsive websites from the ground up on the platform of your choice, whether it’s WordPress, Webflow, Squarespace, or something else entirely.',
        icon: <LucideMonitor className='size-12' />,
    },
    {
        name: 'Branding & Marketing',
        description: 'We help you find your voice and style to make your online presence unforgettable. From crafting the perfect tagline to designing eye-catching visuals, we ensure your audience hears and sees you across every channel — inboxes to social feeds.',
        icon: <LucidePaintbrush className='size-12' />,
    },
    {
        name: 'Maintenance & hosting',
        description: `No time to keep your site updated? We’ve got it handled. From hosting and updates to monitoring and security, we make sure your website stays online, secure, and running smoothly.`,
        icon: <LucideSettings className='size-12' />,
    },
]

export default function Services() {
    return (
        <section className="wrapper new-section bg-[var(--branding-primary)] text-[var(--branding-secondary)]">
            <div className="content_background"></div>
            <div className="cotnainer_content u-container space-y-[var(--space-m)]">
                <div className="textbox">
                    <h2 className='font-[family-name:var(--font-heading)] 
                    font-bold fs-3 text-center'>What We Do Best</h2>
                </div>
                <div className="card-grid">
                    <div
                        style={{
                            '--column-min-w': '240px',
                        } as React.CSSProperties}
                        className="card-grid_content u-grid auto-grid gap-[var(--space-l)]">
                        {services.map((service, index) => {
                            return (
                                <Card key={index} className='bg-[var(--branding-secondary)] text-[var(--branding-alt)] rounded-md'>
                                    <CardHeader className='space-y-[var(--space-s)]'>
                                        {/* <span className='mx-auto'>{service.icon}</span> */}
                                        <CardTitle>{service.name}</CardTitle>
                                        <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                                    </CardHeader>
                                    <CardContent>
                                        <p>
                                            {service.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href={`/services`} className='block w-full'>
                                        <Button className='w-full'>Learn More</Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
