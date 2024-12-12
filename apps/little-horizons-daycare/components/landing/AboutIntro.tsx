import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function AboutIntro() {
    return (
        <section className="wrapper bg-brand-black-5 new-section">
            <div className="space-y-[var(--space-m)] u-container u-grid place-content-center">
                <div className="textbox space-y-[var(--space-s)]">
                    <h2 className='font-[family-name:var(--font-heading)] fs-2 capitalize 
        text-brand-black-75'>
                        A little about us
                    </h2>
                    <div>

                    </div>
                    <p className='sm:columns-2'>
                        At Little Horizons, we’re more than just a daycare – we’re a family. With
                        years of experience and a passion for nurturing young minds, our team is
                        committed to providing a loving and stimulating environment for every child.
                        Our mission is simple: to empower children to explore, learn, and grow
                        while giving parents peace of mind.

                        With certified caregivers, modern facilities, and a curriculum designed to
                        spark curiosity, we’re dedicated to helping your child reach new horizons
                        every day.
                    </p>
                </div>
                <div className="cta flex justify-start">
                    <Link href={`#`}>
                        <Button className='capitalize'>Learn more</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
