import React from "react";

export default function Footer() {
    return (
        <footer className="py-10 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Natnael Adane · <a href="/portfolio/privacy.html" className="hover:underline">Privacy</a> · <a href="/portfolio/terms.html" className="hover:underline">Terms</a>
        </footer>
    );
}


