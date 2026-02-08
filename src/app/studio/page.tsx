"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function StudioPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

            <Navbar />

            <header className="relative h-[80vh] w-full flex flex-col justify-end pb-20 items-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 opacity-80">
                    <Image
                        src="/group-floor.jpg"
                        alt="Studio Floor"
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-6 mb-12">
                    <h1 className={`${syne.className} text-7xl md:text-[12vw] leading-[0.8] font-bold text-white uppercase`}>
                        The Space
                    </h1>
                </div>
            </header>

            <section className="py-32 px-6 max-w-4xl mx-auto text-center">
                <p className="text-3xl md:text-5xl font-light leading-tight mb-12">
                    A sanctuary of <span className="font-serif italic border-b border-black pb-1">heat</span> and <span className="font-serif italic border-b border-black pb-1">focus</span>.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-serif italic">
                    Our studio is equipped with medical-grade infrared panels that heat your body directly, promoting detoxification, circulation, and muscle recovery. The dark room and carefully curated playlists allow you to disconnect from the noise and connect with your power.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 md:h-[80vh] group">
                <div className="relative border-r border-black/5 h-[70vh] md:h-full">
                    <Image
                        src="/img-ball.jpg"
                        alt="Equipment"
                        fill
                        className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                        unoptimized
                    />
                    <motion.div
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        viewport={{ amount: 0.1, margin: "-30% 0px -30% 0px" }}
                        className="absolute inset-0 bg-white/10 pointer-events-none transition-opacity duration-700"
                    />
                </div>
                <div className="relative bg-black text-white p-12 md:p-24 flex flex-col justify-center transition-colors duration-700 group-hover:bg-[#bc3908]">
                    <motion.div
                        initial={false}
                        whileInView={{ backgroundColor: "#bc3908" }}
                        viewport={{ amount: 0.1, margin: "-30% 0px -30% 0px" }}
                        className="absolute inset-0 transition-colors duration-700 pointer-events-none"
                    />
                    <div className="relative z-10">
                        <h2 className={`${syne.className} text-4xl md:text-6xl uppercase mb-8 transition-transform duration-700 group-hover:scale-105`}>Heat Panels</h2>
                        <p className="text-xl font-serif italic opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                            Operating at 35-40°C, our infrared heat penetrates 3cm deep into muscle tissue, increasing flexibility and calorie burn without the suffocating feeling of traditional hot yoga.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
