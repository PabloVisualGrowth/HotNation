"use client";

import Image from "next/image";
import { ArrowRight, Menu, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-black selection:text-white">
      <div className="texture-overlay"></div>

      <Navbar />

      {/* HERO SECTION - Strict Grid Mosaic */}
      <header className="relative w-full pt-20 md:pt-28 border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[85vh]">

          {/* Col 1: Text & Statement */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between p-6 md:p-12 border-b md:border-b-0 md:border-r border-black relative">
            <div className="uppercase text-xs font-bold tracking-widest mb-12">
              Est. 2026 — The Netherlands
            </div>

            <div className="relative z-10 max-w-[90%]">
              <h1 className="type-display-huge text-6xl md:text-7xl lg:text-8xl mb-6 break-words">
                HOT<br />
                CONCEPT
              </h1>
              <p className="text-lg md:text-xl font-serif italic max-w-md leading-relaxed">
                The original infrared heated barre studio.
                Precision meets heat in a transformative full-body experience.
              </p>
            </div>

            <div className="mt-12">
              <button className="btn-concept-filled">
                Book a Class
              </button>
            </div>
          </div>

          {/* Col 2 & 3: Image Mosaic with Borders */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 grid-rows-2 h-[50vh] md:h-full">
            <div className="relative border-r border-b border-black group overflow-hidden">
              <Image
                src="/collage-1.jpg"
                alt="Detail"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
            <div className="relative border-b border-black group overflow-hidden">
              <Image
                src="/collage-3.jpg"
                alt="Movement"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
            <div className="relative border-r border-black group overflow-hidden">
              <Image
                src="/collage-4.jpg"
                alt="Studio"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
            <div className="relative group overflow-hidden">
              <Image
                src="/collage-5.jpg"
                alt="Heat"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                unoptimized
              />
            </div>
          </div>
        </div>
      </header>

      {/* STATEMENT SECTION - Bordered & Centered */}
      <section className="border-b border-black py-24 md:py-32 px-6 bg-[#FDF7E8]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
            STATE OF THE ART  <span className="font-serif italic border-b border-black pb-1">INFRARED HEAT</span> MEETS CLASSICAL <span className="font-serif italic border-b border-black pb-1">BARRE PRECISION</span>.
          </h2>
          <div className="mt-12 flex justify-center">
            <ArrowRight className="w-8 h-8 animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* SPLIT SECTION - Method & Studio */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">

        {/* Left: The Method */}
        <div className="relative border-b md:border-b-0 md:border-r border-black group min-h-[60vh] flex flex-col justify-end p-8 md:p-12 hover:bg-[#bc3908] hover:text-white transition-colors duration-500">
          <motion.div
            initial={false}
            whileInView={isMobile ? { backgroundColor: "#bc3908" } : {}}
            viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
            className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
          />
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
            {/* Optional Hover Image/Texture */}
          </div>
          <div className="relative z-10 pointer-events-none">
            <span className="block text-xs font-bold uppercase tracking-widest mb-4">01. The Workout</span>
            <h3 className="type-display-huge text-5xl md:text-7xl mb-6">METHOD</h3>
            <p className="text-lg font-serif italic max-w-md mb-8">
              Low impact, high intensity. Our signature sequence targets every muscle group.
            </p>
            <div className="btn-concept group-hover:border-white group-hover:text-white inline-block">
              Explore Method
            </div>
          </div>
        </div>

        {/* Right: The Heat */}
        <div className="relative group min-h-[60vh] flex flex-col justify-end p-8 md:p-12 hover:bg-[#bc3908] hover:text-white transition-colors duration-500">
          <motion.div
            initial={false}
            whileInView={isMobile ? { backgroundColor: "#bc3908" } : {}}
            viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
            className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
          />
          <div className="relative z-10 pointer-events-none">
            <span className="block text-xs font-bold uppercase tracking-widest mb-4">02. The Technology</span>
            <h3 className="type-display-huge text-5xl md:text-7xl mb-6">INFRARED</h3>
            <p className="text-lg font-serif italic max-w-md mb-8">
              Detoxify, boost metabolism, and improve skin health while you move.
            </p>
            <div className="btn-concept group-hover:border-white group-hover:text-white inline-block">
              Our Studio
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION - Bordered */}
      <section className="border-b border-black overflow-hidden py-6 bg-black text-white">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
          <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">HOT CONCEPT &nbsp;—&nbsp; EINDHOVEN</span>
          <span className="text-2xl md:text-4xl font-serif italic">The Original</span>
          <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">INFRARED BARRE &nbsp;—&nbsp; EST 2026</span>
          <span className="text-2xl md:text-4xl font-serif italic">Full Body</span>
          <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">HOT CONCEPT &nbsp;—&nbsp; ROTTERDAM</span>
          <span className="text-2xl md:text-4xl font-serif italic">The Original</span>
          <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">INFRARED BARRE &nbsp;—&nbsp; EST 2026</span>
          <span className="text-2xl md:text-4xl font-serif italic">Full Body</span>
        </div>
      </section>

      {/* LOCATIONS PREVIEW - Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
        <div className="md:border-r border-black relative h-[50vh] md:h-[70vh] group overflow-hidden">
          <motion.div
            initial={{ filter: "grayscale(100%)" }}
            whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
            whileHover={{ filter: "grayscale(0%)" }}
            viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
            className="absolute inset-0"
          >
            <Image
              src="/img-bridge.jpg"
              alt="Location 1"
              fill
              className="object-cover transition-all duration-700"
              unoptimized
            />
          </motion.div>
          <div className="absolute top-0 left-0 p-6 pointer-events-none">
            <span className="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black rounded-full">
              Open Now
            </span>
          </div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/50 to-transparent text-white pointer-events-none">
            <h3 className="type-display-huge text-4xl md:text-6xl">EINDHOVEN</h3>
            <p className="font-serif italic mt-2">Stratumseind 32, Eindhoven</p>
          </div>
        </div>

        <div className="relative h-[50vh] md:h-[70vh] group overflow-hidden">
          <motion.div
            initial={{ filter: "grayscale(100%)" }}
            whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
            whileHover={{ filter: "grayscale(0%)" }}
            viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
            className="absolute inset-0"
          >
            <Image
              src="/img-ball.jpg"
              alt="Location 2"
              fill
              className="object-cover transition-all duration-700"
              unoptimized
            />
          </motion.div>
          <div className="absolute top-0 left-0 p-6 pointer-events-none">
            <span className="bg-[#bc3908] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black rounded-full">
              Coming Soon
            </span>
          </div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/50 to-transparent text-white pointer-events-none">
            <h3 className="type-display-huge text-4xl md:text-6xl">ROTTERDAM</h3>
            <p className="font-serif italic mt-2">Coolsingel 40, Rotterdam</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
