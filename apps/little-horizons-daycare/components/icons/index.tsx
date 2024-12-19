import React from 'react'

export default function Icons({ iconName }: { iconName: string }) {
    const Icon = require(`./${iconName}.svg`).default;

    return (
        <>
            <Icon />
        </>
    )
}
