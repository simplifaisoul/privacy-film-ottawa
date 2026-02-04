import { Upload, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <section id="contact" className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-xl md:p-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get a Free Quote</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Fill out the form below to request a quote. Please Upload any images of the space to give us a more accurate assessment.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone Number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-semibold leading-6 text-gray-900">Location</label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        id="location"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        placeholder="e.g., Kanata"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message / Details</label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    placeholder="Please let us know what you are interested in having done, and any other relevant details"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Upload Photo (Optional)</label>
                            <div className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-10 transition-colors hover:border-blue-400 hover:bg-blue-50">
                                <div className="text-center">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="mt-4 flex text-sm text-gray-600 justify-center">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    {fileName && (
                                        <p className="mt-2 text-sm font-medium text-green-600">Selected: {fileName}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-8 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Request
                                <Send className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
