"use client";

import { motion } from "motion/react";
import MacOSCard from "@/components/ui/MacOSCard";
import { ProjectsDecoration } from "@/components/ui/SectionDecorations";

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  stats?: { label: string; value: string }[];
  github: string;
  live?: string;
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
    name: "AI PR Review Bot",
    tagline: "Automated code review",
    description:
      "GitHub Action that automatically reviews pull requests using Google Gemini AI. Analyzes code quality, maintainability, potential bugs, and security issues with structured JSON feedback.",
    tech: ["GitHub Actions", "Google Gemini", "TypeScript"],
    stats: [{ label: "Reviews", value: "Code quality, security, bugs" }],
    github: "https://github.com/aradhyacp/ai-pr-review-bot",
  },
  {
    name: "AI README Generator",
    tagline: "README.md in seconds",
    description:
      "Frontend-only AI tool to generate README files for your projects. Built with streaming UI for real-time output generation. Users provide their own API key to avoid cost issues.",
    tech: ["Next.js", "Streaming UI", "OpenAI API"],
    github: "https://github.com/aradhyacp/ai-readme-generator",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.19 6.839 9.515.5.092.682-.218.682-.484 0-.236-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.03-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.376.203 2.393.1 2.646.64.7 1.03 1.594 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
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
            04 / Projects
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Proof of Work
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Real projects with real users. Built from curiosity, not for a
            resume.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MacOSCard title={project.name} className="h-full">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <div className="mt-1 text-sm text-[#3fb950]">
                    {project.tagline}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="mb-5 flex flex-wrap gap-6 border-t border-white/10 pt-5">
                    {project.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-lg font-semibold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/40">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#238636]/30 bg-[#238636]/10 py-2.5 text-sm text-[#3fb950] transition-all hover:bg-[#238636]/20"
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
      </div>
    </section>
  );
}
