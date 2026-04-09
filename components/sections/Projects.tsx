"use client";

import { LucideMoveRight } from "lucide-react";
import { motion } from "motion/react";
import MacOSCard from "@/components/ui/MacOSCard";
import ShinyText from "../ShinyText";

interface Project {
  description: string;
  github: string;
  live?: string;
  name: string;
  stats?: { label: string; value: string }[];
  tagline: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "LifeGrid",
    tagline: "Dynamic wallpaper engine",
    description:
      "Generates SVG/PNG wallpapers based on life progress, year progress, and goal tracking. Built with Cloudflare Workers and WebAssembly for high-performance image generation at the edge.",
    tech: ["Cloudflare Workers", "WebAssembly", "resvg-wasm", "TypeScript"],
    stats: [
      { label: "Daily Users", value: "500+" },
      { label: "GitHub Stars", value: "45" },
    ],
    github: "https://github.com/aradhyacp/LifeGrid",
    live: "https://lifegrid-wallpapers.pages.dev",
  },
  {
    name: "Leak Disclosure",
    tagline: "Security SaaS platform",
    description:
      "Full-stack platform for detecting compromised data in breaches. Features search engine for breach data, real-time monitoring with cron jobs, and automated email alerts.",
    tech: ["Next.js", "Supabase", "Clerk", "Stripe"],
    stats: [{ label: "Features", value: "Payments, Auth, Monitoring" }],
    github: "https://github.com/aradhyacp/Leak-Disclosure",
  },
  {
    name: "SecFlow",
    tagline: "Automated multi-pass threat analysis pipeline",
    description:
      "AI-assisted security pipeline that analyzes files, URLs, IPs, domains, and images through specialized microservices. Chains analysis across multiple passes by extracting IOCs, downloading payloads, and pivoting between analyzers. Generates full DFIR-style reports with YARA rules, SIGMA rules, and MITRE ATT&CK mappings.",
    tech: [
      "Python",
      "Flask",
      "Docker Compose",
      "React",
      "Groq (Qwen3, LLaMA 3.3)",
      // "VirusTotal API",
      // "Ghidra",
      // "binwalk",
      // "oletools",
      // "OSINT APIs"
    ],
    stats: [
      { label: "Architecture", value: "6 Microservices + Multi-pass" },
      // { label: "Analyzers", value: "5 (Malware, Steg, Recon, Web, Macro)" },
      // { label: "Pipeline", value: "Multi-pass (3–5 iterations)" },
      // { label: "Output", value: "YARA + SIGMA + MITRE + PDF Report" }
      { label: "GitHub Stars", value: "10" },
    ],
    github: "https://github.com/aradhyacp/SecFlow",
  },
  {
    name: "AI PR Review Bot",
    tagline: "Automated code review",
    description:
      "GitHub Action that automatically reviews pull requests using Google Gemini AI. Analyzes code quality, maintainability, potential bugs, and security issues with structured JSON feedback.",
    tech: ["GitHub Actions", "Google Gemini", "TypeScript"],
    stats: [{ label: "Reviews", value: "Code quality, security, bugs" }],
    github: "https://github.com/aradhyacp/ai-pr-review-bot",
  },
];

const GithubIcon = () => (
  <svg aria-label="Github" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.19 6.839 9.515.5.092.682-.218.682-.484 0-.236-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.03-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.376.203 2.393.1 2.646.64.7 1.03 1.594 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

export default function Projects() {
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
            04 / Projects
          </div>
          {/* <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Proof of Work
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
            text="Proof of Work"
            yoyo={false}
          />
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Real projects with real users. Built from curiosity, not for a
            resume.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              key={project.name}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <MacOSCard className="h-full" title={project.name}>
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-semibold text-white text-xl">
                    {project.name}
                  </h3>
                  <div className="mt-1 text-[#3fb950] text-sm">
                    {project.tagline}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 break-words text-sm text-white/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/60 text-xs"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="mb-5 flex flex-wrap gap-4 border-white/10 border-t pt-5 sm:gap-6">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="flex items-center gap-1 font-semibold text-lg text-white">
                          {stat.label === "GitHub Stars" ? (
                            <>
                              {stat.value}
                              <svg
                                aria-hidden="true"
                                className="text-white"
                                data-view-component="true"
                                fill="currentColor"
                                height="16"
                                version="1.1"
                                viewBox="0 0 16 16"
                                width="16"
                              >
                                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
                              </svg>
                            </>
                          ) : (
                            stat.value
                          )}
                        </div>
                        <div className="text-white/40 text-xs">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                    href={project.github}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#238636]/30 bg-[#238636]/10 py-2.5 text-[#3fb950] text-sm transition-all hover:bg-[#238636]/20"
                      href={project.live}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </MacOSCard>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <a
            className="group flex items-center gap-2 rounded-lg border border-white/20 bg-white px-6 py-3 font-semibold text-black text-sm transition-all hover:gap-3 hover:bg-white/90"
            href="/projects"
          >
            See All Projects
            <LucideMoveRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
