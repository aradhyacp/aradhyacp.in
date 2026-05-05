import HeroBackground from "@/components/HeroBackground";
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
        <HeroBackground />
        <Hero />
      </section>

      {/* Rest of the site with gradient background + grid aesthetics */}
      <div className="gradient-mesh relative overflow-hidden">
        {/* Ambient glow spots - reduced count, GPU-promoted */}
        <div className="glow-spot glow-spot-coral -top-[100px] -left-[100px] h-[500px] w-[500px]" />
        <div className="glow-spot glow-spot-lavender top-[20%] -right-[200px] h-[600px] w-[600px]" />
        <div className="glow-spot glow-spot-mint top-[55%] left-[5%] h-[450px] w-[450px]" />

        {/* Dot grid pattern - subtle (no filter, safe) */}
        <div className="dot-grid pointer-events-none absolute inset-0 z-0 opacity-20" />

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
