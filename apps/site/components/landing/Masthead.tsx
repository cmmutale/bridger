import Link from 'next/link'
import { Button } from '../ui/button'
import MeetingLink from '../ui/meeting-link'

export default function Masthead() {
    return (
        <section className="wrapper new-section bg-[var(--branding-primary)] text-[var(--branding-secondary)] min-h-[600px] grid place-content-center">
            <div className="content u-container space-y-[var(--space-l)]">
                <div className="textbox">
                    <h1 className='font-[family-name:var(--font-heading)] fs-5 font-bold'>
                        Affordable, Beautiful Websites for Local Businesses and Solopreneurs
                    </h1>
                </div>
                <div className="cta flex gap-[var(--space-m)] flex-wrap">
                    <MeetingLink>
                        <Button size={`lg`}>
                            Buy A Website
                        </Button>
                    </MeetingLink>
                    <Button size={`lg`} variant={`secondary`}>
                        Reserve A Strategy Call
                    </Button>
                </div>
            </div>
        </section>
    )
}
