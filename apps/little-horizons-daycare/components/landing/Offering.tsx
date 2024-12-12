import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const offers = [
    {
        offer: "Experienced and Caring Staff",
        description: "Our team is trained, certified, and passionate about creating a loving environment for every child.",
        coverImage: "teacher-toddler-playing-with-maths-puzzle-game-sitting-table-kindergarten.jpg",
        color: {
            coverImage: "border-brand-orange",
            button: "bg-brand-orange hover:bg-brand-orange-shade shadow-brand-orange-shade"
        }
    },
    {
        offer: "Safe and Modern Facilities",
        description: "From secure entry systems to child-safe play areas, your child’s safety is our top priority.",
        coverImage: "classroom-kindergarten-interior-design.jpg",
        color: {
            coverImage: "border-brand-orange",
            button: "bg-brand-orange hover:bg-brand-orange-shade shadow-brand-orange-shade"
        }
    },
    {
        offer: "Engaging Curriculum",
        description: "We balance play and learning to ensure your child develops essential skills while having fun.",
        coverImage: "hands-child-who-smeared.jpg",
        color: {
            coverImage: "border-brand-orange",
            button: "bg-brand-orange hover:bg-brand-orange-shade shadow-brand-orange-shade"
        }
    },
    {
        offer: "Flexibility for Busy Families",
        description: "With extended hours and personalized care plans, we make it easier to balance work and family life.",
        coverImage: "full-shot-kids-sitting-together-table.jpg",
        color: {
            coverImage: "border-brand-orange",
            button: "bg-brand-orange hover:bg-brand-orange-shade shadow-brand-orange-shade"
        }
    },

]

export default function Offering() {
    return (
        <section className="wrapper new-section bg-brand-blue text-white">
            <div className="u-container u-grid space-y-[var(--space-m)]">
                <div className="textbox max-w-3xl mx-auto">
                    <h2 className="font-[family-name:var(--font-heading)] fs-3 capitalize text-center">
                        Why families choose Little Horizons Daycare
                    </h2>
                </div>
                <div className="card-wrapper">
                    <div 
                    style={{
                        '--column-min-width': '240px',
                    }}
                    className="card-container u-grid auto-grid">
                        {
                            offers.map((offer, index) => {
                                return (
                                    <div key={index} className="card text-white">
                                        <div className="card-img h-40 w-full relative">
                                            <Image
                                                src={`/images/${offer.coverImage}`}
                                                className={`rounded-lg border-4 object-cover
                                                    ${offer.color.coverImage}`}
                                                    fill
                                                alt=''
                                            />
                                        </div>
                                        <div className="card-content pt-4 space-y-2">
                                        <div className="card-header w-[90%]">
                                            <h3 className="card-title font-bold fs-0">
                                                {offer.offer}
                                            </h3>
                                        </div>
                                        <div className="card-body w-[90%]">
                                            <p className='fs--1'>
                                                {offer.description}
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <Link href={`#`}>
                                                <Button size={`sm`} className={`shadow-md ${offer.color.button}`}>
                                                    See program</Button>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </section>
    )
}
