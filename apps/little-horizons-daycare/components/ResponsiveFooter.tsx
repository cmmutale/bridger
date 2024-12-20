import Image from 'next/image'
import { FooterNavList } from './FooterNavList'

const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
]

const contactLinks = [
    { href: 'tel:1234567890', label: '(123) 456-7890' },
    { href: 'mailto:info@littlehorizons', label: 'info@littlehorizons.com' },
    { href: '#map-link', label: '123 Bright Futures Lane, YourCity, YourState' },
]

export function ResponsiveFooter() {
    return (
        <footer className="bg-[var(--branding-secondary)] text-[var(--branding-white)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row py-16 gap-8">
                    <div className="relative h-60 md:w-1/2">
                        <Image
                            src={`/images/map.jpg`}
                            alt="Footer image"
                            className="rounded-lg object-cover"
                            fill
                        />
                    </div>
                    <div className="md:w-1/2 space-y-8">
                        <div className="flex justify-start md:justify-end">
                            <Image
                                src={`lhd-logo.svg`}
                                width={150}
                                height={200}
                                alt='logo'
                            />

                        </div>
                        <div className="grid grid-cols-2 gap-8">
                        <FooterNavList title="Company" items={companyLinks} />
                        <FooterNavList title="Company" items={contactLinks} />
                        </div>
                    </div>
                </div>
                <div className="border-t border-[var(--branding-white)] py-8">
                    <p className="text-center fs--1 mx-auto">
                        © {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

