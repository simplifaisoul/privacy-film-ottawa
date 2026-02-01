import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-blue-900 py-24 sm:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg
                    className="h-full w-full"
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container relative mx-auto px-4 text-center md:px-6 lg:px-8">
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    SPECIALIZING IN <br className="hidden sm:block" />
                    <span className="text-blue-200">RESIDENTIAL PRIVACY FILM</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100 sm:text-xl">
                    Enhance your home's privacy, security, and energy efficiency with premium window film solutions for Ottawa homeowners.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-900 shadow-lg transition-transform hover:scale-105 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        Get a Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a
                        href="#benefits"
                        className="text-base font-semibold text-white hover:text-blue-200"
                    >
                        Learn More <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
