'use client';

import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";
import TechnicalArsenal from "@/components/ui/TechnicalArsenal";
import ShinyText from "../ShinyText";
import BorderGlow from "@/components/BorderGlow"
import TechMarquee from "../ui/TechMarquee";

export default function GitHubStack() {
  return (
    <section className="relative z-10 min-h-screen px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-2 font-mono text-sm uppercase tracking-widest text-[#3fb950]">
            02 / GitHub & Stack
          </div>
          {/* <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Contributions & Tech
          </h2> */}
          <ShinyText
            text="Contributions & Tech"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          />
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          {/* <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8"> */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#060010"
            borderRadius={28}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 md:p-8 md:pb-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-medium text-white">
                GitHub Contributions
              </h3>
              <a
                href="https://github.com/aradhyacp"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white break-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                @aradhyacp
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zm11-3v8l-3.29-3.29-6.42 6.42-1.41-1.42 6.42-6.42L13 3h8z" />
                </svg>
              </a>
            </div>
            <div className="-mx-1 max-w-full overflow-x-auto no-scrollbar px-1">
              <GitHubCalendar
                username="aradhyacp"
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              />
            </div>
          </BorderGlow>
          {/* </div> */}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28">
            <TechnicalArsenal /></div>
          <TechMarquee className="mt-15" />
        </motion.div>
      </div>
    </section>
  );
}
