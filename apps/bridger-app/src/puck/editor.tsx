"use client"

import type { Data } from "@measured/puck"
import { Puck } from "@measured/puck"
import type { Config } from "@measured/puck"
import "@measured/puck/puck.css"

// puck cfig
const config = {
    components: {
        HeadingBlock: {
            fields: {
                title: {
                    type: "text"
                },
            },
            render: ({ title }) => {
                return (
                    <h1>{title}</h1>
                )
            }
        }
    }
} as Config

const save = (data: Data) => {
    console.log('saving...', data)
}

const watch = (data: Data) => {
    // console.log('watching...', data)
}

export function Editor(params: { data: Data }) {
    return (
        <Puck data={params.data} config={config} onPublish={save} onChange={watch} />
    )
}
