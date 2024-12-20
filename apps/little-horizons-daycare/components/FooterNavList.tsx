import Link from 'next/link'

interface NavItem {
    href: string
    label: string
}

interface FooterNavListProps {
    title: string
    items: NavItem[]
}

export function FooterNavList({ title, items }: FooterNavListProps) {
    return (
        <div className="space-y-3">
            <h3 className="fs-1 font-semibold text-inherit">{title}</h3>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="fs-0 text-inherit">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

