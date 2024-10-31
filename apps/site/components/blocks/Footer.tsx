import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from '../ui/logo'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu'
import { InformationActions, InformationBlock, InformationCopyBody, InformationCopyHeading } from './InformationBlock'


export default function Footer() {
    return (
        <footer className='py-24 bg-background'>
            <div className="inner h-full container mx-auto max-w-screen-lg grid sm:grid-cols-3 items-start gap-4">
                <InformationBlock variant={`default`}>
                    <InformationCopyHeading>
                        <div className="logo">
                            <span className='font-black sr-only'>LOGO</span>
                            <Logo link={true} />
                        </div>

                        <h1 className='font-extrabold text-3xl sm:text-4xl'>
                            Ready to make an
                            <span className='font-heading'> impact?</span></h1>
                    </InformationCopyHeading>
                    <InformationCopyBody>
                        <p></p>
                        <InformationActions variant='default'>
                            <Link className='block' href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank'>
                                <Button size={`lg`} className='uppercase'>Get started today</Button>
                            </Link>
                        </InformationActions>
                    </InformationCopyBody>
                </InformationBlock>

                <div className='grid sm:grid-cols-2 items-start px-4 sm:px-2'>
                    <NavigationMenu>
                        <NavigationMenuList className='flex-col items-start space-x-0'>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='#'>Other Products</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='#'>Blog</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList className='flex-col items-start space-x-0'>
                            <NavigationMenuItem>
                                <NavigationMenuLink href='mailto:admin@nodedropp.com'
                                    className='underline text-accent-foreground'>admin@nodedropp.com</NavigationMenuLink>
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
        </footer>
    )
}
