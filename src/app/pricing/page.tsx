"use client";

import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

            <Navbar />

            <header className="pt-40 pb-20 px-6 text-center">
                <h1 className={`${syne.className} text-7xl md:text-[10vw] leading-[0.8] font-bold uppercase mb-8`}>
                    Invest<br />In Yourself
                </h1>
                <p className="font-serif italic text-xl max-w-2xl mx-auto border-t border-black pt-8">
                    No contracts. No hidden fees. Just sweat.
                </p>
            </header>

            <section className="px-6 py-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-black border border-black">
                    {[
                        { name: "Single Drop-In", price: "25€", desc: "One time access. Perfect for trying it out.", highlight: false },
                        { name: "First Timer", price: "45€", desc: "3 Classes. 14 Days validity. New clients only.", highlight: true },
                        { name: "Unlimited", price: "150€", desc: "Monthly access. Recurring payment. Cancel anytime.", highlight: false },
                        { name: "5 Pack", price: "115€", desc: "Valid for 2 months.", highlight: false },
                        { name: "10 Pack", price: "210€", desc: "Valid for 6 months. Shareable.", highlight: false },
                        { name: "20 Pack", price: "380€", desc: "Valid for 12 months. Shareable.", highlight: false }
                    ].map((item, i) => (
                        <div key={i} className={`p-12 border border-black/10 flex flex-col justify-between h-96 transition-all duration-700 hover:bg-[#bc3908] hover:text-white group relative overflow-hidden ${item.highlight ? 'bg-black text-white' : 'bg-white text-black'}`}>
                            <motion.div
                                initial={false}
                                whileInView={{ opacity: 1, backgroundColor: "#bc3908" }}
                                viewport={{ amount: 0.1, margin: "-30% 0px -30% 0px" }}
                                className="absolute inset-0 transition-colors duration-700 pointer-events-none opacity-0 group-hover:opacity-100 md:group-hover:opacity-100"
                            />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-70">{item.name}</h3>
                                    <div className={`${syne.className} text-6xl font-bold mb-4 transition-transform duration-700 group-hover:scale-105`}>{item.price}</div>
                                    <p className="font-serif italic opacity-60 group-hover:opacity-100 transition-opacity duration-700">{item.desc}</p>
                                </div>
                                <button className={`w-full py-3 border text-xs font-bold uppercase tracking-widest transition-all ${item.highlight ? 'bg-white text-black border-white hover:bg-transparent hover:text-white' : 'border-black group-hover:border-white hover:bg-white hover:text-black'}`}>
                                    Purchase
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
