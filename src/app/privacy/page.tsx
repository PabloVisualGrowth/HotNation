"use client";

import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
            {/* Texture Overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

            <Navbar />

            <header className="pt-40 pb-20 px-6 text-center border-b border-black">
                <h1 className={`${syne.className} text-[10vw] leading-[0.8] font-bold uppercase mb-8`}>
                    Privacy<br />Policy
                </h1>
            </header>

            <main className="max-w-3xl mx-auto px-6 py-24 space-y-12">
                <section>
                    <h2 className={`${syne.className} text-3xl uppercase mb-6`}>1. Data Collection</h2>
                    <p className="font-serif italic text-lg leading-relaxed text-gray-700">
                        We collect personal information that you voluntarily provide to us when you register at our studio, sign up for our newsletter, or book a class. This may include your name, email address, phone number, and payment information.
                    </p>
                </section>

                <section>
                    <h2 className={`${syne.className} text-3xl uppercase mb-6`}>2. Use of Information</h2>
                    <p className="font-serif italic text-lg leading-relaxed text-gray-700">
                        Your data is used solely to provide our services, process transactions, communicate with you about your bookings, and send you occasional updates about the studio if you have opted in.
                    </p>
                </section>

                <section>
                    <h2 className={`${syne.className} text-3xl uppercase mb-6`}>3. Data Protection</h2>
                    <p className="font-serif italic text-lg leading-relaxed text-gray-700">
                        We implement high-level security measures to protect your personal information. We do not sell, trade, or otherwise transfer your data to outside parties without your explicit consent.
                    </p>
                </section>

                <section>
                    <h2 className={`${syne.className} text-3xl uppercase mb-6`}>4. Your Rights</h2>
                    <p className="font-serif italic text-lg leading-relaxed text-gray-700">
                        You have the right to access, correct, or delete your personal data at any time. If you wish to exercise these rights, please contact us at hello@hotnation.com.
                    </p>
                </section>

                <section className="pt-12 border-t border-black/10">
                    <p className="text-sm uppercase tracking-widest font-bold">Last updated: February 2026</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
