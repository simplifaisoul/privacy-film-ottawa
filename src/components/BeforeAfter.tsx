import beforeAfterImg from '../assets/before-after.jpg';

export function BeforeAfter() {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <img
                        src={beforeAfterImg}
                        alt="Before and After: Privacy film transformation showing clear glass door vs frosted privacy film"
                        className="w-full rounded-lg shadow-xl border border-gray-200"
                    />
                </div>
            </div>
        </section>
    );
}
