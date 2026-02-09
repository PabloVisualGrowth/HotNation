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
            {/* Navbar container - Full width strip that moves to vertical center */}
            <nav className={`fixed left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "top-[50%] -translate-y-1/2" : "top-0"}`}>
                <div
                    className={`
                        w-full flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-700
                        ${isScrolled
                            ? "bg-[#E6DCD2]/90 backdrop-blur-md text-black py-4 px-6 md:px-12 shadow-xl border-y border-black/5"
                            : "bg-transparent text-black py-8 px-6 md:px-12"}
                    `}
                >
                    {/* Left - Logo */}
                    <div className="flex items-center gap-2 relative w-24 h-5 md:w-32 md:h-6 shrink-0">
                        <Link href="/" className="hover:opacity-70 transition-opacity w-full h-full relative">
                            <Image
                                src="/logo-new.png"
                                alt="Hot Nation"
                                fill
                                className={`object-contain object-left ${isScrolled ? "invert-0 filter brightness-0" : "invert-0 filter brightness-0"}`}
                                priority
                                unoptimized
                            />
                        </Link>
                    </div>

                    {/* Center - Links (Desktop) */}
                    <div className={`hidden md:flex gap-8 items-center justify-center absolute left-1/2 -translate-x-1/2`}>
                        {[
                            { name: "Home", path: "/" },
                            { name: "Method", path: "/method" },
                            { name: "Pricing", path: "/pricing" },
                            { name: "Locations", path: "/locations" },
                            { name: "About", path: "/studio" },
                            { name: "Bookings", path: "/bookings" }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`
                                    px-2 py-1 transition-all duration-300 relative group
                                    ${pathname === link.path ? "font-black" : "font-medium hover:opacity-60"}
                                `}
                            >
                                {link.name}
                                {pathname === link.path && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right - Account & Menu */}
                    <div className="flex items-center gap-6 shrink-0 justify-end">
                        <span className="hidden md:flex gap-4 opacity-60 text-black">
                            <button className="hover:opacity-100">ES</button>
                            <button className="hover:opacity-100">EN</button>
                            <button className="hover:opacity-100">CA</button>
                        </span>

                        <button className="hidden md:block hover:underline underline-offset-4 decoration-1 text-black">
                            My Account
                        </button>

                        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <Menu className="w-6 h-6 text-black" />
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
