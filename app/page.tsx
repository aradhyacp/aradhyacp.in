"use client";

import Floatinglines from "@/components/FloatingLines.jsx";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import GitHubStack from "@/components/sections/GitHubStack";
import OpenSource from "@/components/sections/OpenSource";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Wave Background */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Wave Background - Only for Hero */}
        <div className="absolute inset-0 z-0">
          <Floatinglines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[5,5,5]}
            lineDistance={[5,5,5]}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
            linesGradient={[]}
          />
        </div>
        <Hero />
      </section>

      {/* Rest of the site with gradient background + grid aesthetics */}
      <div className="relative gradient-mesh noise-overlay">
        {/* Ambient glow spots - more vibrant */}
        <div className="glow-spot glow-spot-coral w-[500px] h-[500px] -top-[100px] -left-[100px]" />
        <div className="glow-spot glow-spot-lavender w-[600px] h-[600px] top-[15%] -right-[200px]" />
        <div className="glow-spot glow-spot-mint w-[400px] h-[400px] top-[35%] left-[5%]" />
        <div className="glow-spot glow-spot-sky w-[500px] h-[500px] top-[55%] -right-[100px]" />
        <div className="glow-spot glow-spot-peach w-[450px] h-[450px] top-[75%] left-[15%]" />
        <div className="glow-spot glow-spot-lavender w-[400px] h-[400px] bottom-[5%] right-[10%]" />

        {/* Dot grid pattern - subtle */}
        <div className="pointer-events-none absolute inset-0 z-0 dot-grid opacity-20" />

        {/* Grid overlay with blur */}
        <div className="pointer-events-none absolute inset-0 z-0 grid-glow opacity-40" />

        {/* Horizontal ruler lines */}
        {/* <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="ruler-line absolute top-[12%] w-full" />
          <div className="ruler-line absolute top-[28%] w-full" />
          <div className="ruler-line absolute top-[45%] w-full" />
          <div className="ruler-line absolute top-[62%] w-full" />
          <div className="ruler-line absolute top-[78%] w-full" />
          <div className="ruler-line absolute top-[92%] w-full" />
        </div> */}

        {/* Vertical ruler lines */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden lg:block">
          <div className="ruler-line-vertical absolute left-[8%] h-full" />
          <div className="ruler-line-vertical absolute left-[92%] h-full" />
        </div>

        {/* Content */}
        <main className="relative z-10">
          <About />
          <div className="section-divider mx-auto max-w-4xl" />
          <GitHubStack />
          <div className="section-divider mx-auto max-w-4xl" />
          <OpenSource />
          <div className="section-divider mx-auto max-w-4xl" />
          <Projects />
          <div className="section-divider mx-auto max-w-4xl" />
          <Contact />
        </main>
      </div>
    </div>
  );
}