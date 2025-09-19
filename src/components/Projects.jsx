import React from "react";
import Section from "./Section";

const projects = [
    {
        title: "Postagic",
        description:
            "Send physical postcards and letters as easily as uploading a picture.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=com.postagic.app&hl=en",
    },
    {
        title: "Goby Homes",
        description:
            "Collaborative transaction management platform for secure communication and document workflows.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=com.gobyhomes.app&hl=en",
    },
    {
        title: "GymLive",
        description:
            "A social platform for gym goers to connect, share workouts, and stay motivated.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=app.gymlive.mobile.gymlive.prod&pcampaignid=web_share",
    },
    {
        title: "Metahu Delivery",
        description: "A food delivery service app for quick and convenient ordering.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=metahuCustomer.app&pcampaignid=web_share",
    },
    {
        title: "Location Based ADS",
        description:
            "Platform for discovering nearby restaurants, groceries, and more based on user location.",
        stack: "Flutter · Node.js · MySQL · Redis · Socket.IO",
    },
    {
        title: "LakiRemit",
        description:
            "Cross‑border remittance app. Built end‑to‑end: Flutter frontend and Spring Boot backend.",
        stack: "Flutter · Spring Boot",
    },
    {
        title: "BessaPay",
        description: "Payment gateway with Spring Boot for secure transactions.",
        stack: "Spring Boot",
    },
];

export default function Projects() {
    return (
        <Section id="projects" subtitle="Selected work" title="Projects">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <a
                        key={p.title}
                        href={p.link || "#"}
                        target={p.link ? "_blank" : undefined}
                        rel={p.link ? "noreferrer" : undefined}
                        className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/60 dark:bg-gray-900/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-800">
                                {p.stack}
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
                        <div className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {p.link ? "Open" : "In development"}
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}


