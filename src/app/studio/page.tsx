"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function StudioPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            <div className="texture-overlay"></div>

            <Navbar />

            {/* HEADER - Hero Grid */}
            <header className="relative w-full pt-20 border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
                    <div className="relative border-b md:border-b-0 md:border-r border-black flex flex-col justify-end p-8 md:p-12">
                        <span className="text-xs font-bold uppercase tracking-widest block mb-6">Eindhoven · Rotterdam</span>
                        <h1 className="type-display-huge text-6xl md:text-8xl leading-[0.8] mb-8">
                            THE<br />SPACE
                        </h1>
                        <p className="font-serif italic text-xl max-w-sm border-l border-black pl-6 py-2">
                            A sanctuary of heat and focus.
                        </p>
                    </div>
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/group-floor.jpg"
                            alt="Studio Floor"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </header>

            {/* INTRO TEXT - Bordered */}
            <section className="border-b border-black py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1">
                    <span className="text-xs font-bold uppercase tracking-widest border-b border-black pb-2">Environment</span>
                </div>
                <div className="md:col-span-3">
                    <p className="text-2xl md:text-4xl font-light leading-tight mb-8">
                        Designed to isolate you from the chaos of the city.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed font-serif italic max-w-2xl">
                        Our studio is equipped with medical-grade infrared panels that heat your body directly, promoting detoxification, circulation, and muscle recovery. The dark room and carefully curated playlists allow you to disconnect from the noise and connect with your power.
                    </p>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section className="border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-2 md:h-[80vh] group">
                    {/* Left: Image */}
                    <div className="relative border-b md:border-b-0 md:border-r border-black h-[50vh] md:h-full overflow-hidden">
                        <motion.div
                            initial={{ filter: "grayscale(100%)" }}
                            whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
                            whileHover={{ filter: "grayscale(0%)" }}
                            viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/img-ball.jpg"
                                alt="Equipment"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                unoptimized
                            />
                        </motion.div>
                    </div>

                    {/* Right: Text */}
                    <div className="relative bg-black text-white p-12 md:p-24 flex flex-col justify-center transition-colors duration-700 hover:bg-[#bc3908]">
                        <motion.div
                            initial={false}
                            whileInView={isMobile ? { backgroundColor: "#bc3908" } : {}}
                            viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                            className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                        />
                        <div className="relative z-10 pointer-events-none">
                            <span className="text-xs font-bold uppercase tracking-widest border border-white px-3 py-1 rounded-full mb-8 inline-block">
                                Technology
                            </span>
                            <h2 className="type-display-huge text-5xl md:text-7xl mb-8">HEAT PANELS</h2>
                            <p className="text-xl font-serif italic opacity-80 leading-relaxed">
                                Operating at 35-40°C, our infrared heat penetrates 3cm deep into muscle tissue, increasing flexibility and calorie burn without the suffocating feeling of traditional hot yoga.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AMENITIES */}
            <section className="border-b border-black grid grid-cols-1 md:grid-cols-3">
                {[
                    { title: "Showers", desc: "Private showers with premium organic products." },
                    { title: "Gear", desc: "Lululemon mats and props provided complimentary." },
                    { title: "Social", desc: "Post-class tonic bar and community space." }
                ].map((item, i) => (
                    <div key={i} className="p-12 border-b md:border-b-0 md:border-r border-black last:border-0 hover:bg-black hover:text-white transition-colors duration-500 group">
                        <h3 className="type-display-huge text-3xl mb-4 group-hover:text-[#bc3908] transition-colors">{item.title}</h3>
                        <p className="font-serif italic text-lg opacity-70">{item.desc}</p>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
