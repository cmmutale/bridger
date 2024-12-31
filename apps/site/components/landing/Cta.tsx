import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { Button } from '../ui/button'
import MeetingLink from '../ui/meeting-link'

export default function Cta() {
    return (
        <section className="wrapper new-section section-h--tall py-[var(--space-l)] flex items-center rounded-[50px]">
            <div className="container_background"></div>
            <div className="container_content u-container u-container--narrow">
                <div className="textbox space-y-[var(--space-s)] flex items-center flex-col">
                    <h2 className='font-[family-name:var(--font-heading)] text-3xl text-center'>
                        Let’s Build Something Amazing Together
                    </h2>
                    <p className='mx-auto text-center'>
                        Ready to stand out from the crowd? Let’s chat about how we can make your next.
                    </p>
                    <MeetingLink>
                        <Button size={`lg`}>Lets Chat</Button>
                    </MeetingLink>
                </div>
            </div>
        </section>
    )
}
