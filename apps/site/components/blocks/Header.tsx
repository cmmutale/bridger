import Link from 'next/link'
import { Button } from '../ui/button'

export default function Header() {
    return (
        <div className="navigation z-50 sticky top-0 w-full shadow-lg branding-primary">
            <div className="navigation__wrapper container mx-auto px-4 py-8">
                <div className="navigation__content flex items-center">
                    <div>
                        <h1 className='font-black text-2xl leading-none'>Nodedrop <br />Design</h1>
                    </div>
                    <div className="navigation__menu grow">
                        <nav className="navigation__content px-8 pl-12">
                            <ul className='font-semibold flex gap-4 text-lg'>
                                <li className='hover:underline duration-150 transition-all'>
                                    <Link href={`#`}>
                                        Our work
                                    </Link>
                                </li>
                                <li className='hover:underline duration-150 transition-all'>
                                    <Link href={`#`}>
                                        Contact us
                                    </Link>
                                </li>
                                <li className='hover:underline duration-150 transition-all'>
                                    <Link href={`#`}>
                                        About us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="navigation__cta">
                        <div className="button--row flex flex-wrap gap-4 justify-center">
                            <Link href={`#`}>
                                <Button
                                    size={`lg`}
                                    className='rounded-full bg-black hover:bg-black/80
                                    hover:px-12 hover:tracking-widest 
                                    duration-300 transition-all
                                    active:px-6'>Book a call</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
