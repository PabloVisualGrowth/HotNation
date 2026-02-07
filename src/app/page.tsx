
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-void text-white selection:bg-accent selection:text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter uppercase">HOT CONCEPT</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-accent transition-colors">Home</a>
          <a href="#" className="hover:text-accent transition-colors">Method</a>
          <a href="#" className="hover:text-accent transition-colors">Studio</a>
          <a href="#" className="hover:text-accent transition-colors">Book</a>
        </div>
        <button className="bg-accent text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors">
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Background Heat Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-black to-black z-0 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.4)_0%,rgba(0,0,0,0)_60%)] z-0 mix-blend-screen" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none mb-6 uppercase mix-blend-overlay opacity-90">
            IGNITE<br />YOUR<br />POWER
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-white/80">
            Infrared Heated Barre. The most intense workout in town.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-accent rounded-full animate-ping" />
          </div>
        </div>
      </main>

      {/* Marquee Section */}
      <div className="bg-accent py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-4xl font-black uppercase text-black mx-8">HOT CONCEPT • INFRARED STUDIO</span>
          <span className="text-4xl font-black uppercase text-transparent stroke-black stroke-2 text-stroke-2 mx-8">HOT CONCEPT • INFRARED STUDIO</span>
          <span className="text-4xl font-black uppercase text-black mx-8">HOT CONCEPT • INFRARED STUDIO</span>
          <span className="text-4xl font-black uppercase text-transparent stroke-black stroke-2 text-stroke-2 mx-8">HOT CONCEPT • INFRARED STUDIO</span>
        </div>
      </div>

    </div>
  );
}
