"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Programs", href: "/#programs-and-activities" },
    { name: "Contact", href: "/contact-us" },
]

export default function ResponsiveNavigationHeader() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-brand-green">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo area */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="sr-only">Little Horizons Logo</span>
                            <Image
                                src={`lhd-logo.svg`}
                                alt='logo'
                                height={80}
                                width={80}
                            />
                        </Link>
                    </div>

                    {/* Navigation menu - desktop */}
                    <div className="hidden sm:flex flex-grow justify-end">
                        {navItems.map((item) => (

                            <Link
                                key={item.name}
                                href={item.href}
                                className=""
                            >
                                <Button
                                    className="text-white hover:text-white hover:bg-white/25"
                                    variant={`ghost`} size={`sm`}>
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* Call to action - desktop */}
                    <div className="hidden sm:flex flex-shrink-0">
                        <Link href={`#`}>
                            <Button>Enroll Today</Button>
                        </Link>
                    </div>

                    {/* Menu button - mobile */}
                    <div className="sm:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="default" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-[var(--branding-secondary)] !border-none text-[var(--branding-white)]">
                                <div className="flex flex-col justify-between space-y-4 pt-[var(--space-l)] h-full">
                                    <div className="flex flex-col space-y-4">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="px-3 py-2 rounded-md fs-3 font-black text-center"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <Button variant={`secondary`} onClick={() => setIsOpen(false)}>
                                        Enroll Today
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}

