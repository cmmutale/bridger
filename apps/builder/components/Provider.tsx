import React from 'react'
import { Toaster } from './ui/toaster'

interface Props {
    children: React.ReactNode
}

export default function Provider({ children }: Props) {
    return (
        <>
            {children}
            <Toaster />
        </>
    )
}
