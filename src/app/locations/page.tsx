"use client";

import Image from "next/image";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

            <Navbar />

            <header className="pt-40 pb-20 px-6 text-center">
                <h1 className={`${syne.className} text-[12vw] leading-[0.8] font-bold uppercase mb-8`}>
                    Find Us
                </h1>
            </header>

            <section className="px-6 pb-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Location 1 */}
                    <div className="group">
                        <div className="relative h-[60vh] w-full mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/img-bridge.jpg"
                                alt="Eindhoven Studio"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="flex justify-between items-end border-b border-black pb-4 mb-4">
                            <h2 className={`${syne.className} text-4xl uppercase`}>Eindhoven</h2>
                            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full">Open</span>
                        </div>
                        <p className="font-serif italic text-lg mb-2">Stratumseind 32</p>
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
                    <div className="group md:mt-32">
                        <div className="relative h-[60vh] w-full mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/img-pose.jpg"
                                alt="Rotterdam Studio"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="flex justify-between items-end border-b border-black pb-4 mb-4">
                            <h2 className={`${syne.className} text-4xl uppercase`}>Rotterdam</h2>
                            <span className="text-xs font-bold uppercase tracking-widest border border-black px-3 py-1 rounded-full">Coming Soon</span>
                        </div>
                        <p className="font-serif italic text-lg mb-2">Coolsingel 40</p>
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
