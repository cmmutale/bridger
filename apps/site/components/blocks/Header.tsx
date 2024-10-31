import Link from 'next/link'
import { Button } from '../ui/button'
import Logo from '../ui/logo'
import {
    NavigationMenu,
    NavigationMenuList
} from '../ui/navigation-menu'

export default function Header() {
    return (
        <header className='z-50 h-16 w-full bg-background shadow-lg sticky top-0'>
            <div className="inner h-full container mx-auto px-4 sm:px-0 flex items-center 
            justify-between max-w-screen-lg">
                <div className="logo">
                    <span className='font-black sr-only'>LOGO</span>
                    <Logo link={true} />
                </div>
                <div className='flex gap-8 items-center'>
                    <NavigationMenu className='hidden'>
                        <NavigationMenuList className='space-x-8'>
                            { }
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank'>
                        <Button>HIRE US TODAY!</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
