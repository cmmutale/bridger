import React from 'react'
import { Card, CardContent, CardFooter } from '../../ui/card'
import { CardBlock, CardCopyText, CardList } from '.'
import { LucideX } from 'lucide-react'
import { Button } from '../../ui/button'
import Link from 'next/link'

export default function ProblemStatement() {
    return (
        <section className='min-h-[800px] flex items-center justify-center'>
            <CardBlock>
                <CardCopyText>
                    <h1 className='capitalize font-bold font-body text-center sm:text-right text-3xl lg:text-4xl
                '>
                        Facing website challenges? <br /> We understand
                        <span className='font-heading'> the struggle</span>.
                    </h1>
                </CardCopyText>
                <CardList>
                    <Card className='shadow-xl'>
                        <CardContent className='p-2 space-y-4'>
                            <div className='flex flex-nowrap gap-2'>
                                <LucideX className='text-destructive shrink-0' />
                                <p>Many struggle to pick the right tools and platforms to match
                                    their website's purpose.
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
                        <CardFooter className='pt-8'>
                            <Link className='block w-full' href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank'>
                                <Button size={`lg`} className='w-full uppercase'>Get rid of all that today!</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                </CardList>
            </CardBlock>
        </section>
    )
}
