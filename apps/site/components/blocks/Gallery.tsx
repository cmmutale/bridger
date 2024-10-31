"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { AspectRatio } from '../ui/aspect-ratio';

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
        <section className='min-h-[600px] flex items-center justify-center py-24'>
            <div className="inner container mx-auto px-4 sm:px-0 space-y-8">
                <h1 className='capitalize font-bold font-body text-center text-4xl lg:text-5xl'>
                    Design <span className='font-heading'> & </span> Development</h1>

                <div className='space-y-8'>
                    {
                        data.map((_, i) => (
                            <div className='space-y-4 max-w-full' key={i}>
                                <h3 className='font-bold font-heading text-xl'>{_.title}</h3>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className='swiper'>
                                    {
                                        _.items.map((_, i) => (
                                            <SwiperSlide key={i}>
                                                <AspectRatio className='relative' ratio={10 / 9}>
                                                    <div className="sheeth absolute top-0 left-0 h-full w-full"></div>
                                                    <Image
                                                        fill={true}
                                                        src={_.image}
                                                        alt={_.alt}
                                                        className='object-cover object-top hover:cursor-grab active:cursor-grabbing'
                                                    />
                                                </AspectRatio>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
