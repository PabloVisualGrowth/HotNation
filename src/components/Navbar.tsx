"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#FDF7E8] border-b border-black ${isScrolled ? "py-2" : "py-4 md:py-6"}`}>
                <div className="w-full px-6 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-black">
                    {/* Left - Logo */}
                    <div className="relative w-40 h-8 md:h-10">
                        <Link href="/">
                            <Image
                                src="/logo-new.png"
                                alt="Hot Nation"
                                fill
                                className="object-contain object-left invert" // Keeping invert because logo is white
                                priority
                                unoptimized
                            />
                        </Link>
                    </div>

                    {/* Center - Links (Desktop) */}
                    <div className="hidden md:flex gap-1 absolute left-1/2 -translate-x-1/2 bg-black/5 p-1 rounded-full border border-black/5 backdrop-blur-sm">
                        <Link href="/method" className="px-5 py-2 rounded-full hover:bg-white/40 transition-all">Method</Link>
                        <Link href="/studio" className="px-5 py-2 rounded-full hover:bg-white/40 transition-all">Studio</Link>
                        <Link href="/pricing" className="px-5 py-2 rounded-full bg-white/60 shadow-sm transition-all">Pricing</Link>
                        <Link href="/locations" className="px-5 py-2 rounded-full hover:bg-white/40 transition-all">Locations</Link>
                    </div>

                    {/* Right - Account & Menu */}
                    <div className="flex items-center gap-6">
                        <button className="hidden md:block btn-concept-filled">
                            My Account
                        </button>
                        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
                        <span className="hidden md:inline font-medium">EN</span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-black text-white transition-transform duration-500 flex flex-col p-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end">
                    <button onClick={() => setIsMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">
                        Close
                    </button>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-8 text-4xl font-bold uppercase tracking-tighter">
                    <Link href="/method" onClick={() => setIsMenuOpen(false)} className="hover:italic">Method</Link>
                    <Link href="/studio" onClick={() => setIsMenuOpen(false)} className="hover:italic">Studio</Link>
                    <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:italic">Pricing</Link>
                    <Link href="/locations" onClick={() => setIsMenuOpen(false)} className="hover:italic">Locations</Link>
                </div>
                <div className="pt-8 border-t border-white/10">
                    <button className="w-full bg-white text-black py-4 rounded-full text-xs font-bold uppercase tracking-widest">
                        My Account
                    </button>
                </div>
            </div>
        </>
    );
}
