import React from 'react'
import { CardBlock, CardCopyText, CardList } from '.'
import { Card, CardContent, CardFooter } from '../../ui/card'
import { LucideCheckCircle } from 'lucide-react'
import { Button } from '../../ui/button'
import Link from 'next/link'

export default function SolutionStatement() {
    return (
        <section className='min-h-[600px] items-center justify-center'>
            <CardBlock variant="default">
                <CardCopyText>
                    <h1 className='capitalize font-bold font-body text-center 
                        sm:text-right text-3xl lg:text-4xl'>
                        Some <span className='font-heading'> benefits </span> you get when
                        working with us.
                    </h1>

                </CardCopyText>
                <CardList>
                    <Card className='shadow-xl'>
                        <CardContent className='p-6 space-y-4'>
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
                        <CardFooter>
                            <Link className='block w-full' href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank'>
                                <Button size={`lg`} className='w-full uppercase'>Get all that today!</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                </CardList>
            </CardBlock>
        </section>
    )
}
