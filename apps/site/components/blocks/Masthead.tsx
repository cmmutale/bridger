import Link from 'next/link'
import { Button } from '../ui/button'

export default function Masthead() {
    return (
        <div className="section section--masthead branding-primary">
            <div className="section__wrapper container mx-auto px-4 py-24">
                <div className="section__content space-y-4">
                    <div className="section__copy text-center max-w-3xl mx-auto space-y-4">
                        <h1 className='text-4xl sm:text-5xl font-bold'>
                            Building websites that work for you.
                        </h1>
                        <p className='text-base'>
                            Reach the audience you want where they are.
                        </p>
                    </div>
                    <div className="section__cta">
                        <div className="button--row flex flex-wrap justify-center gap-4">
                            <Link href={`#`}>
                                <Button
                                    size={`lg`}
                                    className='rounded-full bg-black hover:bg-black/80 
                                    hover:px-12 hover:tracking-widest duration-300 transition-all
                                    active:px-6'>Reserve a meeting</Button>
                            </Link>
                            <Link href={`#`}>
                                <Button
                                    variant={`outline`}
                                    size={`lg`}
                                    className='rounded-full hover:px-12 duration-300 
                                    hover:tracking-widest transition-all
                                    active:px-6'>See our work</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
