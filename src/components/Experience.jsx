import React from "react";
import Section from "./Section";

const experiences = [
    {
        role: "Full‑Stack Developer",
        org: "Freelance",
        period: "2022 — Present",
        points: [
            "Built RESTful backends and mobile apps with Spring Boot and Flutter",
            "Delivered production apps to Play Store with CI and release automation",
        ],
    },
];

export default function Experience() {
    return (
        <Section id="experience" subtitle="Where I’ve worked" title="Experience">
            <ol className="relative border-s border-gray-200 dark:border-gray-800">
                {experiences.map((e) => (
                    <li key={e.role} className="ms-6 mb-10">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">✓</span>
                        <h3 className="font-semibold">
                            {e.role} · <span className="text-gray-600 dark:text-gray-300">{e.org}</span>
                        </h3>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{e.period}</div>
                        <ul className="mt-3 list-disc ps-5 text-sm text-gray-700 dark:text-gray-200 space-y-1">
                            {e.points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </Section>
    );
}


