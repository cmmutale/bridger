import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import ArrowUp from './icons/Arrow-Up';


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
                    <NavigationMenu className='max-lg:hidden'>
                        <NavigationMenuList className='my-auto'>
                            {
                                navigation.map((item, index) => (
                                    <NavigationMenuItem key={index}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {item.label}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </NavigationMenu>

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
                            <div className='flex flex-col justify-between grow'>
                                <NavigationMenu className='mx-auto'>
                                    <NavigationMenuList className='flex-col gap-[var(--space-xl)] overflow-y-auto'>
                                        {
                                            navigation.map((item, index) => (
                                                <NavigationMenuItem key={index}>
                                                    <Link href={item.href} legacyBehavior passHref>
                                                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-3xl text-wrap`}>
                                                            {item.label}
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </NavigationMenuItem>
                                            ))
                                        }
                                    </NavigationMenuList>
                                </NavigationMenu>


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
            <div className='fixed z-50 bottom-[var(--space-m)] right-[var(--space-m)]'>
                <Link href={`#`} className=''>
                    <Button size={`icon`} className=''>
                        <ArrowUp className="fill-white stroke-white w-6 h-6" />
                    </Button>
                </Link>
            </div>
        </header>
    )
}
