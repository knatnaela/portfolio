import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="relative rounded-2xl border border-indigo-200/40 dark:border-indigo-900/40 bg-gradient-to-br from-indigo-600 to-cyan-600 p-8 sm:p-10 text-white">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Let’s build something great together</h3>
          <p className="mt-2 text-white/90">Brief your idea, and I’ll reply within 24 hours with next steps.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:natnaeladane21@gmail.com" className="inline-flex items-center rounded-md bg-white text-indigo-700 font-semibold px-5 py-3 hover:bg-white/90">
              <FiMail className="mr-2" /> Email me
            </a>
            <a href="https://calendly.com/natnaeladane21/30min" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-white text-indigo-700 font-semibold px-5 py-3 hover:bg-white/90">
              Book a call
            </a>
            <a href="#projects" className="inline-flex items-center rounded-md bg-white/10 text-white px-5 py-3 ring-1 ring-white/30 hover:bg-white/15">
              View projects <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


