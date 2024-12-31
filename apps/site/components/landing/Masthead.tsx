import Link from 'next/link'
import { Button } from '../ui/button'
import MeetingLink from '../ui/meeting-link'

export default function Masthead() {
    return (
        <section className="wrapper new-section section-h--tall grid place-content-center">
            <div className="content u-container space-y-[var(--space-m)]">
                <div className="textbox space-y-[var(--space-m)]">
                    <h1 className='font-[family-name:var(--font-heading)] text-4xl text-center font-medium text-balance'>
                        We Build Websites for Businesses & Solopreneurs
                    </h1>
                    <p className='mx-auto text-center'>
                        We help businesses of all sizes grow by designing smart, functional
                        websites that drive sales, streamline operations, and solve real-world problems.
                    </p>
                </div>
                <div className="cta flex gap-[var(--space-m)] flex-wrap justify-center">
                    <Link href={`/templates`}>
                        <Button size={`default`} variant={`outline`}>
                            See Our Templates
                        </Button>
                    </Link>
                    <MeetingLink>
                        <Button size={`default`} variant={`default`}>
                            Free 15 min Consultation
                        </Button>
                    </MeetingLink>
                </div>
            </div>
        </section>
    )
}
