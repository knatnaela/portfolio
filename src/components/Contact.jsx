import React from "react";
import Section from "./Section";

export default function Contact() {
    return (
        <Section id="contact" subtitle="Get in touch" title="Contact">
            <div className="max-w-xl">
                <p className="text-gray-600 dark:text-gray-300">I’m open to freelance work and collaborations.</p>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <div>Location: Addis Ababa, Ethiopia</div>
                    <div>Phone: <a className="text-indigo-600 dark:text-indigo-400" href="tel:+251923759362">+251 923 759 362</a></div>
                    <div>Email: <a className="text-indigo-600 dark:text-indigo-400" href="mailto:natnaeladane21@gmail.com">natnaeladane21@gmail.com</a></div>
                </div>
                <a
                    href="mailto:natnaeladane21@gmail.com"
                    className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-500 transition-colors"
                >
                    Email Me
                </a>
            </div>
        </Section>
    );
}


