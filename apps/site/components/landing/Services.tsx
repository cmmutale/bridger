import React from 'react'
import Image from 'next/image'

const services = [
    {
        name: 'Website Design',
        description: 'Tailored designs that reflect your brand identity and solve specific business challenges',
        // icon: <LucideMonitor className='size-12' />,
    },
    {
        name: 'Website Development',
        description: 'Ready-to-use templates designed for a variety of industries, including daycare and bakery businesses.',
        // icon: <LucidePaintbrush className='size-12' />,
    },
    {
        name: 'Branding & Pitch Decking',
        description: `Modernize outdated websites for improved aesthetics, functionality, and performance`,
        // icon: <LucideSettings className='size-12' />,
    },
    {
        name: 'Maintenance & Hosting',
        description: `Enhance search engine visibility with keyword-driven content and best practices`,
        // icon: <LucideSettings className='size-12' />,
    },
]

const projectGallery = [
    "/media/images/demo-expert_hiring.png",
    "/media/images/demo-template-hawks.png",
    "/media/images/demo-template-krypto.png",
    "/media/images/demo-template-onthegoglow.png",
]

const rotate = [
    'rotate-12',
    '-rotate-6',
    'rotate-12',
    '-rotate-6',
]

export default function Services() {
    return (
        <section className="wrapper new-section section-h--medium" id='services'>
            <div className="u-container-background"></div>
            <div className="container u-container u-grid auto-grid">
                <div className="textbox space-y-[var(--space-m)]">
                    <h2 className='font-[family-name:var(--font-heading)] text-3xl text-center font-medium capitalize'>
                        Comprehensive solutions to meet your website needs.
                    </h2>
                    <div className="card-grid u-grid auto-grid">
                        {
                            services.map((item, index) => {
                                return (
                                    <div key={index} className="space-y-[var(--space-3xs)] py-[var(--space-l)] px-[var(--space-xs)]">
                                        <h3 className='font-[family-name:var(--font-heading)] text-xl font-medium'>{item.name}</h3>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
