import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const testimonials = [
    {
        name: "Sarah M",
        review: "Choosing Little Horizons was the best decision we made for our son. The staff is incredibly caring, and we’ve seen such amazing growth in his confidence and social skills.",
        title: "Parent"
    },
    {
        name: "Mike L",
        review: "The day care program is a great fit for our family. The teachers are so supportive and the environment is so fun.",
        title: "Parent"
    },
    {
        name: "Lisa R",
        review: "I highly recommend Little Horizons to anyone looking for a safe and nurturing environment for their child.",
        title: "Guardian"
    }
]

export default function Testimonials() {
    return (
        <section className="wrapper new-section bg-white text-brand-black">
            <div className="u-container u-grid place-content-center
    font-[family-name:var(--font-body)]">
                <div className="textbox space-y-4">
                    <h2 className='font-[family-name:var(--font-heading)] fs-2 capitalize'>
                        Hear from happy families
                    </h2>
                    <div className='u-grid auto-grid'>

                        {
                            testimonials.map((testimonial, index) => {
                                return (
                                    <div key={index} className="testimonial space-y-2 border-4 border-brand-black-10 rounded-lg">
                                        <div className="testimonial-header items-center space-x-2 px-2 pt-4">
                                            <p className='fs--1'>
                                                {'"'}{testimonial.review}{'"'}
                                            </p>
                                        </div>
                                        <div className="testimonial-body flex justify-center px-2 py-4">
                                            <div className="testimonial-name font-bold fs--1">
                                                {testimonial.name}{", "}{testimonial.title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cta flex justify-start">
                    {/* <Link href={`#`}>
                        <Button className='capitalize'>Learn more about us</Button>
                    </Link> */}
                </div>
            </div>
        </section>
    )
}
