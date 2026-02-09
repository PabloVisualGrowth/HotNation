"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function MethodPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const pillars = [
        {
            id: "01",
            title: "Infrared",
            subtitle: "The Science",
            desc: "Unlike traditional hot yoga (which heats the air), our infrared panels heat your body directly. This penetrates 3cm into muscle tissue, promoting deep detoxification, increased flexibility, and massive calorie burn.",
            image: "/collage-1.jpg",
            alt: "Infrared Heat"
        },
        {
            id: "02",
            title: "Barre",
            subtitle: "The Form",
            desc: "Small, isometric movements designed to fatigue muscles to the point of failure. We use the ballet barre for stability, focusing on high reps and low impact to sculpt long, lean muscles.",
            image: "/collage-3.jpg",
            alt: "Barre Form"
        },
        {
            id: "03",
            title: "Focus",
            subtitle: "The Mind",
            desc: "The dark room, the curated playlists, and the intensity of the heat create a meditative state. You leave the outside world at the door and connect entirely with your breath.",
            image: "/collage-5.jpg",
            alt: "Mindset"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            <div className="texture-overlay"></div>

            <Navbar />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4">The Work. The Sweat. The Results.</span>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8] mb-8">
                        THE METHOD
                    </h1>
                    <p className="font-serif italic text-xl max-w-xl pl-6 border-l border-black">
                        A unique fusion of pilates, dance, and functional training practiced in an infrared heated room.
                    </p>
                </div>
            </header>

            {/* PILLARS GRID */}
            <section className="border-b border-black">
                {pillars.map((pillar, index) => (
                    <div key={pillar.id} className="grid grid-cols-1 md:grid-cols-2 group">

                        {/* Text Column - Alternates order on Desktop */}
                        <div className={`
                            relative flex flex-col justify-center p-12 md:p-24 border-b border-black md:border-b-0 
                            ${index % 2 === 0 ? 'md:order-1 md:border-r' : 'md:order-2'}
                            transition-colors duration-700 hover:bg-[#bc3908] hover:text-white
                        `}>
                            <motion.div
                                initial={false}
                                whileInView={isMobile ? { backgroundColor: "#bc3908", color: "#ffffff" } : {}}
                                viewport={{ amount: 0.2, margin: "-20% 0px -20% 0px" }}
                                className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                            />

                            <div className="relative z-10 pointer-events-none">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-xs font-bold uppercase tracking-widest border border-black group-hover:border-white px-3 py-1 rounded-full">
                                        {pillar.id}
                                    </span>
                                    <span className="font-serif italic text-lg">{pillar.subtitle}</span>
                                </div>
                                <h2 className="type-display-huge text-5xl md:text-7xl mb-6">
                                    {pillar.title}
                                </h2>
                                <p className="font-sans text-lg opacity-80 leading-relaxed max-w-md">
                                    {pillar.desc}
                                </p>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className={`
                            relative h-[60vh] md:h-auto border-b md:border-b-0 border-black overflow-hidden
                            ${index % 2 === 0 ? 'md:order-2' : 'md:order-1 md:border-r'}
                        `}>
                            <motion.div
                                initial={{ filter: "grayscale(100%)" }}
                                whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
                                whileHover={{ filter: "grayscale(0%)" }}
                                viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={pillar.image}
                                    alt={pillar.alt}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    unoptimized
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </section>

            {/* SCHEDULE CTA */}
            <section className="py-24 md:py-32 px-6 text-center bg-black text-white">
                <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#bc3908]">Ready to sweat?</span>
                <h2 className="type-display-huge text-4xl md:text-8xl mb-12">
                    BOOK YOUR MAT
                </h2>
                <button className="btn-concept border-white text-white hover:bg-white hover:text-black">
                    View Schedule
                </button>
            </section>

            <Footer />
        </div>
    );
}
