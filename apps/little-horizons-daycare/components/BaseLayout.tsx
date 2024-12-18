import React from 'react'
import Header from './header';
import Cta from './landing/Cta';
import Footer from './Footer';

export default function BaseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Cta />
            <Footer />
        </div>
    )
}
