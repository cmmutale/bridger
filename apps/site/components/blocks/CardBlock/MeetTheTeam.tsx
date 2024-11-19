import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

const data = {
    team: [
        {
            name: "John Doe",
            role: "Web Developer",
            image: "/media/images/chilufya-headshot.jpeg"
        }, {
            name: "Jane Smith",
            role: "IT Solutions",
            image: "/media/images/tatenda-headshot.jpeg"
        }, {
            name: "Bob Johnson",
            role: "Solutions Architect",
            image: "/media/images/taf-headshot.jpeg"
        }
    ]
}

export default function MeetTheTeam() {
    return (
        <section className='section'>
            <div className="section__wraper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content space-y-4">
                    <div className="section__copy max-w-2xl mx-auto text-center space-y-4">
                        <h2 className='font-bold text-3xl sm:text-4xl'>Backed by an energetic team filled with talent.</h2>
                        <p className='clip-text mx-auto'>
                            At Nodedrop, we specialize in delivering web development services that
                            help local businesses thrive. From design to deployment, we focus on
                            simplicity and results.
                        </p>
                        <Link href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank' className='block'>
                            <Button size={`lg`} className='rounded-full hover:px-12 duration-300 
                                    hover:tracking-widest transition-all'>
                                Get in touch with us today!</Button>
                        </Link>
                    </div>
                    <div className='grid grid-cols-3 sm:grid-cols-3 gap-12 justify-center'>
                        {
                            data.team.map((_, i) => (
                                <div key={i} className='space-y-4'>
                                    <AspectRatio ratio={1} className='relative'>
                                        <Image
                                            src={_.image}
                                            alt={_.name}
                                            fill={true}
                                            className='object-cover'
                                        />
                                    </AspectRatio>
                                    <p className='text-center font-bold'>{_.role}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
