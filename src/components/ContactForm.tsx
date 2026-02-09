import { Upload, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
    const [fileName, setFileName] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [compressedImage, setCompressedImage] = useState<string | null>(null);

    const compressImage = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    // Resize if image is too large
                    const maxDimension = 800;
                    if (width > height && width > maxDimension) {
                        height = (height * maxDimension) / width;
                        width = maxDimension;
                    } else if (height > maxDimension) {
                        width = (width * maxDimension) / height;
                        height = maxDimension;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);

                    // Compress to JPEG with quality adjustment
                    const compressed = canvas.toDataURL('image/jpeg', 0.7);
                    resolve(compressed);
                };
                img.onerror = reject;
            };
            reader.onerror = reject;
        });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFileName(file.name);
            setSubmitStatus('idle');

            try {
                // Compress the image
                const compressed = await compressImage(file);
                setCompressedImage(compressed);
            } catch (error) {
                setErrorMessage('Failed to process image. Please try another file.');
                setSubmitStatus('error');
                e.target.value = '';
            }
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Initialize EmailJS with public key
            emailjs.init('IZU9ROapNY8GQerPw');

            // Prepare template parameters
            const templateParams = {
                from_name: formData.get('from_name'),
                from_email: formData.get('from_email'),
                phone: formData.get('phone') || 'Not provided',
                location: formData.get('location') || 'Not provided',
                message: formData.get('message') || 'No message provided',
                attachment: compressedImage || '' // Send compressed image as base64
            };

            // Send email with template parameters
            const result = await emailjs.send(
                'service_lvga4le',  // Service ID
                'template_fckxw8e', // Template ID
                templateParams
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                form.reset();
                setFileName(null);
                setCompressedImage(null);
            } else {
                setSubmitStatus('error');
                setErrorMessage('Something went wrong. Please try again.');
            }
        } catch (error: any) {
            setSubmitStatus('error');
            setErrorMessage(error?.text || 'Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
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

                    {submitStatus === 'success' && (
                        <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-green-900">Message Sent Successfully!</h3>
                                <p className="text-sm text-green-700 mt-1">
                                    Thank you for your inquiry. We'll get back to you within 24 hours.
                                </p>
                            </div>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-red-900">Submission Failed</h3>
                                <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                            </div>
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="from_name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="from_name"
                                        id="from_name"
                                        autoComplete="given-name"
                                        required
                                        disabled={isSubmitting}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="from_email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="from_email"
                                        id="from_email"
                                        autoComplete="email"
                                        required
                                        disabled={isSubmitting}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                                        disabled={isSubmitting}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-semibold leading-6 text-gray-900">Location</label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        disabled={isSubmitting}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                        placeholder="e.g., Kanata"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message / Details</label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    disabled={isSubmitting}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    placeholder="Please let us know what you are interested in having done, and any other relevant details"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Upload Photo (Optional - Auto-compressed)
                            </label>
                            <div className="flex w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-10 transition-colors hover:border-blue-400 hover:bg-blue-50">
                                <div className="text-center">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="mt-4 flex text-sm text-gray-600 justify-center">
                                        <label
                                            htmlFor="attachment"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="attachment"
                                                name="attachment"
                                                type="file"
                                                className="sr-only"
                                                onChange={handleFileChange}
                                                disabled={isSubmitting}
                                                accept="image/*"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF (automatically compressed for email)</p>
                                    {fileName && (
                                        <p className="mt-2 text-sm font-medium text-green-600">Selected: {fileName}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Request
                                        <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
