import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideCheckCircle, LucideCheck } from 'lucide-react'

const pricing = [
    {
        name: 'Starter Plan',
        price: 50,
        pricePer: 'page',
        pricePerTime: 5.99,
        pricePerTimePer: 'month',
        features: [
            'Free Copywriting',
            '2x rounds of revisions per month',
            'Updates every 48 hours during design or maintenance process',
            'Framer/Wordpress Development: +$20',
            '24hr response time for support and maintenance',
        ],
    },
    {
        name: 'Growth Plan',
        price: 50,
        pricePer: 'page',
        pricePerTime: 9.99,
        pricePerTimePer: 'month',
        features: [
            '+ Starter plan',
            'On demand maintenance calls',
            'Expert Project Management',
            '12hr response time for support and maintenance',
        ],
    },
    {
        name: 'Enterprise Plan',
        price: 50,
        pricePer: 'page',
        pricePerTime: 19.99,
        pricePerTimePer: 'month',
        features: [
            '+ Growth Plan',
            'Custom software development and solutions',
            'Pitch deck and branding consultation',
            'Live Chat support',
        ],
    },
]
export default function Pricing() {
    return (
        <section className='section branding-primary'>
            <div className="section__wrapper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content">
                    <div className="section__copy max-w-xl mx-auto">
                        <h1 className='font-bold text-center text-3xl sm:text-4xl capitalize'>
                            Affordable Web Solutions for Businesses of All Sizes
                        </h1>
                    </div>

                    <div className="card__list grid lg:grid-cols-3">
                        {
                            pricing.map((item, index) => {
                                return (
                                    <Card key={index}>
                                        <CardHeader>
                                            <div>
                                                <span className='font-bold bg-black text-white px-3'>{item.name}</span>
                                            </div>
                                            <CardTitle>
                                                {item.price} <span className='text-base'>/page</span>,
                                                {item.pricePerTime}
                                                <span className='text-base'>/month</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className=''>
                                            <div className='clip-text'>
                                                <ul>
                                                    {
                                                        item.features.map((feature, index) => {
                                                            return (
                                                                <li key={index} className='flex items-start gap-2'>
                                                                    <LucideCheck className='shrink-0' />
                                                                    {feature}
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>

                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </section>
    )
}
