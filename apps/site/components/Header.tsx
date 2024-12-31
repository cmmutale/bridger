import Link from 'next/link'
import { Button } from './ui/button'
import Logo from './ui/logo'
import MeetingLink from './ui/meeting-link'
import {
    Sheet,
    SheetClose,
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
        label: `Services`,
        href: `/#services`
    },
    {
        label: `Pricing`,
        href: `/#pricing`
    },
    {
        label: `Our Process`,
        href: `/#our-process`
    },
]

export default function Header() {
    return (
        <header className="wrapper absolute left-0 w-full top-0 z-50 bg-transparent">
            <div className="content u-container mx-auto flex items-center u-container h-20 justify-between">
                <div className="logo">
                    <Logo />
                </div>
                <div className="nav items-center gap-[var(--space-l)] flex-1 justify-end sm:flex hidden">
                    <nav className="flex gap-[var(--space-3xs)] ml-auto">
                        {
                            navigation.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <Button variant={`ghost`} size={`default`}>{item.label}</Button>
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
                <Sheet>
                    <SheetTrigger className="sm:hidden">
                        <Button asChild variant={`ghost`} size={`icon`}>
                            <div className="vector-icon relative">
                                <span className="block h-[3px] bg-black w-[24px] absolute translate-y-[200%]"></span>
                                <span className="block h-[3px] bg-black w-[24px] absolute"></span>
                                <span className="block h-[3px] bg-black w-[24px] absolute -translate-y-[200%]"></span>
                            </div>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={`top`} className='space-y-[var(--space-m)] border-2 border-secondary-foreground'>
                        <SheetClose className='ml-auto block'>
                            <Button asChild variant={`ghost`} size={`icon`} className='border-[var(--branding-alt)]'>
                                <div className="vector-icon relative">
                                    <span className="block h-[24px] bg-black w-[3px] absolute -rotate-45"></span>
                                    <span className="block h-[24px] bg-black w-[3px] absolute rotate-45"></span>
                                </div>
                            </Button>
                        </SheetClose>
                        <SheetHeader className='sr-only'>
                            <SheetTitle className='sr-only'>Mobile menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col ml-auto text-center">
                            {
                                navigation.map((item, index) => (
                                    <Link key={index} href={item.href} className='border-b-2 border-border py-[var(--space-s)]'>
                                        <SheetClose>
                                            {item.label}
                                        </SheetClose>
                                    </Link>
                                ))
                            }
                        </nav>
                        <div className="cta flex justify-center">
                            <MeetingLink>
                                <Button>
                                    Buy A Website
                                </Button>
                            </MeetingLink>
                        </div>

                    </SheetContent>
                </Sheet>

            </div>
        </header >
    )
}
