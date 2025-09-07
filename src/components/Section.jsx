import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
    return (
        <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
            <div className="mb-10">
                {subtitle ? (
                    <p className="text-sm tracking-widest uppercase text-indigo-500 mb-2">{subtitle}</p>
                ) : null}
                {title ? (
                    <h2 className="text-3xl sm:text-4xl font-extrabold">{title}</h2>
                ) : null}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}


