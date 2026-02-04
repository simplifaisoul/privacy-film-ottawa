import { Award, ShieldCheck, ThumbsUp, MapPin } from 'lucide-react';

const stats = [
    { id: 1, name: 'Years of Experience', value: '25+', icon: Award },
    { id: 2, name: 'Homes & Businesses Serviced', value: '100\'s', icon: ShieldCheck },
    { id: 3, name: 'Customer Satisfaction', value: 'Guaranteed', icon: ThumbsUp },
    { id: 4, name: 'Locally Owned', value: 'Quick Turnaround', icon: MapPin },
];

export function Stats() {
    return (
        <section className="bg-blue-900 py-12 sm:py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-y-12 gap-x-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
                            <div className="flex items-center justify-center p-3 rounded-full bg-white/10 mb-2">
                                <stat.icon className="h-6 w-6 text-blue-200" />
                            </div>
                            <dt className="text-base leading-7 text-blue-200">{stat.name}</dt>
                            <dd className="order-first text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
