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
                        <div key={stat.id} className="flex flex-col items-center justify-start text-center">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                                <stat.icon className="h-6 w-6 text-blue-200" />
                            </div>
                            <dd className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                {stat.value}
                            </dd>
                            <dt className="text-sm font-medium leading-6 text-blue-200 uppercase tracking-wide">
                                {stat.name}
                            </dt>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
