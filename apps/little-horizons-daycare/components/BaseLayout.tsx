import React from 'react'
import Cta from './landing/Cta';
import ResponsiveNavigationHeader from './ResponsiveNavigationHeader';
import { ResponsiveFooter } from './ResponsiveFooter';

export default function BaseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ResponsiveNavigationHeader />
            {/* <Header /> */}
            <main>
                {children}
            </main>
            <Cta />
            <ResponsiveFooter />
            {/* <Footer /> */}
        </div>
    )
}
