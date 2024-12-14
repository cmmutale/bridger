'use client' // Error boundaries must be Client Components

import { fontAlt, fontBody, fontHeading } from "./fonts";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        // global-error must include html and body tags
        <html>
            <body
                className={`${fontAlt.variable} 
        ${fontBody.variable} 
        ${fontHeading.variable} antialiased min-h-screen w-full grid place-content-center place-items-center`}>
                <h2 className="fs--0">Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    )
}