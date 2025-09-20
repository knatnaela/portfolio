import React from "react";
import Section from "./Section";
import Carousel from "./Carousel";

const projects = [
    {
        title: "YeneCard",
        description:
            "Secure, efficient, user‑friendly platform for online transactions via virtual credit cards.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=com.yenecard.yenecard&hl=en",
        images: [
            "https://play-lh.googleusercontent.com/tfU3HtUuSxCwjWH9JI5-HvMEB38ZFwGJ4SliadAHP0UeC-eg9U1Lt8lnjWvQChg5kB0=w1052-h592-rw",
            "https://play-lh.googleusercontent.com/uF1kWrtxSldrlEcfKQMaGHezuFzzP6LGnF2dIfzIxBirGAct61k7WRA2sDJdxluj5nI=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/6qogpzJpTUWN_pzbzhd-AqjeOyYQf5hbPA7iabtMJHiYWReNnfTmaLTJu_eIGt80Gcs4=w5120-h2880-rw",
        ],
    },
    {
        title: "Postagic",
        description:
            "Send physical postcards and letters as easily as uploading a picture.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=com.postagic.app&hl=en",
        images: [
            "https://play-lh.googleusercontent.com/Xnkn3nEN5RN93CmcMmhb2TJk9d3tWaGwpoNilt3HSU-rv9Yo9xWOoZdU2OcE4kZN0g=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/5egj-3I2VE_-fzCvj-5kllAHDjsdn6Ww2eP8UdggcwLDp3nrt-GoOqK93Rni-riZosE=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/rDeb1zJPQu5TgAJ_CTCKwAn-HNLLEUXcEj0zVTgyEuELrD-k6RTNd06BeRhpNxEaJw=w5120-h2880-rw",
        ],
    },
    {
        title: "Goby Homes",
        description:
            "Collaborative transaction management platform for secure communication and document workflows.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=com.gobyhomes.app&hl=en",
        images: [
            "https://play-lh.googleusercontent.com/Spb2kFq5484qwtrrUPnNn2GGM1WkSjPMPs5ASoqPFo8WxmnLoe-3TcYrfu-jctX-Fg=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/CqUPVdWWzoCf2yeO4t1pca7BwJuxipsYO-NgAx2eHQKCdVrU5jFDNYXDB5kkWjua6KY=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/xsWY8zcd5k7xjprtThzO-JsDoABkAlKuKiG9uoJxn1lmJw9wTItvL0t_E0AiISlXmZ8=w5120-h2880-rw",
        ],
    },
    {
        title: "GymLive",
        description:
            "A social platform for gym goers to connect, share workouts, and stay motivated.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=app.gymlive.mobile.gymlive.prod&pcampaignid=web_share",
        images: [
            "https://play-lh.googleusercontent.com/cPMH94FBAQ_merXFmhHCDqv1R5062lsZDUcmAb53RzRKHt5uQt3oNYcJ8ZL_Lw8szks=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/LfQjUaNOB7aVjFZ1qSvVspuGstGT7F0ypccvNYymiBxP4FWCbpSimrY9RztIK-b5XmU=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/nuGAPaGw1xd0bJ8r3aHsWxNeLgAEtSGXrIB6iiLoflu0tpR56XxmNrrRRIPygkNN2c4=w5120-h2880-rw",
        ],
    },
    {
        title: "Metahu Delivery",
        description: "A food delivery service app for quick and convenient ordering.",
        stack: "Flutter",
        link: "https://play.google.com/store/apps/details?id=metahuCustomer.app&pcampaignid=web_share",
        images: [
            "https://play-lh.googleusercontent.com/WESuN1N-yLOFfQXBZV32WH0tksRa3wOgylzHwjUzC9K7QLsAQb16kF5XnlzBz_UeY-s=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/ggcsR8fbwYwWqtwIyIspk_nAHvafvF98m3r45kNr8cBuYSB4HJGpdjsHwWbch4G8Ssc=w5120-h2880-rw",
            "https://play-lh.googleusercontent.com/PlsBi9pma2SM2RCwcaa9Y3Dkft0KOJOsfhQw7PZZiGoWJtlbjBC85kPrVzkCMkqWD1bc=w5120-h2880-rw",
        ],
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
                        className="group block rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors overflow-hidden"
                    >
                        {p.images && p.images.length > 0 ? (
                            <Carousel images={p.images} alt={`${p.title} screenshots`} />
                        ) : (
                            <div className="relative w-full h-64 sm:h-72 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 flex items-center justify-center">
                                <span className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400">No screenshots</span>
                            </div>
                        )}
                        <div className="p-6">
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
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}


