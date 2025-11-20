import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) { }
}

export default function Navbar() {
    const [isDark, setIsDark] = React.useState(() =>
        typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true
    );

    React.useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const links = [
        { href: "#home", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/50 dark:border-gray-800">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <a href="#home" className="font-extrabold tracking-tight text-xl">
                    Natnael<span className="text-indigo-500">.</span>
                </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="hover:text-indigo-500 transition-colors">
                            {l.label}
                        </a>
                    ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-indigo-600 text-white px-3 py-2 font-medium hover:bg-indigo-500 transition-colors"
          >
            Let’s talk
          </a>
                    <button
                        aria-label="Toggle theme"
                        onClick={() => {
                            toggleTheme();
                            setIsDark(document.documentElement.classList.contains("dark"));
                        }}
                        className="ml-2 p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>
                </div>
            </nav>
        </header>
    );
}
