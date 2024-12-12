import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import { TbSquareRoundedChevronRight } from "react-icons/tb";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const faqs = [
    {
        question: "What are your operating hours?",
        answer: "We’re open Monday to Friday from 7:00 AM to 6:00 PM.",
    },
    {
        question: "What safety measures do you have in place?",
        answer:
            "Our facility is equipped with secure entry systems, and all staff members are trained in first aid and CPR.",
    },
    {
        question: "How do you handle dietary needs?",
        answer: "We provide nutritious snacks and can accommodate most dietary restrictions with advance notice.",
    },
    {
        question: "What is your staff-to-child ratio?",
        answer: "We maintain a low ratio to ensure every child receives personal attention."
    }
]

const rotate = [
    "rotate-6",
    "-rotate-6",
    "rotate-12",
]

const faqGallery = [
    {
        image: `/images/classroom-kindergarten-interior-design.jpg`,
        alt: ``
    },
    {
        image: `/images/full-shot-kids-sitting-together-table.jpg`,
        alt: ``
    },
    {
        image: `/images/portrait-of-a-pretty-little-girl-sitting-on-the-floor-during-class-and-making-eye-contact.jpg`,
        alt: ``
    },
]

export default function FAQ() {
    return (
        <section className="wrapper new-section bg-brand-black-5 text-brand-black">
            <div className="content u-container u-grid place-items-center auto-grid">
                <div className="textbox order-2 space-y-4">
                    <h2 className='font-[family-name:var(--font-heading)] fs-2'>Got questions?</h2>
                    {/* <p>
                        Our daycare is designed with your child in mind. From colorful,
                        engaging classrooms to a safe and spacious outdoor play area, we
                        provide a space where children can learn, play, and grow with confidence.
                    </p> */}
                    <Accordion type="single" className='space-y-2' collapsible>
                        {
                            faqs.map((faq, index) => {
                                return (
                                    <AccordionItem value={faq.question} key={index}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>

                    <div className="cta">
                        <Link href={`#`}>
                            <Button className='capitalize italic p-0'
                                variant={`link`}>Have More Questions? Contact Us.</Button>
                        </Link>
                    </div>
                </div>

                <div className="slider-wrapper">
                    <div className="slider-content">
                        <div className="slide-item -space-y-[50%] relative flex flex-col items-center">
                            {/* <div className="slider-navigation">
                                <Button size={`icon`} variant={`ghost`} className='absolute top-1/2 -translate-y-1/2 left-0'>
                                    <TbSquareRoundedChevronLeft />
                                </Button>
                                <Button size={`icon`} variant={`ghost`} className='absolute top-1/2 -translate-y-1/2 right-0'>
                                    <TbSquareRoundedChevronRight />
                                </Button>
                            </div> */}
                            {
                                faqGallery.map((item, index) => {
                                    return (
                                        <div className={`image relative h-60 sm:h-80 
                                        aspect-square rounded-lg overflow-hidden 
                                        ${rotate[index]}`} key={index}>
                                            <div className="overlay absolute top-0 left-0 
                                            w-full h-full bg-brand-black-10 z-10"></div>
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                fill
                                                className={`mx-auto object-cover z-0`}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
