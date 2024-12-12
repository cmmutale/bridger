import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Masthead() {
    return (
        <section className="wrapper relative min-h-[600px] text-white">
            <div className="container_background relative h-full w-full bg-brand-black">
                <Image
                    src={`/images/teacher-toddler-playing-with-maths-puzzle-game-sitting-table-kindergarten.jpg`}
                    alt='masthead background'
                    className='object-cover opacity-50'
                    fill />
            </div>
            <div className="container_content u-container u-grid place-content-center space-y-[var(--space-m)]">
                <div className="textbox space-y-[var(--space-s)]">
                    <h1 className='font-[family-name:var(--font-heading)] fs-5 text-balance 
sm:text-center'>Bright Futures Begin at little horizons!</h1>
                    <p className='font-[family-name:var(--font-body)] fs-0 sm:text-center mx-auto'>
                        {`
    Welcome to Little Horizons Daycare, where your child's growth, happiness,
    and safety come first. From their first steps to their biggest milestones,
    we're here to guide them every step of the way
        `}
                    </p>
                </div>
                <div className="cta flex flex-wrap gap-2 sm:justify-center">
                    <Link href={`#`}>
                        <Button className='capitalize'>Schedule a Tour!</Button>
                    </Link>
                    <Link href={`#`}>
                        <Button className='capitalize' variant={`secondary`}>About Us</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

