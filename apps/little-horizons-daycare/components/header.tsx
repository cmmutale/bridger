import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About Us',
        href: '/#about'
    },
    {
        label: 'Programs & Activities',
        href: '/#programs-and-activities'
    },
    {
        label: 'Contact Us',
        href: '/contact-us'
    }
]


export default function Header() {
    return (
        <header className='wrapper bg-brand-green text-white font-[family-name:var(--font-body)]'>
            <div className="container mx-auto px-4 flex items-center justify-between py-6">
                <div className="logo">
                    <span className="sr-only">Little Horizons Logo</span>
                    <Image
                        src={`lhd-logo.svg`}
                        width={125}
                        height={100}
                        alt='logo'
                    />
                </div>

                <div className="navigation flex gap-4">
                    <nav>
                        <ul className='max-lg:hidden lg:flex hidden h-full items-center'>
                            {
                                navigation.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href}>
                                            <Button size={`sm`} variant={`ghost`}>{item.label}</Button>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <div className="action lg:block hidden">
                        <Link href={`#`}>
                            <Button>
                                Enroll Today
                            </Button>
                        </Link>
                    </div>

                    <Sheet>
                        <SheetTrigger className='lg:hidden'>
                            <Button variant={`default`} size={`icon`}>
                                <HiMenuAlt3 />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetTrigger className='block ml-auto'>
                                <Button variant={`default`} size={`icon`}>
                                    <IoCloseSharp />
                                </Button>
                            </SheetTrigger>
                            <SheetHeader>
                                <SheetTitle className='sr-only'>Main navigation</SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col justify-between grow '>
                                <nav>
                                    <ul className='text-center'>
                                        {
                                            navigation.map((item, index) => (
                                                <li key={index}>
                                                    <Link href={item.href}>
                                                        <Button
                                                            size={`lg`}
                                                            variant={`ghost`}
                                                            className='text-xl'
                                                        >{item.label}</Button>
                                                    </Link>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </nav>

                                <div className="action mt-[var(--space-l)] flex justify-center">
                                    <Link href={`#`}>
                                        <Button>
                                            Enroll Today
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    )
}
