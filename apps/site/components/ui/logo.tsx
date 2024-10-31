import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface LogoProps {
    className?: string;
    width?: number;
    link?: boolean;
    height?: number;
    mode?: 'light' | 'dark';
}
export default function Logo({ width, link, height, mode, className }: LogoProps) {
    return (
        <Link className='block' href={link ? "/" : "#"}>
            <Image
                src={`/media/images/logo-dark.svg`}
                alt='image logo'
                width={150}
                height={100}
            />
        </Link>
    )
}
