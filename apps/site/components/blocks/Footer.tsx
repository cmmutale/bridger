import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from '../ui/logo'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu'
import { InformationActions, InformationBlock, InformationCopyBody, InformationCopyHeading } from './InformationBlock'
import MeetingLink from '../ui/meeting-link'


export default function Footer() {
    return (
        <footer className='section branding-primary'>
            <div className="section__wrapper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content text-center space-y-8">
                    <div className="section__copy space-y-4">
                        <h1 className='font-bold text-3xl sm:text-4xl'>
                            Ready to make an impact?</h1>

                        <div>
                            <MeetingLink>
                                <Button
                                    size={`lg`}
                                    className='rounded-full bg-black hover:bg-black/80 
                                    hover:px-12 hover:tracking-widest duration-300 transition-all
                                    active:px-6'>Reserve a meeting</Button>
                            </MeetingLink>
                        </div>
                    </div>

                    <div className="">
                        <div className='flex flex-col items-center'>
                            <NavigationMenu className='text-center'>
                                <NavigationMenuList className='gap-4 items-start space-x-0'>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href='#'>Other Products</NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href='#'>Blog</NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                            <NavigationMenu>
                                <NavigationMenuList className='gap-4 flex-wrap items-start space-x-0'>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href='mailto:admin@nodedropp.com'
                                            className='underline'>admin@nodedropp.com</NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href='#'>Terms & conditions</NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink href='#'>Privacy policy</NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
