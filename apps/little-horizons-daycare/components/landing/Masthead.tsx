import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Masthead() {
    return (
        <section className="masthead">
            <div className="wrapper py-12 min-h-[600px] text-white h-full bg-blue-500 
    flex flex-col justify-center items-center">
                <div className="content container max-w-3xl mx-auto px-4 space-y-4">
                    <div className="text-box space-y-4">
                        <h1 className='font-[family-name:var(--font-heading)] fs-5 text-balance 
          sm:text-center'>Bright Futures Begin at little horizons!</h1>
                        <p className='font-[family-name:var(--font-body)] fs-0 sm:text-center'>
                            {
                                `
                            Welcome to Little Horizons Daycare, where your child's growth, happiness,
                            and safety come first. From their first steps to their biggest milestones,
                            we're here to guide them every step of the way

                                `
                            }
                        </p>
                    </div>
                    <div className="cta flex flex-wrap gap-2 sm:justify-center">
                        <Link href={`#`}>
                            <Button>Schedule a Tour!</Button>
                        </Link>
                        <Link href={`#`}>
                            <Button variant={`secondary`}>About Us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
