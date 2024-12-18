import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'


export default function page() {
    return (
        <>
            <section className="wrapper new-section">
                <div className="container_background"></div>
                <div className="container_content u-container u-grid auto-grid gap-[var(--space-m)]">
                    <div className='space-y-[var(--space-s)]'>
                        <div className="textbox">
                            <h2 className='font-[family-name:var(--font-heading)] fs-2 capitalize 
        text-brand-black-75 text-center'>
                                Contact us
                            </h2>
                        </div>
                        <div className='space-y-[var(--space-s)]'>
                            <Input
                                placeholder='Name'
                                type='text' id='parent-name' name='parent-name' />
                            <Input
                                placeholder='Email'
                                type='text' id='parent-email' name='parent-email' />
                            <Input
                                placeholder='Phone'
                                type='tel' id='parent-phone' name='parent-phone' />
                                <Textarea placeholder='Message'/>
                            <div>
                                <Button >Submit</Button>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-48 sm:h-64 overflow-hidden rounded-md'>
                        <Image
                            src={`/images/portrait-of-a-pretty-little-girl-sitting-on-the-floor-during-class-and-making-eye-contact.jpg`}
                            alt='girl sitting on the floor during class and making eye contact'
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
