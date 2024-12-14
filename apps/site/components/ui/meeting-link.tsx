import React from 'react'
import Link from 'next/link'

export default function MeetingLink({ children }: { children: React.ReactNode }) {
    return (
        <Link href={`https://cal.com/chilu/meet`} className='block w-full' target='_blank'>
            {children}
        </Link>
    )
}
