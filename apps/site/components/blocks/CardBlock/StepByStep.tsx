import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { CardBlock, CardCopyText, CardList } from '.'

export default function StepByStep() {
    return (
        <section className='min-h-[600px] flex items-center justify-center'>
            <CardBlock variant={`topToDown`}>
                <CardCopyText>
                    <h1 className='font-bold text-center text-3xl sm:text-4xl capitalize'>
                        How we work with you <span className='font-heading'> step by step</span>.
                    </h1>
                </CardCopyText>
                <CardList>
                    <div className='flex gap-4 justify-center flex-col sm:flex-row'>
                        <Card className='flex-1'>
                            <CardContent className='p-4 text-center space-y-4'>
                                <CardTitle>
                                    <Button className='font-heading text-xl rounded-full' size={`icon`} variant={`outline`}>1</Button>
                                    <span>{' '}Client Questionnaire</span></CardTitle>
                                <p>
                                    A short survey to help us get a sense on what your goals for your project.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className='flex-1'>
                            <CardContent className='p-4 text-center space-y-4'>
                                <CardTitle>
                                    <Button className='font-heading text-xl rounded-full' size={`icon`} variant={`outline`}>2</Button>
                                    <span>{` `}Discovery Call</span></CardTitle>
                                <p>
                                    Get on a video call with us to review your site and let us know what you would love to change.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className='flex-1'>
                            <CardContent className='p-4 text-center space-y-4'>
                                <CardTitle>
                                    <Button className='font-heading text-xl rounded-full' size={`icon`} variant={`outline`}>3</Button>
                                    <span>{` `}Launch</span></CardTitle>
                                <p>
                                    We help launch your site, point you to resources and continue to work with you on your journey!
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <Link href={process.env.NEXT_PUBLIC_CALENDAR_LINK!} target='_blank' className='w-auto text-center block'>
                        <Button className='mt-4 uppercase' variant={`default`} size={`lg`}>Get Started</Button>
                    </Link>
                </CardList>
            </CardBlock>
        </section>
    )
}
