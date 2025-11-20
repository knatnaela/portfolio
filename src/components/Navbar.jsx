import React, { useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

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
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-xl">
            Natnael<span className="text-indigo-500">.</span>
          </a>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-4">
             <button
              aria-label="Toggle theme"
              onClick={() => {
                toggleTheme();
                setIsDark(document.documentElement.classList.contains("dark"));
              }}
              className="p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 right-0 top-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg sm:hidden px-6 py-4"
            >
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium hover:text-indigo-500 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-3 py-3 font-medium hover:bg-indigo-500 transition-colors"
                >
                  Let’s talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
