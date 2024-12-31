import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import MeetingLink from '../ui/meeting-link'

const process = [
    {
        title: 'Discovery Call',
        description: 'Tell us about your business, your goals, and the kind of website you’re dreaming of.',
    },
    {
        title: 'Design & Pitch Decking',
        description: 'We will create a design that fits your needs and your budget and present that to you in a pitch deck which you will own.',
    },
    {
        title: 'Building',
        description: 'We will develop your website with the latest technologies that will help you carry out your mission.',
    },
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
        <section className="wrapper new-section section-h--medium" id='our-process'>
            <div className="container_background"></div>
            <div className="container_content u-container u-container--narrow u-grid auto-grid space-y-[var(--space-s)] place-items-center">
                <div className="textbox space-y-[var(--space-l)]">
                    <h2 className="text-3xl font-medium font-[family-name:var(--font-heading)] text-center">
                        Working With Us Couldn't Be Any Easier
                    </h2>
                    <div className="card-grid">
                        <div className="card-grid_content u-grid auto-grid">
                            {
                                process.map((item, index) => {
                                    return (
                                        <div key={index} className='flex gap-[var(--space-3xs)] flex-col text-center'>
                                            <div>
                                                <span className='font-[family-name:var(--font-alt)] 
                                                    font-black text-xl'>{index + 1}</span>
                                            </div>
                                            <div className=''>
                                                <CardTitle className='block text-lg font-normal'>{item.title}</CardTitle>
                                                <CardDescription>
                                                    {item.description}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="gallery">
                    <div className="galler_content">
                        <div className="gallery-grid u-grid -space-y-[100%]">
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
                </div> */}
            </div>
        </section>
    )
}
