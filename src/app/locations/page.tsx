"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

            <Navbar />

            <header className="pt-40 pb-20 px-6 text-center">
                <h1 className={`${syne.className} text-7xl md:text-[12vw] leading-[0.8] font-bold uppercase mb-8`}>
                    Find Us
                </h1>
            </header>

            <section className="px-6 pb-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Location 1 */}
                    <div className="group">
                        <motion.div
                            initial={{ filter: "grayscale(100%)" }}
                            whileInView={{ filter: "grayscale(0%)" }}
                            viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                            className="relative h-[60vh] w-full mb-8 overflow-hidden transition-all duration-700 md:grayscale md:hover:grayscale-0"
                        >
                            <Image
                                src="/img-bridge.jpg"
                                alt="Eindhoven Studio"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                        </motion.div>
                        <motion.div
                            initial={{ color: "black", borderColor: "black" }}
                            whileInView={{ color: "#bc3908", borderColor: "#bc3908" }}
                            viewport={{ amount: 0.5, margin: "-10% 0px -40% 0px" }}
                            className="flex justify-between items-end border-b pb-4 mb-4 transition-colors duration-700 group-hover:border-[#bc3908]"
                        >
                            <h2 className={`${syne.className} text-4xl uppercase transition-colors duration-700 group-hover:text-[#bc3908]`}>Eindhoven</h2>
                            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full group-hover:bg-[#bc3908] transition-colors duration-700">Open</span>
                        </motion.div>
                        <p className="font-serif italic text-lg mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-700">Stratumseind 32</p>
                        <p className="text-sm text-gray-600 mb-6">5611 ET Eindhoven, Netherlands</p>
                        <div className="flex gap-4">
                            <button className="text-xs font-bold uppercase tracking-widest border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors rounded-full">
                                View Schedule
                            </button>
                            <button className="text-xs font-bold uppercase tracking-widest underline underline-offset-4 hover:no-underline">
                                Get Directions
                            </button>
                        </div>
                    </div>

                    {/* Location 2 */}
                    <div className="group md:mt-32 mt-12">
                        <motion.div
                            initial={{ filter: "grayscale(100%)" }}
                            whileInView={{ filter: "grayscale(0%)" }}
                            viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
                            className="relative h-[60vh] w-full mb-8 overflow-hidden transition-all duration-700 md:grayscale md:hover:grayscale-0"
                        >
                            <Image
                                src="/img-pose.jpg"
                                alt="Rotterdam Studio"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                        </motion.div>
                        <motion.div
                            initial={{ color: "black", borderColor: "black" }}
                            whileInView={{ color: "#bc3908", borderColor: "#bc3908" }}
                            viewport={{ amount: 0.5, margin: "-10% 0px -40% 0px" }}
                            className="flex justify-between items-end border-b pb-4 mb-4 transition-colors duration-700 group-hover:border-[#bc3908]"
                        >
                            <h2 className={`${syne.className} text-4xl uppercase transition-colors duration-700 group-hover:text-[#bc3908]`}>Rotterdam</h2>
                            <span className="text-xs font-bold uppercase tracking-widest border border-black px-3 py-1 rounded-full group-hover:border-[#bc3908] group-hover:text-[#bc3908] transition-colors duration-700">Coming Soon</span>
                        </motion.div>
                        <p className="font-serif italic text-lg mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-700">Coolsingel 40</p>
                        <p className="text-sm text-gray-600 mb-6">3011 AD Rotterdam, Netherlands</p>
                        <div className="flex gap-4">
                            <button disabled className="text-xs font-bold uppercase tracking-widest border border-gray-300 text-gray-400 px-6 py-2 cursor-not-allowed rounded-full">
                                Waitlist Only
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
