"use client";

import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
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

    const pricingItems = [
        {
            name: "Single Drop-In",
            price: "25€",
            desc: "1 class",
            highlight: false,
            image: "/collage-1.jpg"
        },
        {
            name: "First Timer",
            price: "45€",
            desc: "Trial 3 Classes",
            highlight: true,
            image: "/collage-3.jpg"
        },
        {
            name: "Unlimited",
            price: "150€",
            desc: "Monthly Access",
            highlight: false,
            image: "/collage-4.jpg"
        },
        {
            name: "5 Pack",
            price: "115€",
            desc: "Valid 2 Months",
            highlight: false,
            image: "/collage-5.jpg"
        },
        {
            name: "10 Pack",
            price: "210€",
            desc: "Valid 6 Months",
            highlight: false,
            image: "/img-pose.jpg"
        },
        {
            name: "20 Pack",
            price: "380€",
            desc: "Valid 12 Months",
            highlight: false,
            image: "/img-bridge.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#c0301a] selection:text-white">
            <Navbar />

            {/* HEADER - Simple & Centered */}
            <header className="pt-32 pb-20 px-6 text-center">
                <h1 className={`${syne.className} text-4xl md:text-6xl font-bold uppercase`}>
                    Pricing Studio
                </h1>
            </header>

            {/* PRICING GRID - Full Bleed Images with Red Overlay */}
            <section className="w-full">
                {pricingItems.map((item, i) => (
                    <div
                        key={i}
                        className="relative group h-[50vh] md:h-[60vh] overflow-hidden border-r border-b border-white/10 bg-black"
                    >
                        {/* Background Image - Default Grayscale, Color on Hover */}
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                            unoptimized
                        />

                        {/* Subtle dark overlay for text readability, clears up slightly on hover to reveal color */}
                        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10 text-white pointer-events-none">
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80 shadow-black drop-shadow-md">
                                {item.name}
                            </span>
                            <h2 className={`${syne.className} text-4xl md:text-5xl font-bold mb-2 shadow-black drop-shadow-md`}>
                                {item.desc.includes("Pack") || item.desc.includes("Access") ? item.price : `${item.desc} – ${item.price}`}
                            </h2>
                        </div>

                        {/* Floating Button - Glass Effect */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
                            <button className="glass-pill hover:scale-105 active:scale-95 transition-transform duration-300">
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
        </div>
            </section >

        {/* INFO SECTION */ }
        < section className = "grid grid-cols-1 md:grid-cols-2 bg-[#FDF7E8] text-black" >
                <div className="p-12 md:p-24 flex flex-col justify-center border-b border-black md:border-b-0 md:border-r">
                    <h3 className={`${syne.className} text-4xl mb-6 uppercase`}>Private Sessions</h3>
                    <p className="font-serif italic text-lg mb-8">
                        Looking for 1:1 attention? We offer private infrared barre training tailored to your goals.
                    </p>
                    <a href="mailto:hello@hotconcept.com" className="text-xs font-bold uppercase tracking-widest border-b border-black w-max pb-1 hover:text-[#c0301a] transition-colors">
                        Inquire via Email
                    </a>
                </div>
                <div className="p-12 md:p-24 flex flex-col justify-center border-b border-black">
                    <h3 className={`${syne.className} text-4xl mb-6 uppercase`}>Gift Cards</h3>
                    <p className="font-serif italic text-lg mb-8">
                        Give the gift of heat. Digital gift cards available in any amount.
                    </p>
                    <button className="px-8 py-3 rounded-full border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all w-max">
                        Purchase Gift Card
                    </button>
                </div>
            </section >

        <Footer />
        </div >
    );
}
