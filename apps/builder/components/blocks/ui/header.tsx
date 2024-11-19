import Link from 'next/link'
import React from 'react';

export default function Header() {
    return (
        <header className="container--header">
            <div className="inner">
                <div className="content">
                    {/* logo */}
                    <Link className='block site-logo' href={`/`}></Link>
                    <div className="header-navigation"></div>
                    <div className="header-actions">
                        <Link href={`#`} className='btn btn--primary btn--default'>GET A QOUTE</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
