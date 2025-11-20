import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
    return (
        <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
            <div className="mb-10">
                {subtitle ? (
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm tracking-widest uppercase text-indigo-500 mb-2"
                    >
                        {subtitle}
                    </motion.p>
                ) : null}
                {title ? (
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-extrabold"
                    >
                        {title}
                    </motion.h2>
                ) : null}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}
