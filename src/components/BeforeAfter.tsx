import beforeAfterImg from '../assets/before-after.jpg';

export function BeforeAfter() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl relative">
                    <img
                        src={beforeAfterImg}
                        alt="Before and After: Privacy film transformation showing clear glass door vs frosted privacy film"
                        className="w-full rounded-lg shadow-xl border border-gray-200"
                    />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <span className="inline-flex items-center rounded-md bg-white/90 px-3 py-1 text-xs font-bold font-mono text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm backdrop-blur-sm">
                            BEFORE
                        </span>
                    </div>
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                        <span className="inline-flex items-center rounded-md bg-blue-900/90 px-3 py-1 text-xs font-bold font-mono text-white shadow-sm ring-1 ring-inset ring-blue-500 sm:text-sm backdrop-blur-sm">
                            AFTER
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
