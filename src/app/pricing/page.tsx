"use client";

import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function PricingPage() {
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

            {/* HEADER - Bordered Box */}
            <header className="pt-32 pb-12 border-b border-black px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4">Pricing</span>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8]">
                        INVEST<br />IN YOURSELF
                    </h1>
                </div>
                <p className="font-serif italic text-xl max-w-sm border-l border-black pl-6 py-2">
                    No contracts. No hidden fees. Just sweat.
                </p>
            </header>

            {/* PRICING GRID - Strict Borders */}
            <section className="border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {[
                        {
                            name: "Single Drop-In",
                            price: "25€",
                            desc: "One time access. Perfect for trying it out.",
                            highlight: false
                        },
                        {
                            name: "First Timer",
                            price: "45€",
                            desc: "3 Classes. 14 Days validity. New clients only.",
                            highlight: true
                        },
                        {
                            name: "Unlimited",
                            price: "150€",
                            desc: "Monthly access. Recurring payment. Cancel anytime.",
                            highlight: false
                        },
                        {
                            name: "5 Pack",
                            price: "115€",
                            desc: "Valid for 2 months.",
                            highlight: false
                        },
                        {
                            name: "10 Pack",
                            price: "210€",
                            desc: "Valid for 6 months. Shareable.",
                            highlight: false
                        },
                        {
                            name: "20 Pack",
                            price: "380€",
                            desc: "Valid for 12 months. Shareable.",
                            highlight: false
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`
                                relative group min-h-[400px] p-8 md:p-12 flex flex-col justify-between 
                                border-b md:border-b-0 md:border-r border-black last:border-r-0 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(n+4)]:border-t 
                                transition-colors duration-500
                                ${item.highlight ? 'bg-black text-white hover:bg-[#bc3908]' : 'hover:bg-[#bc3908] hover:text-white'}
                            `}
                        >
                            <motion.div
                                initial={false}
                                whileInView={isMobile ? { backgroundColor: "#bc3908", color: "#ffffff" } : {}}
                                viewport={{ amount: 0.2, margin: "-20% 0px -20% 0px" }}
                                className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                            />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <h3 className="text-xs font-bold uppercase tracking-widest">{item.name}</h3>
                                        {item.highlight && (
                                            <span className="text-[10px] border border-white px-2 py-1 rounded-full uppercase tracking-widest">
                                                Best Value
                                            </span>
                                        )}
                                    </div>
                                    <div className="type-display-huge text-6xl md:text-7xl mb-6">
                                        {item.price}
                                    </div>
                                    <p className="font-serif italic text-lg opacity-80 max-w-[200px]">
                                        {item.desc}
                                    </p>
                                </div>

                                <button className={`
                                    w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest border transition-all mt-8
                                    ${item.highlight
                                        ? 'border-white text-white hover:bg-white hover:text-black'
                                        : 'border-black text-black group-hover:border-white group-hover:text-white hover:bg-white hover:text-black'}
                                `}>
                                    Purchase
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* INFO SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
                <div className="p-12 md:p-24 md:border-r border-black flex flex-col justify-center">
                    <h3 className="type-display-huge text-4xl mb-6">PRIVATE SESSIONS</h3>
                    <p className="font-serif italic text-lg mb-8">
                        Looking for 1:1 attention? We offer private infrared barre training tailored to your goals.
                    </p>
                    <a href="mailto:hello@hotconcept.com" className="text-xs font-bold uppercase tracking-widest border-b border-black w-max pb-1 hover:text-[#bc3908] transition-colors">
                        Inquire via Email
                    </a>
                </div>
                <div className=" bg-black text-white p-12 md:p-24 flex flex-col justify-center">
                    <h3 className="type-display-huge text-4xl mb-6">GIFT CARDS</h3>
                    <p className="font-serif italic text-lg mb-8 text-white/70">
                        Give the gift of heat. Digital gift cards available in any amount.
                    </p>
                    <button className="btn-concept border-white text-white hover:bg-white hover:text-black w-max">
                        Purchase Gift Card
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
