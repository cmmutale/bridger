"use client"
import Link from 'next/link'
// import { fontAlt, fontBody, fontHeading } from "../fonts";
import { fontAlt, fontBody, fontHeading } from './fonts'


import React from 'react'
import { Button } from '@/components/ui/button'

export default function error() {
    return (
        <div
            className={`${fontAlt.variable} 
${fontBody.variable} 
${fontHeading.variable} antialiased min-h-screen w-full grid place-content-center place-items-center space-y-6`}>
            <h2 className="fs--0">Something went wrong!</h2>
            <Link href={`/`} className='block'>
                <Button>Go Home</Button>
            </Link>
        </div>

    )
}
