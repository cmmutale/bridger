import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="container--footer">
            <div className="inner">
                <div className='box'>
                    <Link className='btn btn--cta' href={`#`}>
                        GET A QUOTE
                    </Link>
                </div>

                <div className='box p-4 flex flex-col justify-center items-center space-y-4'>
                    <div className="logo font-black text-4xl">
                        NODEDROP
                    </div>
                    <div>
                        <p>Built by the Nodedrop Team.</p>
                    </div>
                </div>
                <div className="box p-4 flex items-center justify-center font-bold">
                    <div>See more templates</div>
                </div>
            </div>
        </footer>
    )
}
