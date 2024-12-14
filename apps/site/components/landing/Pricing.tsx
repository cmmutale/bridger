import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { LucideCheckCircle, LucideCheck, PanelRightInactive } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const tiers = [
    {
        name: 'Ready-to-go',
        description: "Perfect for clients with existing websites that need updates or enhancements.",
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
        <section className="wrapper new-section">
            <div className="container_background"></div>
            <div className="container_content u-container space-y-[var(--space-m)] u-container--narrow">
                <div className="textbox">
                    <h2 className='font-bold fs-3 font-[family-name:var(--font-heading)]'>Pricing</h2>
                </div>
                <div className="card-grid">
                    <div className="card-grid_content u-grid auto-grid place-content-center">
                        {
                            tiers.map((tier, index) => {
                                return (
                                    <Card key={index} className={`border-[4px] border-[var(--branding-alt)] 
                                    ${tier.featured ? "bg-[var(--branding-primary)] text-[var(--branding-secondary)]" :
                                            "bg-[var(--branding-secondary)]"}`}>
                                        <CardHeader className='space-y-[var(--space-s)]'>
                                            <p className="font-bold fs-1">{tier.name}</p>
                                            <CardDescription className={`${tier.featured ? "text-[var(--branding-alt)]" : ""}`}>
                                                {tier.description}
                                            </CardDescription>
                                            <CardTitle>
                                                <span className='fs--1 font-normal'>starting from </span>
                                                {"$"}{tier.price} <span className='fs--1 font-normal'>usd</span>
                                            </CardTitle>
                                            <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                                        </CardHeader>
                                        <CardContent>
                                            <ul>
                                                {
                                                    tier.features.map((feature, index) => {
                                                        return (
                                                            <li key={index}>{feature}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href={`#`} className='block w-full'>
                                                <Button className='w-full' variant={tier.featured ? "secondary" : "default"}>Get Started</Button>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section >

    )
}
