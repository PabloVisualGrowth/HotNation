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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#c0301a] text-white py-3 border-b border-black/10" : "bg-transparent text-black py-6 border-b border-transparent"}`}>
                <div className="w-full px-6 md:px-12 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {/* Left - Text Logo */}
                    <div className="flex items-center gap-2">
                        <Link href="/" className="hover:opacity-70 transition-opacity">
                            Hot Concept <span className="mx-1">—</span> Barre
                        </Link>
                    </div>

                    {/* Center - Links (Desktop) */}
                    <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
                        <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
                        <Link href="/method" className="hover:opacity-60 transition-opacity">Method</Link>
                        <Link href="/pricing" className="bg-black text-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors">Pricing</Link>
                        <Link href="/locations" className="hover:opacity-60 transition-opacity">Locations</Link>
                        <Link href="/studio" className="hover:opacity-60 transition-opacity">About</Link>
                        <Link href="/" className="hover:opacity-60 transition-opacity">Bookings</Link>
                    </div>

                    {/* Right - Account & Menu */}
                    <div className="flex items-center gap-6">
                        <span className="hidden md:flex gap-2 opacity-60">
                            <button className="hover:opacity-100">ES</button>
                            <button className="hover:opacity-100">EN</button>
                            <button className="hover:opacity-100">CA</button>
                        </span>

                        <button className="hidden md:block hover:underline underline-offset-4 decoration-1">
                            My Account
                        </button>

                        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
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
