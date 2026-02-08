"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-8 left-8 right-8 md:left-auto md:max-w-md z-[100]"
                >
                    <div className="bg-black text-white p-8 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        {/* Subtle Texture */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/noise.svg')]"></div>

                        <div className="relative z-10">
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Cookie Consent</h4>
                            <p className="font-serif italic text-sm text-gray-400 mb-8 leading-relaxed">
                                We use cookies to enhance your journey. By clicking "Accept", you agree to our use of cookies for analytics and personalized experiences.
                            </p>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={acceptCookies}
                                    className="w-full bg-white text-black py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all"
                                >
                                    Accept All
                                </button>
                                <div className="flex gap-3">
                                    <button
                                        onClick={declineCookies}
                                        className="flex-1 border border-white/20 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-gray-400"
                                    >
                                        Decline
                                    </button>
                                    <Link
                                        href="/cookies"
                                        className="flex-1 border border-white/20 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
