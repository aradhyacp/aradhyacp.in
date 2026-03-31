"use client";

import { motion } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";
import TechMarquee from "@/components/ui/TechMarquee";

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
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Contributions & Tech
          </h2>
        </motion.div>

        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">
                GitHub Contributions
              </h3>
              <a
                href="https://github.com/aradhyacp"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                @aradhyacp
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zm11-3v8l-3.29-3.29-6.42 6.42-1.41-1.42 6.42-6.42L13 3h8z" />
                </svg>
              </a>
            </div>
            <div className="overflow-x-auto no-scrollbar">
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
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-lg font-medium text-white">Tech Stack</h3>
            <p className="text-sm text-white/50">
              Technologies I work with daily
            </p>
          </div>

          <TechMarquee />
          <TechMarquee reverse className="mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
