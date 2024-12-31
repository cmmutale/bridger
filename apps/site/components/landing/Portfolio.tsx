"use client"

import { AspectRatio } from '../ui/aspect-ratio';
import Link from 'next/link';
import { Button } from '../ui/button';

// import required modules
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { CheckIcon } from 'lucide-react';

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

export default function Portfolio() {
    return (
        <section className="wrapper new-section section-h--short">
            <div className="container_background"></div>
            <div className="container_content u-container">
                {/* <div className="textbox space-y-[var(--space-s)]"></div> */}

                <div className='card-grid space-y-[var(--space-m)]'>
                    <div className='card-grid_content u-grid auto-grid'>
                        {
                            data[0].items.map((_, index) => (
                                <Card key={index} className="image relative h-72 border-accent border-4 overflow-hidden shadow-[]">
                                    <div className='relative w-full h-full overflow-hidden'>
                                        <Image
                                            src={_.image}
                                            alt=''
                                            fill
                                            className='object-cover object-top'
                                        />
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}
