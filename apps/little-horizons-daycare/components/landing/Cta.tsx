import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Cta() {
    return (
        <section className="wrapper new-section bg-brand-blue text-white">
            <div className="container_background w-full h-full relative bg-brand-black">
                <Image 
                src={`/images/portrait-of-a-pretty-little-girl-sitting-on-the-floor-during-class-and-making-eye-contact.jpg`}
                fill
                alt=''
                className='object-cover opacity-25'
                />
            </div>
            <div className="content u-container u-grid place-content-center max-w-3xl space-y-[var(--space-m)]">
                <div className="text-box space-y-4">
                    <h1 className='font-[family-name:var(--font-heading)] fs-4 text-balance 
          sm:text-center'>Join Our Little Horizons Family Today!</h1>
                    <p className='font-[family-name:var(--font-body)] fs-0 sm:text-center'>
                        Enrolling your child at Little Horizons is the first step
                        toward giving them the best start in life. Our dedicated team
                        is here to guide you through the process and answer any
                        questions you have. Spots fill quickly, so don’t wait!
                    </p>
                </div>
                <div className="cta flex flex-wrap gap-2 sm:justify-center">
                    <Link href={`#`}>
                        <Button className='capitalize'>Enroll today!</Button>
                    </Link>
                    <Link href={`#`}>
                        <Button className='capitalize' variant={`secondary`}>Schedule a tour</Button>
                    </Link>
                </div>
            </div>

        </section>
    )
}
