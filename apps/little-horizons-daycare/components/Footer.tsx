import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const quickLinks = [
    {
        title: 'About Us',
        href: '#'
    },
    {
        title: 'Programs & Activities',
        href: '#'
    },
    {
        title: 'Contact Us',
        href: '#'
    },
    {
        title: 'Enroll Today',
        href: '#'
    }
]


export default function Footer() {
    return (
        <footer className="wrapper bg-brand-green text-white">
            <div className="content container mx-auto px-4 grid sm:grid-cols-2 gap-4 py-12 items-center">
                <div className="textbox order-2 space-y-4">
                    <div className="logo">
                        <span className="sr-only">Little Horizons Logo</span>
                        <Image
                            src={`logo.svg`}
                            width={150}
                            height={200}
                            alt='logo'
                        />
                    </div>

                    <div className='grid sm:grid-cols-2'>
                        <div className="navigation space-y-2">
                            <h4 className='font-bold fs-1'>Quick Links</h4>
                            <ul>
                                {
                                    quickLinks.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item.href}>
                                                    <Button variant={`link`} size={`sm`} className='p-0 text-white'>{item.title}</Button>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="navigation space-y-2">
                            <h4 className='font-bold fs-1'>Contact Us</h4>
                            <div>(123) 456-7890</div>
                            <div>info@littlehorizons.com</div>
                            <div>123 Bright Futures Lane, YourCity, YourState</div>
                            <div></div>
                        </div>
                    </div>
                    {/* <p></p> */}

                    {/* <div className="cta">
                        <Link href={`#`}>
                            <Button className='capitalize italic p-0'
                                variant={`link`}>Have More Questions? Contact Us.</Button>
                        </Link>
                    </div> */}
                </div>

                <div className="slider-wrapper">
                    <div className="slider-content">
                        <div className="slide-item -space-y-[25%] relative flex flex-col items-center">
                            <div className={`image relative h-72 sm:h-80 
                                        aspect-square rounded-lg overflow-hidden 
                                        `}>
                                <div className="overlay absolute top-0 left-0 
                                            w-full h-full bg-brand-black-10 z-10"></div>
                                <Image
                                    src={`/images/map.jpg`}
                                    alt=''
                                    fill
                                    className={`mx-auto object-cover z-0`}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
