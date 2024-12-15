import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from './ui/logo'
import MeetingLink from './ui/meeting-link'


const navigation = [
    {
        label: `Home`,
        href: `/`
    },
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
        <footer className="wrapper min-h-[400px] grid place-items-stretch new-section bg-[var(--branding-alt)] text-[var(--branding-secondary)]">
            <div className="container_bg"></div>
            <div className="container_content u-container u-grid place-items-center">
                <Logo />
                <div className="nav-list">
                    <div className="nav-list_header"></div>
                    <ul>
                        <li>
                            <Link href={`mailto:admin@nodedropp.com`}>
                                <Button variant={`link`}>email: admin@nodedropp.com</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className='font--1 block mt-auto text-center mx-auto'> © 2024 The Nodedrop Team. All rights reserved.</p>
        </footer>
    )
}
