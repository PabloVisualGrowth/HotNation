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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${isScrolled ? "translate-y-0 opacity-100 bg-[#FDF7E8]/90 backdrop-blur-sm border-b border-black/5 py-2" : "-translate-y-full opacity-0 pointer-events-none py-4"}`}>
                <div className="w-full px-6 md:px-12 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-black">
                    {/* Left - Small Logo (Inverted to Black) */}
                    <div className="relative w-32 h-8">
                        <Link href="/">
                            <Image
                                src="/logo-new.png"
                                alt="Hot Nation"
                                fill
                                className="object-contain object-left invert"
                                priority
                                unoptimized
                            />
                        </Link>
                    </div>

                    {/* Center - Links */}
                    <div className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2">
                        <Link href="/method" className="hover:opacity-50 transition-opacity">Method</Link>
                        <Link href="/studio" className="hover:opacity-50 transition-opacity">Studio</Link>
                        <Link href="/pricing" className="hover:opacity-50 transition-opacity">Pricing</Link>
                        <Link href="/locations" className="hover:opacity-50 transition-opacity">Locations</Link>
                    </div>

                    {/* Right - Account & Menu */}
                    <div className="flex items-center gap-6">
                        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-transparent hover:text-black border border-black transition-all">
                            My Account
                        </button>
                        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="w-5 h-5" />
                        </button>
                        <span className="hidden md:inline">EN</span>
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
