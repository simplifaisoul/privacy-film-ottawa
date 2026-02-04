import { ShieldCheck } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-6 w-6 text-blue-900" />
                        <span className="text-lg font-bold text-gray-900">Privacy Film Ottawa</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Privacy Film Ottawa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
