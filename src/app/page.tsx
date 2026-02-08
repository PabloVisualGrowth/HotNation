"use client";

import Image from "next/image";
import { ArrowRight, Menu, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function Home() {
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('/noise.svg')]"></div>

      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen w-full flex flex-col justify-end pb-20 items-center overflow-hidden bg-black">
        {/* Background Grid - Collage of 5 Images */}
        <div className="absolute inset-0 z-0 grid grid-cols-3 gap-1 opacity-80">
          {/* Column 1 */}
          <div className="flex flex-col gap-1">
            <div className="relative h-1/2 w-full">
              <Image src="/collage-1.jpg" alt="Hot Nation 1" fill className="object-cover" priority unoptimized />
            </div>
            <div className="relative h-1/2 w-full">
              <Image src="/collage-2.jpg" alt="Hot Nation 2" fill className="object-cover" priority unoptimized />
            </div>
          </div>

          {/* Column 2 - Center Focus */}
          <div className="relative h-full w-full">
            <Image src="/collage-3.jpg" alt="Hot Nation 3" fill className="object-cover" priority unoptimized />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-1">
            <div className="relative h-2/3 w-full">
              <Image src="/collage-4.jpg" alt="Hot Nation 4" fill className="object-cover" priority unoptimized />
            </div>
            <div className="relative h-1/3 w-full">
              <Image src="/collage-5.jpg" alt="Hot Nation 5" fill className="object-cover" priority unoptimized />
            </div>
          </div>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content - Fading Gradient Logo */}
        <motion.div
          style={{ opacity: logoOpacity }}
          className="relative z-10 w-full max-w-4xl mx-auto px-6 mb-24 pointer-events-none"
        >
          <div className="relative h-[25vh] w-full">
            <Image
              src="/logo-new.png"
              alt="Hot Nation"
              fill
              className="object-contain object-center opacity-80 mix-blend-overlay"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </header>

      {/* Intro Statement - Concept Barre Style */}
      <section className="py-32 bg-[#FDF7E8] text-center px-6">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight max-w-4xl mx-auto leading-tight">
          State of the art <span className="font-serif italic border-b border-black pb-1">infrared heat</span> meets classical <span className="font-serif italic border-b border-black pb-1">barre precision</span>.
        </h2>
        <div className="mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-black border border-black transition-all">
            Explore the Method
          </button>
        </div>
      </section>

      {/* Grid Layout - Dense & Bold */}
      <section className="bg-[#FDF7E8]">
        {/* Row 1 - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-[80vh]">
          {/* Item 1 - Image */}
          <div className="relative group border-r border-[#FDF7E8]/10 h-full overflow-hidden">
            <Image
              src="/img-abs.jpg"
              alt="Sweat"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity p-8">
              <h3 className={`${syne.className} text-4xl text-white uppercase`}>Sweat</h3>
            </div>
          </div>

          {/* Item 2 - Text Block */}
          <div className="bg-[#bc3908] p-12 flex flex-col justify-between text-white relative group h-full">
            <div className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-4">
              Trial Offer
            </div>
            <div>
              <h3 className={`${syne.className} text-6xl uppercase mb-4`}>3 Classes</h3>
              <p className="text-xl font-serif italic">For just 45€</p>
            </div>
            <button className="self-start px-6 py-2 border border-white rounded-full text-xs font-bold uppercase hover:bg-white hover:text-[#bc3908] transition-colors">
              Book Now
            </button>
          </div>

          {/* Item 3 - Image */}
          <div className="relative group h-full overflow-hidden">
            <Image
              src="/img-bridge.jpg"
              alt="Sculpt"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute bottom-8 left-8">
              <span className="bg-white text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                Signature Class
              </span>
            </div>
          </div>
        </div>

        {/* Row 2 - 2 Columns Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
          <div className="relative bg-black text-white p-12 md:p-24 flex flex-col justify-center">
            <h2 className={`${syne.className} text-7xl md:text-8xl uppercase mb-8 leading-[0.9]`}>
              Infrared<br />Benefit
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed mb-12">
              Detoxify vertically while you sculpt horizontally. Our panels heat the body directly, not the air, allowing for a deeper sweat at a lower temperature.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold font-serif italic">45m</div>
                <div className="text-[10px] uppercase tracking-widest mt-2">Efficiency</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-serif italic">600+</div>
                <div className="text-[10px] uppercase tracking-widest mt-2">Cals Burned</div>
              </div>
            </div>
          </div>
          <div className="relative h-full overflow-hidden">
            <Image
              src="/back-sweat.jpg"
              alt="Infrared"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Parallax Full Width */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/group-floor.jpg"
            alt="Studio"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h2 className={`${syne.className} text-[8vw] uppercase leading-none`}>The Studio</h2>
          <button className="mt-8 bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            View Locations
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
