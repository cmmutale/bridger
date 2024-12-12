import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideCheckCircle, LucideCheck } from 'lucide-react'

const pricing = [
    {
        name: 'Growth Plan',
        price: 50,
        pricePer: 'page',
        pricePerTime: 9.99,
        pricePerTimePer: 'month',
        features: [
            'Free Copywriting',
            '2x rounds of revisions per month',
            'Updates every 48 hours during design or maintenance process',
            '24hr response time for support and maintenance',
            'On demand maintenance calls',
            'Expert Project Management',
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
            '12hr response time for support and maintenance',
        ],
    },
]

export default function Pricing() {
    return (
        <section className='section branding-primary'>
            <div className="section__wrapper container mx-auto px-4 sm:px-6 py-24">
                <div className="section__content space-y-4">
                    <div className="section__copy max-w-xl mx-auto">
                        <h1 className='font-bold text-center text-3xl sm:text-4xl capitalize'>
                            Affordable Web Solutions for Businesses of All Sizes
                        </h1>
                    </div>

                    <div className="card__list flex flex-wrap justify-center gap-4">
                        {
                            pricing.map((item, index) => {
                                return (
                                    <Card key={index} className='basis-[300px] border border-inherit rounded-lg'>
                                        <CardHeader>
                                            <div>
                                                <span className='font-bold bg-black text-white px-3'>{item.name}</span>
                                            </div>
                                            <CardTitle>
                                                <div>
                                                    {'$'} <span>{item.price}</span> <span className='text-sm font-medium'>per page setup</span>
                                                </div>
                                                <div>
                                                    {'$'} <span>{item.pricePerTime}</span> <span className='text-sm font-medium'>monthly maintenance</span>
                                                </div>
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
