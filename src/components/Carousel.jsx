import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Carousel({ images = [], alt = "" }) {
    const placeholder = `${process.env.PUBLIC_URL || ""}/images/placeholder.svg`;
    const safeImages = images.length ? images : [placeholder];
    const [index, setIndex] = React.useState(0);
    const currentUrl = safeImages[index];
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
    const tiltRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % safeImages.length), 4000);
        return () => clearInterval(id);
    }, [safeImages.length]);

    // Keyboard navigation when lightbox is open
    React.useEffect(() => {
        if (!isOpen) return;
        function onKey(e) {
            if (e.key === "Escape") setIsOpen(false);
            if (e.key === "ArrowRight") setIndex((i) => (i + 1) % safeImages.length);
            if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, safeImages.length]);

    function handleMouseMove(e) {
        const el = tiltRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const py = (e.clientY - rect.top) / rect.height; // 0..1
        const tiltMax = 6; // degrees
        const rotateY = (px - 0.5) * -tiltMax;
        const rotateX = (py - 0.5) * tiltMax;
        setTilt({ x: rotateX, y: rotateY });
    }

    function resetTilt() {
        setTilt({ x: 0, y: 0 });
    }

    return (
        <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60">
            {/* Blurred backdrop to fill letterboxing for portrait images */}
            <div
                className="absolute inset-0 bg-center bg-cover blur-xl opacity-30 scale-110"
                style={{ backgroundImage: `url(${currentUrl})` }}
                aria-hidden="true"
            />
            <div className="relative w-full h-64 sm:h-72 perspective" ref={tiltRef} onMouseMove={handleMouseMove} onMouseLeave={resetTilt}>
                {/* Soft glow */}
                <div className="pointer-events-none absolute -inset-10 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
                    <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0deg,#06b6d4_120deg,#4f46e5_240deg,#06b6d4_360deg)] blur-3xl" />
                </div>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentUrl}
                        className="absolute inset-3 rounded-xl shadow-xl bg-white/70 dark:bg-gray-950/60 backdrop-blur-md ring-1 ring-black/5 dark:ring-white/5"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                        }}
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <motion.img
                            src={currentUrl}
                            alt={alt}
                            className="h-full w-full object-contain rounded-xl"
                            initial={false}
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Fullscreen button */}
                <button
                    aria-label="Open fullscreen"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsOpen(true);
                    }}
                    className="absolute right-4 top-4 z-10 inline-flex items-center justify-center rounded-md bg-black/50 text-white p-2 hover:bg-black/60 transition"
                >
                    <FiMaximize2 size={16} />
                </button>
            </div>
            <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
                {safeImages.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIndex(i);
                        }}
                        className={`h-2 w-2 rounded-full ${i === index ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-700"}`}
                    />
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                    >
                        <div className="absolute inset-0" />
                        <motion.div
                            className="relative max-w-6xl w-[92vw] h-[86vh]"
                            initial={{ scale: 0.98, y: 8 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.98, y: -6 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            <img src={currentUrl} alt={alt} className="h-full w-full object-contain" />
                            {/* Controls */}
                            <button
                                aria-label="Close"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsOpen(false);
                                }}
                                className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md bg-white/10 text-white p-2 hover:bg-white/20"
                            >
                                <FiX size={18} />
                            </button>
                            {safeImages.length > 1 && (
                                <>
                                    <button
                                        aria-label="Previous"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/10 text-white p-3 hover:bg-white/20"
                                    >
                                        <FiChevronLeft size={20} />
                                    </button>
                                    <button
                                        aria-label="Next"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIndex((i) => (i + 1) % safeImages.length);
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/10 text-white p-3 hover:bg-white/20"
                                    >
                                        <FiChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


