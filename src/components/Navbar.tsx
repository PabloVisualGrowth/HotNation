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
            // Trigger sooner
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar container that moves to vertical center on scroll */}
            <nav className={`fixed left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "top-[50%] -translate-y-1/2 pointer-events-none" : "top-0 pointer-events-auto"}`}>
                <div
                    className={`
                        mx-auto transition-all duration-700 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest pointer-events-auto
                        ${isScrolled
                            ? "w-[95%] md:w-[800px] bg-black/80 backdrop-blur-2xl text-white px-8 py-4 rounded-full border border-white/10 shadow-2xl"
                            : "w-full px-6 md:px-12 py-8 bg-gradient-to-b from-black/20 to-transparent text-black"}
                    `}
                >
                    {/* Left - Logo */}
                    <div className="flex items-center gap-2 relative w-24 h-5 md:w-32 md:h-6 shrink-0">
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
                    <div className={`hidden md:flex gap-1 items-center justify-center absolute left-1/2 -translate-x-1/2`}>
                        {[
                            { name: "Home", path: "/" },
                            { name: "Method", path: "/method" },
                            { name: "Pricing", path: "/pricing" },
                            { name: "Locations", path: "/locations" },
                            { name: "About", path: "/studio" },
                            { name: "Bookings", path: "/bookings" } // Assuming /bookings exists or links to home
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`
                                    px-4 py-1.5 rounded-full transition-all duration-300
                                    ${pathname === link.path
                                        ? (isScrolled ? "bg-white text-black font-extrabold" : "bg-black text-white hover:bg-black/80")
                                        : (isScrolled ? "text-white/70 hover:text-white" : "text-black/80 hover:text-black hover:bg-black/5")}
                                `}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right - Account & Menu */}
                    <div className="flex items-center gap-6 shrink-0 justify-end">
                        <span className={`hidden md:flex gap-2 opacity-60 ${isScrolled ? "text-white/60" : "text-black/60"}`}>
                            <button className="hover:opacity-100">ES</button>
                            <button className="hover:opacity-100">EN</button>
                            <button className="hover:opacity-100">CA</button>
                        </span>

                        <button className={`hidden md:block hover:underline underline-offset-4 decoration-1 ${isScrolled ? "text-white" : "text-black"}`}>
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
