"use client";

import { motion } from "motion/react";
import MacOSCard from "@/components/ui/MacOSCard";
import { OpenSourceDecoration } from "@/components/ui/SectionDecorations";
import ShinyText from "../ShinyText";

interface Contribution {
  repo: string;
  org: string;
  stars: string;
  role: string;
  description: string;
  prs: string[];
  url: string;
}

const contributions: Contribution[] = [
  {
    repo: "streamdown",
    org: "vercel",
    stars: "4,700+",
    role: "Contributor",
    description:
      "Drop-in replacement for react-markdown designed for AI-powered streaming. Powers Vercel's AI Elements.",
    prs: [
      "Fixed broken image handling with proper fallback UI",
      "Added 'Copy as Markdown' for tables",
      "Made code block header buttons sticky",
      "Fixed Tailwind CSS purging for plugin packages",
    ],
    url: "https://github.com/vercel/streamdown",
  },
  {
    repo: "AperiSolve",
    org: "Zeecka",
    stars: "791",
    role: "Maintainer",
    description:
      "Steganalysis web platform used in CTF competitions and security research for analyzing steganography in images.",
    prs: [
      "Integrated Sentry for real-time error monitoring",
      "Fixed CI/CD pipelines",
      "Multiple functionality and reliability improvements",
    ],
    url: "https://github.com/Zeecka/AperiSolve",
  },
  {
    repo: "pyinstxtractor-ng",
    org: "pyinstxtractor",
    stars: "200+",
    role: "Contributor",
    description:
      "Extracts PyInstaller-packaged Python executables. Used in security research and CTF challenges.",
    prs: [
      "Added --info flag for metadata inspection",
      "Improved zlib decompression handling for complex binaries",
    ],
    url: "https://github.com/pyinstxtractor/pyinstxtractor-ng",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.19 6.839 9.515.5.092.682-.218.682-.484 0-.236-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.03-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.376.203 2.393.1 2.646.64.7 1.03 1.594 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
    <path d="M12 .587l3.668 7.431L24 9.186l-6 5.85 1.416 8.26L12 19.187l-7.416 4.11L6 15.036 0 9.186l8.332-1.168z" />
  </svg>
);

export default function OpenSource() {
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
            03 / Open Source
          </div>
          {/* <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Open Source Contributions
          </h2> */}
           <ShinyText 
          text="Open Source Contributions"
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
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            I contribute to tools I actually use. When I notice rough edges, I
            fix them.
          </p>
        </motion.div>

        {/* Contributions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contributions.map((contrib, index) => (
            <motion.div
              key={contrib.repo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MacOSCard
                title={`${contrib.org}/${contrib.repo}`}
                className="h-full"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {contrib.repo}
                    </h3>
                    <div className="mt-1 text-sm text-white/50">
                      {contrib.org}
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                      contrib.role === "Maintainer"
                        ? "bg-[#238636]/20 text-[#3fb950]"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {contrib.role}
                  </span>
                </div>

                {/* Stars */}
                <div className="mb-4 flex items-center gap-1.5 text-sm text-amber-400/80">
                  <StarIcon />
                  <span>{contrib.stars} stars</span>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-white/60">
                  {contrib.description}
                </p>

                {/* PRs */}
                <div className="mb-6">
                  <div className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
                    Contributions
                  </div>
                  <ul className="space-y-1.5">
                    {contrib.prs.slice(0, 3).map((pr, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#3fb950]" />
                        <span className="line-clamp-2">{pr}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <a
                  href={contrib.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <GithubIcon />
                  View Repository
                </a>
              </MacOSCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
