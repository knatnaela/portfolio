import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiZap } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -inset-[10%] bg-[radial-gradient(100%_100%_at_50%_0%,#4f46e5_0%,#06b6d4_45%,transparent_60%)] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-200/40 dark:border-indigo-900/40 bg-indigo-50/40 dark:bg-indigo-900/20 px-3 py-1 text-xs text-indigo-700 dark:text-indigo-300"
        >
          <FiZap />
          Available for freelance · replies in 24h
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-4xl sm:text-6xl font-black tracking-tight"
        >
          I build production‑ready apps end‑to‑end
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          Full‑stack engineer specializing in Flutter (apps) and Spring Boot (APIs). Clean architecture,
          robust infra, and delightful UX—delivered fast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 font-semibold hover:bg-indigo-500 transition-colors"
          >
            Let’s talk <FiArrowRight className="ml-2" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-5 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            See Work
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01cb4fc4db7a0de2ad?mp_source=share" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-emerald-300/50 bg-emerald-50/40 dark:border-emerald-900/40 dark:bg-emerald-900/20 px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300"
          >
            Upwork profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}


