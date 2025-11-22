import React from "react";
import Section from "./Section";
import { FiSmartphone, FiServer, FiRepeat, FiCreditCard } from "react-icons/fi";

const items = [
  {
    icon: <FiSmartphone />,
    title: "Mobile Apps",
    desc: "Flutter apps with smooth UX, offline‑first, theming, and CI/CD.",
  },
  {
    icon: <FiServer />,
    title: "Backends & APIs",
    desc: "Spring Boot services, clean architecture, observability, solid data modeling.",
  },
  {
    icon: <FiCreditCard />,
    title: "Payments & Subscriptions",
    desc: "In‑app purchases, subscriptions, trials, proration, and webhook flows.",
  },
  {
    icon: <FiRepeat />,
    title: "Refactors & Performance",
    desc: "Untangle legacy codebases, boost stability, lower latency, improve DX.",
  },
];

export default function Services() {
  return (
    <Section id="services" subtitle="How I can help" title="Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/50 dark:bg-gray-900/40">
            <div className="text-indigo-600 dark:text-indigo-400 text-xl">{it.icon}</div>
            <h3 className="mt-3 font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


