import Link from 'next/link'
import { Button } from './ui/button'
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

export default function Header() {
    return (
        <header className="wrapper sticky top-0 z-50 bg-[var(--branding-secondary)] text-[var(--branding-alt)]">
            <div className="content container mx-auto flex items-center u-container h-20">
                <div className="logo">
                    <Logo />
                </div>
                <div className="nav items-center gap-[var(--space-l)] flex-1 justify-end sm:flex hidden">
                    <nav className="flex gap-[var(--space-m)] ml-auto">
                        {
                            navigation.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </nav>
                    <div className="cta">
                        <MeetingLink>
                            <Button size={`lg`}>
                                Buy A Website
                            </Button>
                        </MeetingLink>
                    </div>
                </div>
            </div>
        </header >
    )
}
