import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";



const data = {
    team: [
        {
            name: "Chilufya",
            role: "Lead Developer/Designer",
            linkedin: "chilufya-mutale",
            image: "/media/images/chilufya-headshot.jpeg"
        }, {
            name: "Tatenda",
            role: "Systems Engineer",
            linkedin: "chimbindita17",
            image: "/media/images/tatenda-headshot.jpeg"
        }, {
            name: "Tafadzwa",
            role: "Solutions Architect",
            linkedin: "tchimbindi",
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
                        <h2 className='font-bold text-3xl sm:text-4xl'>Contact our team to get started today.</h2>
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
                    <div className='flex lg:flex-row flex-col gap-8 justify-center !mt-12'>
                        {
                            data.team.map((_, i) => (
                                <div key={i} className='flex gap-4'>
                                    <div className='size-32 shrink-0'>
                                        <AspectRatio ratio={1} className='relative '>
                                            <Image
                                                src={_.image}
                                                alt={_.name}
                                                fill={true}
                                                className='object-cover'
                                            />
                                        </AspectRatio>
                                    </div>
                                    <div className=''>
                                        <h3 className='font-bold text-xl sm:text-2xl'>{_.name}</h3>
                                        <p className=''>{_.role}</p>
                                        <div>
                                            <Link
                                                target='_blank'
                                                href={`https://www.linkedin.com/in/${_.linkedin}`}>
                                                <FaLinkedin className='size-6 hover:fill-blue-700' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
