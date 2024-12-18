import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

const programs = [
    {
        age: "Infant Care (0-12 months)",
        description: "A cozy, nurturing environment where your baby’s milestones are celebrated and their routines are respected",
        coverImage: "children-kindergarten-with-toys.jpg",
        color: {
            button: "bg-brand-blue hover:bg-brand-blue-shade shadow-brand-blue-shade",
            coverImage: "border-brand-blue"
        }
    },
    {
        age: "Toddler Program (1-3 years)",
        description: "Hands-on activities that encourage exploration, social skills, and early learning.",
        coverImage: "adorable-caucasian-boy-playing-with-tractor-toy-sitting-floor-kindergarten.jpg",
        color: {
            button: "bg-brand-green hover:bg-brand-green-shade shadow-brand-green-shade",
            coverImage: "border-brand-green"
        }
    },
    {
        age: "Preschool Program (3-5 years)",
        description: "Preparing young learners for school with fun, engaging lessons in literacy, math, and science.",
        coverImage: "shot-kids sitting-together-at-table.jpg",
        color: {
            button: "bg-brand-orange hover:bg-brand-orange-shade shadow-brand-orange-shade",
            coverImage: "border-brand-orange"
        }
    },
    {
        age: "After-School Program (5+ years)",
        description: "A safe, stimulating space for older children to complete homework, make friends, and explore their interests.",
        coverImage: "children-playing-with-their-kindergarten-teacher.jpg",
        color: {
            button: "bg-brand-purple hover:bg-brand-purple-shade shadow-brand-purple-shade",
            coverImage: "border-brand-purple"
        }
    },

]


export default function Programs() {
    return (
        <section className="wrapper new-section" id='programs-and-activities'>
            <div
                style={{
                    '--column-min-width': '320px',
                } as React.CSSProperties}
                className="u-container u-grid auto-grid">
                <div className="textbox font-[family-name:var(--font-body)] text-brand-black 
      space-y-[var(--space-m)]">
                    <h2 className='font-[family-name:var(--font-heading)] fs-2'>
                        Programs tailored for every age group</h2>
                    <p>
                        We believe every child is unique and deserves care and activities that
                        match their developmental stage. That’s why our programs are thoughtfully
                        crafted to support children at every age and stage of growth.
                    </p>
                    <div className="cta">
                        <Link href={`#`}>
                            <Button className='capitalize'>Explore our programs</Button>
                        </Link>
                    </div>
                </div>

                <div className="card-container">
                    <div
                        style={{
                            '--column-min-width': '240px',
                        } as React.CSSProperties}
                        className="card-container-content u-grid auto-grid">

                        {
                            programs.map((program, index) => {
                                return (
                                    <div key={index} className="card text-brand-green">
                                        <div className="card-img h-40 w-full relative">
                                            <Image
                                                src={`/images/${program.coverImage}`}
                                                className={`rounded-lg border-4 object-cover ${program.color.coverImage}`}
                                                fill
                                                alt=''
                                            />
                                        </div>
                                        <div className="card-content pt-4 space-y-2">
                                            <div className="card-header">
                                                <h3 className="card-title font-bold fs-0 text-brand-black">
                                                    {program.age}
                                                </h3>
                                            </div>
                                            <div className="card-body">
                                                <p className='text-brand-black-75'>
                                                    {program.description}
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <Link href={`#`}>
                                                    <Button size={`sm`} className={`shadow-md ${program.color.button}`}>
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
