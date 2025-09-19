import React from "react";
import Section from "./Section";

const skills = [
    "JavaScript (ES6, Node.js)",
    "TypeScript",
    "Flutter",
    "Spring Boot",
    "Android (Java & Kotlin)",
    "Dart",
    "HTML & CSS",
    "Git",
    "CI / CD",
    "Cloud (GCP, AWS)",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "REST APIs",
    "Socket.IO",
];

export default function Skills() {
    return (
        <Section id="skills" subtitle="Toolbox" title="Skills">
            <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                    <span
                        key={s}
                        className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60"
                    >
                        {s}
                    </span>
                ))}
            </div>
        </Section>
    );
}


