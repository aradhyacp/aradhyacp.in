"use client";

import {
  LucideBrainCircuit,
  LucideDollarSign,
  LucideGlobe,
  LucideMonitorCog,
  LucideShieldUser,
} from "lucide-react";
import { motion } from "motion/react";
import ShinyText from "@/components/ShinyText";

const interests = [
  { icon: <LucideGlobe height={20} width={20} />, label: "Web Dev" },
  {
    icon: <LucideBrainCircuit height={20} width={20} />,
    label: "AI Applications",
  },
  {
    icon: <LucideMonitorCog height={20} width={20} />,
    label: "Developer Tools",
  },
  { icon: <LucideShieldUser height={20} width={20} />, label: "Security/CTF" },
  { icon: <LucideGlobe height={20} width={20} />, label: "Open Source" },
  { icon: <LucideDollarSign height={20} width={20} />, label: "SaaS Products" },
];

export default function About() {
  return (
    <section className="relative z-10 min-h-screen px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="mb-2 font-mono text-[#3fb950] text-sm uppercase tracking-widest">
            01 / About
          </div>
          {/* <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            About Me
          </h2> */}
          <ShinyText
            className="font-semibold text-3xl text-white tracking-tight sm:text-4xl md:text-5xl"
            color="#b5b5b5"
            delay={0}
            direction="left"
            disabled={false}
            pauseOnHover={false}
            shineColor="#ffffff"
            speed={2}
            spread={120}
            text="About Me"
            yoyo={false}
          />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-lg text-white/70 leading-relaxed">
              I&apos;m a Computer Science student at{" "}
              <span className="text-white">
                Dayananda Sagar College of Engineering
              </span>
              , Bengaluru. Most of my learning has come from building real
              projects, contributing to open source, and competing in{" "}
              <span className="text-white">CTF security competitions</span>.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              I got into coding out of curiosity, then moved into security
              through CTFs — which trained me to read unfamiliar codebases fast
              and think in failure modes. From there, I moved into{" "}
              <span className="text-white">
                full-stack development and open source
              </span>
              .
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              I don&apos;t wait for permission to start building. My work is
              driven by curiosity about how real systems function end-to-end. I
              like building products from scratch, experimenting with APIs, and
              understanding how different components interact in production.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="font-bold text-2xl text-white">9.12</div>
                <div className="mt-1 text-white/50 text-xs uppercase tracking-wider">
                  CGPA
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="font-bold text-2xl text-[#3fb950]">50+</div>
                <div className="mt-1 text-white/50 text-xs uppercase tracking-wider">
                  PRs Merged
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="font-bold text-2xl text-white">500+</div>
                <div className="mt-1 text-white/50 text-xs uppercase tracking-wider">
                  Daily Users
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center">
                <div className="font-bold text-2xl text-white">3+</div>
                <div className="mt-1 text-white/50 text-xs uppercase tracking-wider">
                  CTF Wins
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Interests & Values */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* <ProfileCard 
             name="Tejpal Aradhya C P"
  title="Software Engineer"
  handle="aradhyacp"
  status="Level Up"
  contactText="Contact Me"
  avatarUrl="/IMG_5648_edit2bgrm.png"
  showUserInfo
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  behindGlowColor="rgba(125, 190, 255, 0.67)"
  iconUrl="/terminal.png"
  behindGlowEnabled
  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
  /> */}
            {/* Interests Grid */}
            <div>
              <h3 className="mb-4 font-medium text-lg text-white uppercase tracking-wider">
                What I&apos;m Into
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {interests.map((interest, index) => (
                  <motion.div
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                    initial={{ opacity: 0, y: 10 }}
                    key={interest.label}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
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
              <h3 className="mb-4 font-medium text-lg text-white uppercase tracking-wider">
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
