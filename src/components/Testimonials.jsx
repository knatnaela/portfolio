import React from "react";
import Section from "./Section";

const items = [
  {
    name: "Product Owner",
    quote: "Delivered fast with clean, scalable code. Great communication and ownership.",
  },
  {
    name: "Tech Lead",
    quote: "Refactors were thoughtful and improved reliability without slowing delivery.",
  },
  {
    name: "Founder",
    quote: "Turned vague requirements into a polished app. Would hire again.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" subtitle="What clients say" title="Testimonials">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <figure key={i} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/50 dark:bg-gray-900/40">
            <blockquote className="text-sm text-gray-700 dark:text-gray-200">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-xs text-gray-500 dark:text-gray-400">— {t.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}


