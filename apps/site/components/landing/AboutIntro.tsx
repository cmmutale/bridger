import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function AboutIntro() {
    return (
        <section className="wrapper new-section relative bg-[var(--branding-primary)] text-[var(--branding-secondary)]">
            <div className="container_background"></div>
            <div className="container_content u-container">
                <div className="textbox u-grid auto-grid">
                    <h2 className='font-[family-name:var(--font-heading)] font-bold fs-3 block md:text-right'>
                        We Build Websites That Work as Hard as You Do
                    </h2>
                    <div className='space-y-[var(--space-m)]'>
                        <p className='block'>
                            At Nodedrop, we specialize in creating affordable, custom
                            websites for local businesses and solopreneurs. From design and
                            development to hosting and maintenance, we’re here to take the
                            stress out of building your online presence. Whether you’re
                            starting from scratch or improving an existing site, our team
                            ensures your website not only looks great but works seamlessly for your goals.
                        </p>
                        <Link href={`/about`} className='block'>
                            <Button>
                                Learn More About Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
