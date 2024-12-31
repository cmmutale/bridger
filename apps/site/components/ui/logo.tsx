import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    width?: number;
    link?: boolean;
    height?: number;
}

export default function Logo({ width = 200, link, height = 150 }: LogoProps) {
    return (
        <Link className='block' href={link ? "/" : "/"}>
            <Image
                src={`/media/svg/logo.svg`}
                alt='image logo'
                width={width}
                height={height}
            />
        </Link>
    )
}
