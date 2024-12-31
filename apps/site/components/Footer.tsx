import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from './ui/logo'
import MeetingLink from './ui/meeting-link'


const navigation = [
    {
        label: `About`,
        href: `/about`
    },
    {
        label: `Services`,
        href: `/services`
    },
    {
        label: `Templates`,
        href: `/templates`
    },
    {
        label: `Contact`,
        href: `/contact`
    }
]

export default function Footer() {
    return (
        <footer className="wrapper section-h--short bg-white">
            <div className="container_bg"></div>
            <div className="container_content u-container u-container--narrow space-y-[var(--space-m)] flex items-center flex-col">
                <Logo />
                <nav className='flex gap-[var(--space-3xs)]'>
                    {
                        navigation.map((link, index) => {
                            return (
                                <Link key={index} href={link.href}>
                                    <Button variant={`link`} size={`sm`} className='text-secondary-foreground'>
                                        {link.label}
                                    </Button>
                                </Link>

                            )
                        })
                    }
                </nav>
                <p className='text-sm font-semibold'>
                    © 2024 The Nodedrop Team. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
