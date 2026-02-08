"use client";

import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            {/* Texture Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

            <Navbar />

            <header className="pt-40 pb-20 px-6 text-center border-b border-black">
                <h1 className={`${syne.className} text-[10vw] leading-[0.8] font-bold uppercase mb-8`}>
                    Cookie<br />Policy
                </h1>
            </header>

            <main className="max-w-3xl mx-auto px-6 py-24 space-y-12">
                <section>
                    <h2 className={`${syne.className} text-3xl uppercase mb-6`}>1. What are cookies?</h2>
                    <p className="font-serif italic text-lg leading-relaxed text-gray-700">
                        Cookies are small text or data files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                    </p>
                </section>

                <section>
                    <h2 className={`${syne.className} text-3xl uppercase mb-6`}>2. How we use them</h2>
                    <p className="font-serif italic text-lg leading-relaxed text-gray-700">
                        At Hot Nation, we use cookies to improve your browsing experience. This includes remembering your login details, keeping track of your class bookings, and helping us understand how you interact with our studio's digital platform.
                    </p>
                </section>

                <section>
                    <h2 className={`${syne.className} text-3xl uppercase mb-6`}>3. Types of cookies</h2>
                    <div className="space-y-6 text-lg">
                        <div>
                            <span className="font-bold underline uppercase text-sm block mb-2">Essential Cookies</span>
                            <p className="font-serif italic text-gray-600">Necessary for the website to function (session management, security).</p>
                        </div>
                        <div>
                            <span className="font-bold underline uppercase text-sm block mb-2">Analytical Cookies</span>
                            <p className="font-serif italic text-gray-600">Help us count visitors and see how they move around the site.</p>
                        </div>
                        <div>
                            <span className="font-bold underline uppercase text-sm block mb-2">Marketing Cookies</span>
                            <p className="font-serif italic text-gray-600">Used to track visitors across websites to display relevant advertisements.</p>
                        </div>
                    </div>
                </section>

                <section className="pt-12 border-t border-black/10">
                    <p className="text-sm uppercase tracking-widest font-bold">Last updated: February 2026</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
