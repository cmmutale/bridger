import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const process = [
    {
        title: 'Questionaire',
        description: 'Tell us about your business, your goals, and the kind of website you’re dreaming of',
    },
    {
        title: 'Design',
        description: 'We will create a design that fits your needs and your budget',
    },
    {
        title: 'Development',
        description: 'We will develop your website with the latest technologies',
    },
    {
        title: 'Launch',
        description: 'We will launch your website and make it available to the world',
    }
]

const projectGallery = [
    "/media/images/demo-expert_hiring.png",
    "/media/images/demo-template-hawks.png",
    "/media/images/demo-template-krypto.png",
    "/media/images/demo-template-onthegoglow.png",
]

const rotate = [
    'rotate-12',
    '-rotate-6',
    'rotate-12',
    '-rotate-6',
]

export default function HowItWorks() {
    return (
        <section className="wrapper new-section">
            <div className="container_background"></div>
            <div className="container_content u-container u-grid auto-grid space-y-[var(--space-s)] place-items-center">
                <div className="textbox space-y-[var(--space-s)]">
                    <h2 className="font-bold fs-3">How It Works</h2>
                    <div className="card-grid">
                        <div className="card-grid_content u-grid gap-[var(--space-s)]">
                            {
                                process.map((item, index) => {
                                    return (
                                        <Card key={index} className='border-[4px] border-[var(--branding-alt)] bg-[var(--branding-secondary)]'>
                                            <CardHeader className='flex flex-row items-start gap-[var(--space-s)]'>
                                                <div className="card-number">
                                                    <span className='font-bold fs-3'>{'0'}{index + 1}</span>
                                                </div>
                                                <div className='space-y-[var(--space-xs)]'>
                                                    <CardTitle className='block'>{item.title}</CardTitle>
                                                    <CardDescription>
                                                        {item.description}
                                                    </CardDescription>

                                                </div>
                                            </CardHeader>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="cta">
                        <Link href={`#`}>
                        <Button className='w-full sm:w-auto'>Get Started Today</Button>
                        </Link>
                    </div>
                </div>

                <div className="gallery">
                    <div className="galler_content">
                        <div className="gallery-grid u-grid -space-y-[var(--space-3xl)]">
                            {
                                projectGallery.map((item, index) => {
                                    return (
                                        <div key={index} className={`gallery-item relative 
                                        h-64 bg-[var(--branding-alt)] aspect-square overflow-hidden rounded-md mx-auto ${rotate[index]}`}>
                                            <Image src={item} alt="project" fill className='object-cover opacity-95' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
