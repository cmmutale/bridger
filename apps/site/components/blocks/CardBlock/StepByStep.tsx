import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

export default function StepByStep() {
    return (
        <section className='sectin branding-primary'>
            <div className="section__wrapper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content">
                    <div className="grid grid-cols-2 space-y-8 justify-between">
                        <div className="section__copy space-y-4 text-center col-span-2">
                            <h1 className='font-bold text-3xl sm:text-4xl capitalize'>
                                How we work with you.
                            </h1>
                        </div>
                        <div className="image order-3">
                            <AspectRatio className='relative'>
                                <Image
                                    alt='Rocket launching from a laptop'
                                    fill
                                    className='object-cover'
                                    src={`/media/images/freepik_launch.jpeg`} />
                            </AspectRatio>
                        </div>
                        <div className="card__list order-2">
                            <div className='text-left'>
                                <Card className='flex-1'>
                                    <CardContent className='p-4 space-y-4'>
                                        <CardTitle>
                                            1. Questionnaire</CardTitle>
                                        <p>
                                            A short survey to help us get a sense on what your
                                            goals for your project.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className='flex-1'>
                                    <CardContent className='p-4 space-y-4'>
                                        <CardTitle>2. Discovery Call</CardTitle>
                                        <p>
                                            Get on a video call with us to review your site and
                                            let us know what you would love to change.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className='flex-1'>
                                    <CardContent className='p-4 space-y-4'>
                                        <CardTitle>3. Launch</CardTitle>
                                        <p>
                                            We help launch your site, point you to resources
                                            and continue to work with you on your journey!
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <Link
                                href={process.env.NEXT_PUBLIC_CALENDAR_LINK!}
                                target='_blank'
                                className='w-auto block'>
                                <Button
                                    className='mt-4 rounded-full hover:px-12 duration-300 
                                    hover:tracking-widest transition-all'
                                    variant={`default`} size={`lg`}>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
