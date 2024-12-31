import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { LucideCircle } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MeetingLink from '../ui/meeting-link'
import { Badge } from '../ui/badge'

const tiers = [
    {
        name: 'Jump Start',
        description: "Perfect for clients who want to grab off the shelf and go.",
        price: 199,
        features: [
            'Access to ready-made design templates',
            'Free copywriting assistance',
            'Two rounds of revisions per month',
            'Updates within 48 hours',
            '24-hour response time for support',
            'Hosting: $20/month',
            'Maintenance & Security: $50/month',
            'CMS Integration: $30/month',
        ],
        featured: false
    },
    {
        name: 'Custom Build',
        description: "Ideal for businesses starting from scratch or needing a fully custom solution",
        price: 499,
        features: [
            'Fully custom design and development',
            'Branding consultation and pitch deck design',
            'Custom copywriting',
            'Unlimited revisions during the design phase',
            'Priority support with 12-hour response time',
            'Hosting: $25/month',
            'Maintenance & Security: $75/month',
            'CMS Integration: $40/month',
        ],
        featured: true
    },
]


export default function Pricing() {
    return (
        <section className="wrapper new-section section-h--medium" id='pricing'>
            <div className="container_background"></div>
            <div className="container_content u-container space-y-[var(--space-m)]">
                <div className="textbox max-w-3xl mx-auto space-y-[var(--space-m)]">
                    <h2 className='text-3xl font-[family-name:var(--font-heading)] text-center font-medium'>
                        Affordable, Flexible Solutions to Fit Your Needs
                    </h2>
                    <p className='text-center mx-auto'>
                        Whether you need a ready-to-use template or a custom website, we’ve got you covered.
                    </p>
                </div>
                <div className="card-grid">
                    <div className="card-grid_content u-grid auto-grid max-w-3xl mx-auto">
                        {
                            tiers.map((tier, index) => {
                                return (
                                    <div key={index} className='relative'>
                                        <Card className='grow-0 basis-1/3 border-2 border-secondary-foreground'>
                                            <CardHeader className='space-y-[var(--space-s)]'>
                                                <p className='text-primary font-[family-name:var(--font-alt)]'>{tier.name}</p>
                                                <CardDescription>
                                                    {tier.description}
                                                </CardDescription>
                                                <CardTitle>
                                                    <span className='text-4xl font-normal font-[family-name:var(--font-alt)]'>{"$"}{tier.price} </span>
                                                </CardTitle>
                                                <MeetingLink>
                                                    <Button className='w-full'>Free 15 min Consultation</Button>
                                                </MeetingLink>

                                            </CardHeader>
                                        </Card>
                                        <div className='space-y-[var(--space-2xs)] pt-[var(--space-2xs)] px-[var(--space-s)]'>
                                            <p className='font-bold text-sm italic'>comes with</p>
                                            <ul className='space-y-[var(--space-3xs)]'>
                                                {
                                                    tier.features.map((feature, index) => {
                                                        return (
                                                            <li key={index} className=''>
                                                                {/* <LucideCircle className='block shrink-0 size-2' /> */}
                                                                <span className='block'>{feature}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >

    )
}
