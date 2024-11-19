import React from 'react'
import Link from 'next/link'

export default function ActionRow({ action }: any) {
    return (
        <div className="actions flex flex-row flex-wrap gap-4">
            {
                action && action.map((actionItem: any, i: number) => {
                    return (
                        <Link key={i} href={actionItem.url || "#"}
                            className="btn">
                            {actionItem.label}
                        </Link>
                    )
                }
                )
            }
        </div>
    )
}
