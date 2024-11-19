"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { AspectRatio } from '../ui/aspect-ratio';
import Link from 'next/link';
import { Button } from '../ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

const data = [
    {
        title: "Individuals & Potforlio",
        items: [
            {
                image: "/media/images/demo-expert_hiring.png",
                alt: "",
            },
            {
                image: "/media/images/demo-template-hawks.png",
                alt: "",
            },
            {
                image: "/media/images/demo-template-krypto.png",
                alt: "",
            },
            {
                image: "/media/images/demo-template-onthegoglow.png",
                alt: "",
            },
        ]
    },
    // {
    //     title: "Local & Small businesses",
    //     items: []
    // },
    // {
    //     title: "Non-profits & Startups",
    //     items: []
    // },
]

export default function Gallery() {
    return (
        <section className='section  branding-primary'>
            <div className="section__wrapper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content space-y-4">
                    <div className='space-y-4'>
                        <div className="section__copy">
                            {/* <p className='text-sm font-bold'>Design and Development</p> */}
                            <h1 className='capitalize font-bold text-3xl lg:text-4xl'>
                                Our work
                            </h1>
                        </div>
                        <div className="section__cta">
                            <div className="button--row flex flex-wrap gap-4">
                                <Link href={`#`}>
                                    <Button
                                        size={`lg`}
                                        variant={`outline`}
                                        className='rounded-full hover:px-12 hover:tracking-widest 
                                    duration-300 transition-all hover:font-black
                                    active:px-6'>See the full catalogue</Button>
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
                                        <p className='font-bold text-center pt-8'>Project {i}</p>
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
