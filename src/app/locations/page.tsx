"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function LocationsPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const locations = [
        {
            name: "Salamanca",
            address: "Calle de Lagasca, Madrid",
            desc: "The flagship. Two studios, private training room, and social space.",
            status: "Open Now",
            image: "/img-bridge.jpg",
            highlight: false
        },
        {
            name: "Chamberí",
            address: "Calle de Almagro, Madrid",
            desc: "Intimate and focused. Specializing in private and semi-private sessions.",
            status: "Coming Soon",
            image: "/img-ball.jpg",
            highlight: true
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            <div className="texture-overlay"></div>

            <Navbar />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4">Madrid</span>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8] mb-8">
                        FIND US
                    </h1>
                    <p className="font-serif italic text-xl max-w-sm border-l border-black pl-6 py-2">
                        Two iconic neighborhoods. One method.
                    </p>
                </div>
            </header>

            {/* LOCATIONS GRID */}
            <section className="border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {locations.map((loc, i) => (
                        <div key={i} className="group md:border-r border-black last:border-r-0 border-b md:border-b-0">
                            {/* Image Part */}
                            <div className="relative h-[50vh] overflow-hidden border-b border-black">
                                <motion.div
                                    initial={{ filter: "grayscale(100%)" }}
                                    whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
                                    whileHover={{ filter: "grayscale(0%)" }}
                                    viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        unoptimized
                                    />
                                </motion.div>
                                <div className="absolute top-6 left-6">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-black ${loc.highlight ? 'bg-[#bc3908] text-white' : 'bg-white text-black'}`}>
                                        {loc.status}
                                    </span>
                                </div>
                            </div>

                            {/* Text Part */}
                            <div className="p-8 md:p-12 transition-colors duration-500 hover:bg-black hover:text-white h-full">
                                <h2 className="type-display-huge text-5xl mb-4 group-hover:text-[#bc3908] transition-colors">{loc.name}</h2>
                                <p className="font-serif italic text-xl mb-4">{loc.address}</p>
                                <p className="opacity-70 mb-8 max-w-sm">{loc.desc}</p>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <button className="text-xs font-bold uppercase tracking-widest border border-current px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                                        View Schedule
                                    </button>
                                    <button className="text-xs font-bold uppercase tracking-widest border border-transparent px-8 py-3 rounded-full hover:border-current transition-colors opacity-70 hover:opacity-100">
                                        Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MAP PLACEHOLDER / CONTACT */}
            <section className="bg-black text-white py-24 md:py-32 px-6 md:px-12 text-center">
                <h2 className="type-display-huge text-4xl md:text-6xl mb-8">CONTACT US</h2>
                <p className="font-serif italic text-xl text-white/70 max-w-2xl mx-auto mb-12">
                    Questions about memberships, private events, or press inquiries? We are here to help.
                </p>
                <a href="mailto:hello@hotconcept.com" className="text-xl md:text-2xl font-bold uppercase tracking-widest border-b border-white pb-2 hover:text-[#bc3908] hover:border-[#bc3908] transition-colors">
                    hello@hotconcept.com
                </a>
            </section>

            <Footer />
        </div>
    );
}
