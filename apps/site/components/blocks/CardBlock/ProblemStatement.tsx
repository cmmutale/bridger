import { LucideX } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'
import { LucideCheckCircle } from 'lucide-react'


export default function ProblemStatement() {
    return (
        <section className='section py-24 branding-secondary'>
            <div className="section__wrapper container mx-autp px-4 sm:px-6">
                <div className="section__content">
                    <div className="section__copy">
                        <h2 className='font-bold text-3xl sm:text-4xl'>The benefits you get when you work with us.</h2>
                    </div>
                    <div className="card__block flex flex-wrap lg:flex-nowrap">
                        <Card className=''>
                            <CardHeader>
                                <CardTitle>The roadbloacks</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                <div className='flex flex-nowrap gap-2'>
                                    <LucideX className='text-destructive shrink-0' />
                                    <p>
                                        {`Many struggle to pick the right tools and platforms to match
                                    their website's purpose.`}
                                    </p>
                                </div>
                                <div className='flex flex-nowrap gap-2'>
                                    <LucideX className='text-destructive shrink-0' />
                                    <p>
                                        Projects often face indefinite timelines and unexpected budget overruns.
                                    </p>
                                </div>
                                <div className='flex flex-nowrap gap-2'>
                                    <LucideX className='text-destructive shrink-0' />
                                    <p>
                                        Security updates, design tweaks, and content mangement are often overlooked or
                                        difficult to manage.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className='pt-4'>
                                <Link className='block w-full' href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank'>
                                    <Button
                                        size={`lg`}
                                        variant={`outline`}
                                        className='rounded-full hover:px-12 duration-300 
                                    hover:tracking-widest transition-all'>Get rid of all that today!</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card className=''>
                            <CardHeader>
                                <CardTitle>What to expect from us.</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                <div className='flex flex-nowrap gap-2'>
                                    <LucideCheckCircle className='text-green-500 shrink-0' />
                                    <p>Get your website live on time and on budget, every time.
                                    </p>
                                </div>
                                <div className='flex flex-nowrap gap-2'>
                                    <LucideCheckCircle className='text-green-500 shrink-0' />
                                    <p>
                                        Focus on growing your business, brand, or organization- while we
                                        manage and maintain your website.
                                    </p>
                                </div>
                                <div className='flex flex-nowrap gap-2'>
                                    <LucideCheckCircle className='text-green-500 shrink-0' />
                                    <p>
                                        Reach a wider audience and attract leads around the clock,
                                        even while you sleep.
                                    </p>
                                </div>

                            </CardContent>
                            <CardFooter className='pt-4'>
                                <Link className='block w-full' href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank'>
                                    <Button
                                        size={`lg`}
                                        variant={`default`}
                                        className='rounded-full hover:px-12 duration-300 
                                    hover:tracking-widest transition-all'>Get all that today!</Button>
                                </Link>
                            </CardFooter>
                        </Card>

                    </div>
                </div>
            </div>
        </section>
    )
}
