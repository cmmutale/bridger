"use client"
// import { fontAlt, fontBody, fontHeading } from "../fonts";
import { fontAlt, fontBody, fontHeading } from './app/fonts'


import React from 'react'

export default function error() {
    return (
        <html>
            <body
                className={`${fontAlt.variable} 
        ${fontBody.variable} 
        ${fontHeading.variable} antialiased min-h-screen w-full grid place-content-center place-items-center`}>
                <h2 className="fs--0">Something went wrong!</h2>
                {/* <button onClick={() => reset()}>Try again</button> */}
            </body>
        </html>
    )
}
