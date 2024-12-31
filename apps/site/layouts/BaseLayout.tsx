import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Landing({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>{children}</main>
    )
}
