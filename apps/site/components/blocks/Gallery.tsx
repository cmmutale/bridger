"use client"

import { AspectRatio } from '../ui/aspect-ratio';
import Link from 'next/link';
import { Button } from '../ui/button';

// import required modules
import Image from 'next/image';

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

export default function Gallery() {
    return (
        <section className='section  branding-primary'>
            <div className="section__wrapper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content space-y-4">
                    <div className='space-y-4'>
                        <div className="section__copy">
                            <h1 className='capitalize font-bold text-3xl lg:text-4xl'>
                                Our work
                            </h1>
                            <p className="text-base">
                                Got a project in mind? Let’s bring your vision to life! 🚀
                            </p>
                        </div>
                        <div className="section__cta">
                            <div className="button--row flex flex-wrap gap-4">
                                <Link href={`#`}>
                                    <Button
                                        size={`lg`}
                                        variant={`outline`}
                                        className='rounded-full hover:px-12 hover:tracking-widest 
                                    duration-300 transition-all hover:font-black
                                    active:px-6'>Get in touch with us!</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-12'>
                            {
                                data[0].items.map((_, i) => (
                                    <div key={i}>
                                        <div className=''>
                                            <AspectRatio className='relative'>
                                                <div className="sheeth absolute top-0 left-0 h-full w-full"></div>
                                                <Image
                                                    fill={true}
                                                    src={_.image}
                                                    alt={_.alt}
                                                    className='object-cover object-top hover:cursor-grab active:cursor-grabbing'
                                                />
                                            </AspectRatio>
                                        </div>
                                        <p className='font-bold text-center pt-8'>{_.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
