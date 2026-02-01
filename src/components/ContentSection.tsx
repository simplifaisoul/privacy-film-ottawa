import { cn } from "../lib/utils";
import { motion } from "framer-motion";

interface ContentSectionProps {
    imageSrc: string;
    imageAlt: string;
    title?: string;
    content: React.ReactNode;
    imagePosition?: "left" | "right";
    className?: string;
    id?: string;
}

export function ContentSection({
    imageSrc,
    imageAlt,
    title,
    content,
    imagePosition = "left",
    className,
    id,
}: ContentSectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24 overflow-hidden", className)}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={cn(
                            "w-full lg:w-1/2 relative",
                            imagePosition === "right" ? "lg:order-last" : "lg:order-first"
                        )}
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        {title && (
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {title}
                            </h2>
                        )}
                        <div className="prose prose-lg text-gray-600">
                            {content}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
