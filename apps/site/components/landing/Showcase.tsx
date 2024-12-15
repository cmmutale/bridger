"use client"

import { AspectRatio } from '../ui/aspect-ratio';
import Link from 'next/link';
import { Button } from '../ui/button';

// import required modules
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

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
        <section className='section  branding-primary'>
            <div className="section__wrapper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content space-y-[var(--space-m)]">
                    <div className='space-y-[var(--space-m)]'>
                        <div className="section__copy">
                            <h1 className='capitalize font-bold fs-4 text-center'>
                                Our work
                            </h1>
                        </div>
                    </div>

                    <div className='card-grid reel'>
                        <div className='card-grid_content reel_container gap-[var(--space-m)]'>
                            {
                                data[0].items.map((_, index) => (
                                    <Card key={index} className='bg-[var(--branding-secondary)] text-[var(--branding-alt)] '>
                                        <CardHeader className='space-y-[var(--space-s)]'>
                                            <CardTitle>{_.desc}</CardTitle>
                                            <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="card-body">
                                                <div className="image relative h-52">
                                                    <Image
                                                        src={_.image}
                                                        alt=''
                                                        fill
                                                        className='object-cover object-top'
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className='w-full'>Learn More</Button>
                                        </CardFooter>
                                    </Card>
                                ))
                            }
                        </div>
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
