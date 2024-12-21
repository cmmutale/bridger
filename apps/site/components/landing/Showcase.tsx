"use client"

import { AspectRatio } from '../ui/aspect-ratio';
import Link from 'next/link';
import { Button } from '../ui/button';

// import required modules
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { CheckIcon } from 'lucide-react';

const data = [
    {
        title: "Individuals & Potforlio",
        items: [
            {
                image: "/media/images/demo-expert_hiring.png",
                alt: "Hiring agency",
                desc: "Business Agency"
            },
            {
                image: "/media/images/demo-template-hawks.png",
                alt: "",
                desc: "Side Hustle"
            },
            {
                image: "/media/images/demo-template-krypto.png",
                alt: "",
                desc: "Crypto Startup"
            },
            {
                image: "/media/images/demo-template-onthegoglow.png",
                alt: "",
                desc: "Local Business"
            },
        ]
    },
]

export default function Showcase() {
    return (
        <section className="wrapper new-section">
            <div className="container_background"></div>
            <div className="container_content u-container u-grid auto-grid gap-[var(--space-m)] items-center">
                <div className="textbox space-y-[var(--space-s)]">
                    <h1 className='capitalize font-bold text-2xl'>
                        The Platforms We Use
                    </h1>
                    <p>
                        We work on all the best platforms to bring your vision to life:
                    </p>
                    <ul className=''>
                        <li className='flex gap-[var(--space-3xs)]'>
                            <span><CheckIcon className='block shrink-0' />
                            </span> <span className='block'>WordPress</span></li>
                        <li className='flex gap-[var(--space-3xs)]'>
                            <span><CheckIcon className='block shrink-0' />
                            </span> <span className='block'>Webflow</span></li>
                        <li className='flex gap-[var(--space-3xs)]'>
                            <span><CheckIcon className='block shrink-0' />
                            </span> <span className='block'>Squarespace</span></li>
                        <li className='flex gap-[var(--space-3xs)]'>
                            <span><CheckIcon className='block shrink-0' />
                            </span> <span className='block'>Vercel</span></li>
                        <li className='flex gap-[var(--space-3xs)]'>
                            <span><CheckIcon className='block shrink-0' />
                            </span> <span className='block'>Framer</span></li>
                    </ul>
                </div>

                <div className='card-grid space-y-[var(--space-m)]'>
                    <div className='card-grid_content gap-[var(--space-m)] u-grid grid-cols-2'>
                        {
                            data[0].items.map((_, index) => (
                                <Card key={index} className="image relative h-52">
                                    <Image
                                        src={_.image}
                                        alt=''
                                        fill
                                        className='object-cover object-top'
                                    />
                                </Card>
                            ))
                        }
                    </div>
                    <div className="button--row flex flex-wrap gap-[var(--space-m)] justify-center">
                        <Link href={`/templates`} className='block'>
                            <Button>See All Templates</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
