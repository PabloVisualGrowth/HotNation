"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function MethodPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            {/* Texture Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

            <Navbar />

            {/* Hero */}
            <header className="relative pt-40 pb-20 px-6 text-center">
                <h1 className={`${syne.className} text-7xl md:text-[12vw] leading-[0.8] font-bold uppercase mb-8`}>
                    The<br />Method
                </h1>
                <p className="font-serif italic text-xl max-w-2xl mx-auto border-t border-black pt-8">
                    Sculpt. Detox. Focus.
                </p>
            </header>

            {/* 3 Pillars */}
            <section className="px-6 py-12 max-w-7xl mx-auto space-y-24">

                {/* Pillar 1: Infrared */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                    <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        whileInView={{ filter: "grayscale(0%)" }}
                        viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                        className="relative h-[60vh] w-full overflow-hidden transition-all duration-700 md:grayscale md:hover:grayscale-0"
                    >
                        <Image src="/collage-1.jpg" alt="Infrared Heat" fill className="object-cover" unoptimized />
                    </motion.div>
                    <div className="flex flex-col justify-center group/text">
                        <motion.div
                            initial={{ color: "#6b7280" }}
                            whileInView={{ color: "#bc3908" }}
                            viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 group-hover/text:opacity-100 transition-opacity duration-700">01. Heat</div>
                            <h2 className={`${syne.className} text-4xl md:text-6xl uppercase mb-6 transition-colors duration-700 group-hover/text:text-[#bc3908]`}>Infrared</h2>
                        </motion.div>
                        <p className="font-serif italic text-lg leading-relaxed text-gray-500 group-hover/text:text-gray-800 transition-colors duration-700">
                            Unlike traditional hot yoga (which heats the air), our infrared panels heat your body directly. This penetrates 3cm into muscle tissue, promoting deep detoxification, increased flexibility, and massive calorie burn without the suffocating humidity.
                        </p>
                    </div>
                </div>

                {/* Pillar 2: Barre */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse group">
                    <div className="flex flex-col justify-center order-2 md:order-1 group/text">
                        <motion.div
                            initial={{ color: "#6b7280" }}
                            whileInView={{ color: "#bc3908" }}
                            viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 group-hover/text:opacity-100 transition-opacity duration-700">02. Form</div>
                            <h2 className={`${syne.className} text-4xl md:text-6xl uppercase mb-6 transition-colors duration-700 group-hover/text:text-[#bc3908]`}>Barre</h2>
                        </motion.div>
                        <p className="font-serif italic text-lg leading-relaxed text-gray-500 group-hover/text:text-gray-800 transition-colors duration-700">
                            Small, isometric movements designed to fatigue muscles to the point of failure. We use the ballet barre for stability, focusing on high reps and low impact to sculpt long, lean muscles.
                        </p>
                    </div>
                    <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        whileInView={{ filter: "grayscale(0%)" }}
                        viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                        className="relative h-[60vh] w-full overflow-hidden transition-all duration-700 md:grayscale md:hover:grayscale-0 order-1 md:order-2"
                    >
                        <Image src="/collage-3.jpg" alt="Barre Form" fill className="object-cover" unoptimized />
                    </motion.div>
                </div>

                {/* Pillar 3: Mind */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
                    <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        whileInView={{ filter: "grayscale(0%)" }}
                        viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                        className="relative h-[60vh] w-full overflow-hidden transition-all duration-700 md:grayscale md:hover:grayscale-0"
                    >
                        <Image src="/collage-5.jpg" alt="Mindset" fill className="object-cover" unoptimized />
                    </motion.div>
                    <div className="flex flex-col justify-center group/text">
                        <motion.div
                            initial={{ color: "#6b7280" }}
                            whileInView={{ color: "#bc3908" }}
                            viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 group-hover/text:opacity-100 transition-opacity duration-700">03. Mind</div>
                            <h2 className={`${syne.className} text-4xl md:text-6xl uppercase mb-6 transition-colors duration-700 group-hover/text:text-[#bc3908]`}>Focus</h2>
                        </motion.div>
                        <p className="font-serif italic text-lg leading-relaxed text-gray-500 group-hover/text:text-gray-800 transition-colors duration-700">
                            The dark room, the curated playlists, and the intensity of the heat create a meditative state. You leave the outside world at the door and connect entirely with your breath and movement.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
