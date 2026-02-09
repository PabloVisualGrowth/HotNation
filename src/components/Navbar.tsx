"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled ? "top-[4vh] md:top-[6vh]" : "top-0"}`}>
                <div
                    className={`
                        mx-auto transition-all duration-500 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest
                        ${isScrolled
                            ? "w-[90%] md:w-[60%] bg-black/80 backdrop-blur-xl text-white px-6 py-3 rounded-full border border-white/10 shadow-2xl"
                            : "w-full px-6 md:px-12 py-6 bg-transparent text-black border-b border-transparent"}
                    `}
                >
                    {/* Left - Logo */}
                    {/* When scrolled, logo hides or becomes icon? User asked for "descend to center". 
                        Usually this means the whole bar descends or a pill descends. 
                        Let's keep the logo but maybe smaller or just icon if space is tight.
                        For now, full logo but properly colored.
                    */}
                    <div className="flex items-center gap-2 relative w-32 h-6 md:h-8 shrink-0">
                        <Link href="/" className="hover:opacity-70 transition-opacity w-full h-full relative">
                            <Image
                                src="/logo-new.png"
                                alt="Hot Nation"
                                fill
                                className={`object-contain object-left ${isScrolled ? "invert filter brightness-0 invert" : "invert-0 filter brightness-0"}`}
                                priority
                                unoptimized
                            />
                        </Link>
                    </div>

                    {/* Center - Links (Desktop) */}
                    <div className={`hidden md:flex gap-4 lg:gap-8 items-center justify-center w-full ${isScrolled ? "text-white/90" : "text-black absolute left-1/2 -translate-x-1/2"}`}>
                        <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
                        <Link href="/method" className="hover:text-white/60 transition-colors">Method</Link>
                        <Link href="/pricing" className={`px-3 py-1 rounded-full transition-colors ${isScrolled ? "bg-white text-black font-extrabold" : "bg-black text-white hover:bg-black/80"}`}>Pricing</Link>
                        <Link href="/locations" className="hover:text-white/60 transition-colors">Locations</Link>
                        <Link href="/studio" className="hover:text-white/60 transition-colors">About</Link>
                        <Link href="/" className="hover:text-white/60 transition-colors">Bookings</Link>
                    </div>

                    {/* Right - Account & Menu */}
                    <div className="flex items-center gap-6 shrink-0 justify-end">
                        <span className={`hidden md:flex gap-2 opacity-60 ${isScrolled ? "hidden" : "block"}`}>
                            <button className="hover:opacity-100">ES</button>
                            <button className="hover:opacity-100">EN</button>
                            <button className="hover:opacity-100">CA</button>
                        </span>

                        <button className={`hidden md:block hover:underline underline-offset-4 decoration-1 ${isScrolled ? "hidden" : "block"}`}>
                            My Account
                        </button>

                        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <Menu className={`w-6 h-6 ${isScrolled ? "text-white" : "text-black"}`} />
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
