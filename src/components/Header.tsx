import { ShieldCheck, Phone } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-8 w-8 text-blue-900" />
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        Privacy Film Ottawa
                    </span>
                </div>
                <nav className="flex items-center gap-6">
                    <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors hidden sm:block">
                        Benefits
                    </a>
                    <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors hidden sm:block">
                        Services
                    </a>
                    <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950">
                        <Phone className="mr-2 h-4 w-4" />
                        Get a Quote
                    </a>
                </nav>
            </div>
        </header>
    );
}
