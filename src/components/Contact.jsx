import React from "react";
import Section from "./Section";

export default function Contact() {
    return (
        <Section id="contact" subtitle="Get in touch" title="Contact">
            <div className="max-w-xl">
                <p className="text-gray-600 dark:text-gray-300">
                    I’m open to freelance work and collaborations. Send me an email and I’ll get back to you.
                </p>
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


