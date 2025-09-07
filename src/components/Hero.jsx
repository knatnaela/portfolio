import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
                <div className="absolute -inset-[10%] bg-[radial-gradient(100%_100%_at_50%_0%,#4f46e5_0%,#06b6d4_45%,transparent_60%)] blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl sm:text-6xl font-black tracking-tight"
                >
                    Building scalable backends and delightful mobile apps
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
                >
                    I’m Natnael Adane, a full‑stack and mobile developer focused on performance,
                    clean architecture, and great UX.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="mt-10 flex items-center gap-4"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-500 transition-colors"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-5 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}


