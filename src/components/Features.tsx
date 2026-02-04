import { Shield, Eye, Sun, Zap } from 'lucide-react';

const features = [
    {
        name: 'Privacy',
        description: 'Obscure views while keeping light.',
        icon: Eye,
        className: 'bg-blue-50 text-blue-900',
    },
    {
        name: 'Security',
        description: 'Reinforce glass against breaks.',
        icon: Shield,
        className: 'bg-indigo-50 text-indigo-900',
    },
    {
        name: 'UV Protection',
        description: 'Block 99% of harmful rays.',
        icon: Sun,
        className: 'bg-amber-50 text-amber-900',
    },
    {
        name: 'Energy Savings',
        description: 'Lower heating & cooling costs.',
        icon: Zap,
        className: 'bg-emerald-50 text-emerald-900',
    },
];

export function Features() {
    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Why Choose Window Film?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Transform your front door into a feature that is safe, private, and efficient.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="group relative flex flex-col items-center p-6 text-center bg-blue-900 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-blue-800"
                            >
                                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-transparent ring-1 ring-white/30 text-white`}>
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    {feature.name}
                                </h3>
                                <p className="text-base text-blue-100">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
