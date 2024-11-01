import { LucideGlobe, LucidePaintRoller, LucideServer } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'

export default function Masthead() {
    return (
        <section className='min-h-[600px] flex items-center justify-center'>
            <div className="inner container mx-auto px-4 sm:px-0">
                <div className="copy flex flex-col space-y-8 items-center">
                    <h1 className='capitalize font-bold font-body text-center text-4xl lg:text-6xl'>
                        Building websites that <br /> work <span className='font-heading'>for you</span>.</h1>

                    <Link href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank' className='block'>
                        <Button className="uppercase" size={`lg`}>Book a call now</Button>
                    </Link>

                    <Card className='max-w-screen-lg shadow-lg'>
                        <CardContent className='p-6 flex flex-col sm:flex-row gap-8'>
                            <div className='space-y-4'>
                                <CardTitle className='flex items-center gap-2'>
                                    <LucideGlobe />
                                    <span className='capitalize'>Web development</span>
                                </CardTitle>
                                <CardDescription>
                                    We design and develop your website from ground up building fast and secure.
                                </CardDescription>
                            </div>
                            <div className='space-y-4'>
                                <CardTitle className='flex items-center gap-2'>
                                    <LucidePaintRoller />
                                    <span className='capitalize'>Branding & marketing</span>
                                </CardTitle>
                                <CardDescription>
                                    Designing websites and giving you the right words to tell your story.
                                </CardDescription>
                            </div>
                            <div className='space-y-4'>
                                <CardTitle className='flex items-center gap-2'>
                                    <LucideServer />
                                    <span className='capitalize'>Maintenance & hosting</span>
                                </CardTitle>
                                <CardDescription>
                                    {`We host your website making sure it's secure and always running.`}
                                </CardDescription>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
