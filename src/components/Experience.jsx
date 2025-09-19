import React from "react";
import Section from "./Section";

const experiences = [
    {
        role: "Flutter Developer",
        org: "Postagic",
        period: "Nov 2024 — Dec 2024",
        points: [
            "Postagic allows you to send physical postcards and letters as easily as uploading a picture.",
            "Refactored existing codebase and added new features to improve stability and UX.",
        ],
    },
    {
        role: "Flutter Developer",
        org: "Goby Homes",
        period: "Aug 2024 — Sep 2024",
        points: [
            "Collaborative transaction management platform enabling secure communication and document workflows.",
            "Refactored modules and shipped new features to enhance collaboration flows.",
        ],
    },
    {
        role: "CTO",
        org: "Omricon, Addis Ababa, Ethiopia",
        period: "May 2021 — Present",
        points: [
            "Oversee development and rollout of technology for clients, vendors, and partners to improve business outcomes.",
        ],
    },
    {
        role: "Flutter & Backend Developer",
        org: "eStota LLC, Addis Ababa, Ethiopia",
        period: "May 2021 — Present",
        points: [
            "Build e‑commerce platform using Spring Boot and Flutter.",
            "Backend: Node.js; Database: MySQL; Cache: Redis; Realtime: Socket.IO.",
            "Deploy on DigitalOcean with Nginx reverse proxy.",
        ],
    },
    {
        role: "Android Developer & Project Manager",
        org: "Metahu Addis, Addis Ababa, Ethiopia",
        period: "Nov 2021 — Nov 2023",
        points: [
            "Maintain and develop food delivery app (Kotlin).",
            "Manage project delivery and Play Store releases.",
        ],
    },
    {
        role: "Flutter Developer",
        org: "Maykerah, Addis Ababa, Ethiopia",
        period: "Feb 2022 — Apr 2022",
        points: [
            "Develop e‑commerce platform with Flutter.",
        ],
    },
    {
        role: "Android Developer",
        org: "IFlex, Addis Ababa, Ethiopia",
        period: "Dec 2020 — Jan 2021",
        points: [
            "Modify existing codebase, test, debug, add features, and publish updates to Play Store.",
        ],
    },
    {
        role: "Back‑end Developer",
        org: "Meba, Addis Ababa, Ethiopia",
        period: "Apr 2021 — May 2021",
        points: [
            "Build e‑commerce backend services.",
        ],
    },
    {
        role: "Back‑end Developer",
        org: "SwiftOlio, Addis Ababa, Ethiopia",
        period: "Jul 2021 — Sep 2021",
        points: [
            "Build service provider platform using Node.js, MySQL, and Socket.IO for realtime.",
        ],
    },
    {
        role: "Flutter Developer",
        org: "GenesisFishHouse, Addis Ababa, Ethiopia",
        period: "Jul 2021 — Sep 2021",
        points: [
            "Develop, test, add features, and publish the app to Play Store.",
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


