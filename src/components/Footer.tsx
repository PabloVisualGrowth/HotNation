"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FDF7E8] py-24 border-t border-black/5 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    {/* Logo Small in Footer */}
                    <div className="relative w-32 h-8 mb-8">
                        <Image
                            src="/logo-new.png"
                            alt="Hot Nation"
                            fill
                            className="object-contain object-left invert"
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
                        <Link href="/cookies" className="hover:text-black">Cookies Policy</Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-24">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Social</h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <a href="#" className="hover:underline">Instagram</a>
                            <a href="#" className="hover:underline">TikTok</a>
                            <a href="#" className="hover:underline">Spotify</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
                        <p className="text-sm text-gray-600">hello@hotnation.com</p>
                    </div>
                </div>
            </div>

            {/* Huge Logo at Bottom - Inverted to Black */}
            <div className="max-w-7xl mx-auto mt-24 relative h-[20vh] w-full">
                <Image
                    src="/logo-new.png"
                    alt="Hot Nation"
                    fill
                    className="object-contain object-center invert opacity-10"
                    unoptimized
                />
            </div>
        </footer>
    );
}
