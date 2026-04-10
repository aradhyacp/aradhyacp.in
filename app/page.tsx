"use client";

import Floatinglines from "@/components/FloatingLines.jsx";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import GitHubStack from "@/components/sections/GitHubStack";
import Hero from "@/components/sections/Hero";
import OpenSource from "@/components/sections/OpenSource";
import Projects from "@/components/sections/Projects";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Wave Background */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Wave Background - Only for Hero */}
        <div className="absolute inset-0 z-0">
          <Floatinglines
            bendRadius={5}
            bendStrength={-0.5}
            enabledWaves={["top", "middle", "bottom"]}
            interactive={true}
            lineCount={[5, 5, 5]}
            lineDistance={[5, 5, 5]}
            linesGradient={[]}
            parallax={true}
          />
        </div>
        <Hero />
      </section>

      {/* Rest of the site with gradient background + grid aesthetics */}
      <div className="gradient-mesh noise-overlay relative overflow-hidden">
        {/* Ambient glow spots - more vibrant */}
        <div className="glow-spot glow-spot-coral -top-[100px] -left-[100px] h-[500px] w-[500px]" />
        <div className="glow-spot glow-spot-lavender top-[15%] -right-[200px] h-[600px] w-[600px]" />
        <div className="glow-spot glow-spot-mint top-[35%] left-[5%] h-[400px] w-[400px]" />
        <div className="glow-spot glow-spot-sky top-[55%] -right-[100px] h-[500px] w-[500px]" />
        <div className="glow-spot glow-spot-peach top-[75%] left-[15%] h-[450px] w-[450px]" />
        <div className="glow-spot glow-spot-lavender right-[10%] bottom-[5%] h-[400px] w-[400px]" />

        {/* Dot grid pattern - subtle */}
        <div className="dot-grid pointer-events-none absolute inset-0 z-0 opacity-20" />

        {/* Grid overlay with blur */}
        <div className="grid-glow pointer-events-none absolute inset-0 z-0 opacity-40" />

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
        <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
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
