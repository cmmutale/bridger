import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Card } from '../ui/card'

const data = [
    {
        title: "Individuals & Potforlio",
        items: [
            {
                image: "/media/images/demo-expert_hiring.png",
                alt: "Hiring agency",
                desc: "Business Agency"
            },
            {
                image: "/media/images/demo-template-hawks.png",
                alt: "",
                desc: "Side Hustle"
            },
            {
                image: "/media/images/demo-template-krypto.png",
                alt: "",
                desc: "Crypto Startup"
            },
            // {
            //     image: "/media/images/demo-template-onthegoglow.png",
            //     alt: "",
            //     desc: "Local Business"
            // },
        ]
    },
]

export default function AboutIntro() {
    return (
        <section className="wrapper new-section relative bg-secondary text-secondary-foreground">
            <div className="container_background"></div>
            <div className="container_content u-container space-y-[var(--space-l)]">
                <div className="card-grid u-grid auto-grid gap-[var(--space-l)]">
                    {
                        data[0].items.map((_, index) => (
                            <Card key={index} className="image relative h-52 overflow-hidden">
                                <Image
                                    src={_.image}
                                    alt=''
                                    fill
                                    className='object-cover object-top'
                                />
                            </Card>
                        ))
                    }

                </div>
                <div className="textbox u-grid auto-grid">
                    <h2 className='font-[family-name:var(--font-heading)] font-bold text-2xl block md:text-right'>
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
                            <Button variant={`default`}>
                                Learn More About Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
