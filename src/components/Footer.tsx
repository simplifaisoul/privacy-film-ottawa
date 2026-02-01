import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-6 w-6 text-blue-900" />
                            <span className="text-lg font-bold text-gray-900">Privacy Film Ottawa</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            Specializing in residential privacy film to enhance security, privacy, and energy efficiency.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Service Areas</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Ottawa</li>
                            <li>Stittsville</li>
                            <li>Kanata</li>
                            <li>Orleans</li>
                            <li>Surrounding Areas</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-blue-900" />
                                <a href="mailto:privacyfilmottawa@gmail.com" className="hover:text-blue-900 hover:underline">
                                    privacyfilmottawa@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-blue-900" />
                                <span>March Road, Ottawa</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Legal</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>&copy; {new Date().getFullYear()} Privacy Film Ottawa</li>
                            <li>All rights reserved.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
