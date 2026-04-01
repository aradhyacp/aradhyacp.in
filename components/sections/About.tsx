"use client";

import { motion } from "motion/react";
import ShinyText from "@/components/ShinyText";

const interests = [
  { icon: "🤖", label: "AI Applications" },
  { icon: "🛠️", label: "Developer Tools" },
  { icon: "🔐", label: "Security/CTF" },
  { icon: "🌐", label: "Open Source" },
  { icon: "⚡", label: "Streaming UIs" },
  { icon: "📦", label: "SaaS Products" },
];

export default function About() {
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
            01 / About
          </div>
          {/* <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            About Me
          </h2> */}
          <ShinyText
            text="About Me"
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

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-white/70">
              I&apos;m a Computer Science student at{" "}
              <span className="text-white">
                Dayananda Sagar College of Engineering
              </span>
              , Bengaluru. Most of my learning has come from building real
              projects, contributing to open source, and competing in{" "}
              <span className="text-white">CTF security competitions</span>.
            </p>

            <p className="text-lg leading-relaxed text-white/70">
              I got into coding out of curiosity, then moved into security
              through CTFs — which trained me to read unfamiliar codebases fast
              and think in failure modes. From there, I moved into{" "}
              <span className="text-white">
                full-stack development and open source
              </span>
              .
            </p>

            <p className="text-lg leading-relaxed text-white/70">
              I don&apos;t wait for permission to start building. My work is
              driven by curiosity about how real systems function end-to-end. I
              like building products from scratch, experimenting with APIs, and
              understanding how different components interact in production.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl font-bold text-white">9.12</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  CGPA
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl font-bold text-[#3fb950]">4+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  PRs Merged
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  Daily Users
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/50">
                  CTF Wins
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Interests & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Interests Grid */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
                What I&apos;m Into
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span className="text-sm text-white/70">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/50">
                How I Work
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3fb950]" />
                  <span>
                    Builds from genuine curiosity, not to pad a resume
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3fb950]" />
                  <span>
                    Contributes to OSS because I use the tools and notice rough
                    edges
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3fb950]" />
                  <span>
                    Thinks in product + engineering — not just &quot;what does
                    this do&quot; but &quot;why does this matter&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3fb950]" />
                  <span>Prefers small, fast-moving teams with ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3fb950]" />
                  <span>Cares deeply about what gets shipped</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
