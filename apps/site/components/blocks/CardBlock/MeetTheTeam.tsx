import { CardBlock, CardCopyText, CardList } from '.'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

const data = {
    team: [
        {
            name: "John Doe",
            role: "CEO",
            image: "/media/images/chilufya-headshot.jpeg"
        }, {
            name: "Jane Smith",
            role: "CTO",
            image: "/media/images/tatenda-headshot.jpeg"
        }, {
            name: "Bob Johnson",
            role: "CFO",
            image: "/media/images/taf-headshot.jpeg"
        }
    ]
}

export default function MeetTheTeam() {
    return (
        <section className='min-h-[800px] flex items-center justify-center sm:py-4 py-24'>
            <CardBlock variant="rightToLeft">
                <CardCopyText>
                    <h1 className='capitalize font-bold font-body text-center 
                    sm:text-left text-3xl lg:text-4xl'>
                        We fix all of that with our years of
                        <span className='font-heading'> experience and energetic </span>team.
                    </h1>
                    <p>
                        At Nodedrop, we specialize in delivering web development services that
                        help local businesses thrive. From design to deployment, we focus on
                        simplicity and results.
                    </p>
                    <Link href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank' className='block'>
                        <Button size={`lg`} className='w-full uppercase'>
                            Get in touch with us today!</Button>
                    </Link>
                </CardCopyText>
                <CardList>
                    <div className='grid grid-cols-3 sm:grid-cols-3 gap-4 justify-center'>
                        {
                            data.team.map((_, i) => (
                                <AspectRatio ratio={1} className='relative' key={i}>
                                    <Image
                                        src={_.image}
                                        alt={_.name}
                                        fill={true}
                                        className='object-cover'
                                    />
                                </AspectRatio>
                            ))
                        }
                    </div>
                </CardList>
            </CardBlock>
        </section>
    )
}
