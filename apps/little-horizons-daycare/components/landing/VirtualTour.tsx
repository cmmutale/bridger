import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import { TbSquareRoundedChevronRight } from "react-icons/tb";

export default function VirtualTour() {
    return (
        <section className="wrapper new-section bg-brand-black-5 text-brand-black" id='virtual-tour'>
            <div className="content u-container u-grid auto-grid place-items-center">
                <div className="textbox order-2 space-y-4">
                    <h2 className='font-[family-name:var(--font-heading)] fs-2'>Explore our state-of-the-art facilities</h2>
                    <p>
                        Our daycare is designed with your child in mind. From colorful,
                        engaging classrooms to a safe and spacious outdoor play area, we
                        provide a space where children can learn, play, and grow with confidence.
                    </p>
                    <div className="cta">
                        <Link href={`#`}>
                            <Button className='capitalize'>Take a virtual tour</Button>
                        </Link>
                    </div>
                </div>

                <div className="slider-wrapper">
                    <div className="slider-content">
                        <div className="slide-item space-y-2 relative">
                            <div className="slider-navigation">
                                <Button size={`icon`} variant={`ghost`} className='absolute top-1/2 -translate-y-1/2 left-0'>
                                    <TbSquareRoundedChevronLeft/>
                                </Button>
                                <Button size={`icon`} variant={`ghost`} className='absolute top-1/2 -translate-y-1/2 right-0'>
                                    <TbSquareRoundedChevronRight/>
                                </Button>
                            </div>
                            <div className="image">
                                <Image
                                    src={`/images/classroom-kindergarten-interior-design.jpg`}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className='rounded-lg mx-auto'
                                />
                            </div>
                            <p className='text-center'>
                                Bright, clean and welcoming classrooms
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
