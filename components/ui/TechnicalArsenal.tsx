"use client";

import {
  LucideCpu,
  LucideDatabase,
  LucidePanelsTopLeft,
  LucideServer,
  LucideSquareTerminal,
  LucideTerminal,
  LucideWrench,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TechCategory {
  icon?: React.ReactNode;
  id: string;
  items: string[];
  label: string;
}

interface TechArsenalProps {
  className?: string;
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <LucidePanelsTopLeft className="h-3.5 w-3.5 shrink-0 text-white/70" />,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <LucideServer className="h-3.5 w-3.5 shrink-0 text-white/70" />,
    items: [
      "Node.js",
      "Python",
      "Express",
      "FastAPI",
      "Django",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "aiml",
    label: "AI / ML",
    icon: <LucideCpu className="h-3.5 w-3.5 shrink-0 text-white/70" />,
    items: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Keras",
      "Hugging Face",
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: <LucideWrench className="h-3.5 w-3.5 shrink-0 text-white/70" />,
    items: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "AWS",
      "Cloudflare",
      "Vercel",
      "Railway",
    ],
  },
  {
    id: "langs",
    label: "Langs",
    icon: <LucideTerminal className="h-3.5 w-3.5 shrink-0 text-white/70" />,
    items: ["TypeScript", "JavaScript", "Python", "Rust", "C++", "SQL"],
  },
  {
    id: "data",
    label: "Data",
    icon: <LucideDatabase className="h-3.5 w-3.5 shrink-0 text-white/70" />,
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Prisma",
      "GraphQL",
      "REST APIs",
    ],
  },
];

export default function TechnicalArsenal({ className }: TechArsenalProps) {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = techCategories.find((cat) => cat.id === activeTab);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-12",
        className
      )}
    >
      {/* Left Section */}
      <div className="space-y-6">
        {/* Icon */}
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          {/* <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg> */}
          <LucideSquareTerminal className="text-gray-200 opacity-90" />
        </div>

        {/* Title */}
        <h3 className="font-bold text-3xl text-white leading-tight sm:text-4xl md:text-5xl">
          Technical
          <br />
          Arsenal
        </h3>

        {/* Description */}
        <p className="text-base text-white/60 leading-relaxed">
          I constantly explore new technologies to find the best tools for
          solving complex problems. My current stack focuses on scalable web
          architecture and machine learning pipelines.
        </p>

        {/* Link */}
        {/* <button className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium">
          View Full System Profile
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button> */}
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-around gap-6 rounded-lg border border-white/10 bg-white/[0.02] p-4 px-4 pt-3 pb-0 text-center sm:justify-around sm:gap-4 sm:p-4 sm:px-4 sm:pb-0">
          {techCategories.map((category) => (
            <button
              className={cn(
                "relative pb-2 font-medium text-xs transition-all duration-300 sm:pb-3 sm:text-sm",
                activeTab === category.id
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              )}
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              type="button"
            >
              <span className="flex items-center gap-2">
                {category.icon && (
                  <span className="text-xs opacity-60">{category.icon}</span>
                )}
                {category.label}
              </span>
              {activeTab === category.id && (
                <motion.div
                  className="absolute right-0 bottom-0 left-0 h-0.5 bg-white"
                  layoutId="activeTabIndicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tech List */}
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            key={activeTab}
            transition={{ duration: 0.2 }}
          >
            {activeCategory?.items.map((tech, index) => (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="group relative flex min-w-0 items-center justify-between rounded-lg border border-white/5 bg-black/40 px-3 py-3 transition-all duration-200 hover:border-white/10 hover:bg-black/60 sm:px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                key={tech}
                transition={{ duration: 0.2, delay: index * 0.03 }}
              >
                {/* Number and Name */}
                <div className="flex items-center gap-3">
                  <span className="w-6 font-mono text-white/30 text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate font-medium text-sm text-white/90">
                    {tech}
                  </span>
                </div>

                {/* Status Indicator */}
                {/* <div className="relative flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#3fb950]" />
                  <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#3fb950] animate-ping opacity-75" />
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
