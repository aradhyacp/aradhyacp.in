"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { LucideCpu, LucideDatabase, LucidePanelsTopLeft, LucideServer, LucideSquareTerminal, LucideTerminal, LucideWrench } from "lucide-react";

interface TechCategory {
  id: string;
  label: string;
  icon?: any;
  items: string[];
}

interface TechArsenalProps {
  className?: string;
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <LucidePanelsTopLeft className="w-3.5 h-3.5 shrink-0 text-white/70" />,
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
    icon: <LucideServer className="w-3.5 h-3.5 shrink-0 text-white/70" />,
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
    icon: <LucideCpu className="w-3.5 h-3.5 shrink-0 text-white/70" />,
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
    icon: <LucideWrench className="w-3.5 h-3.5 shrink-0 text-white/70" />,
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
    icon: <LucideTerminal className="w-3.5 h-3.5 shrink-0 text-white/70" />,
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Rust",
      "C++",
      "SQL",
    ],
  },
  {
    id: "data",
    label: "Data",
    icon: <LucideDatabase className="w-3.5 h-3.5 shrink-0 text-white/70" />,
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
    <div className={cn("grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-12", className)}>
      {/* Left Section */}
      <div className="space-y-6">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10">
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
        <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Technical<br />Arsenal
        </h3>

        {/* Description */}
        <p className="text-white/60 text-base leading-relaxed">
          I constantly explore new technologies to find the best tools for solving complex problems. My current stack focuses on scalable web architecture and machine learning pipelines.
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
        <div className="flex flex-wrap items-center gap-6  px-4 pt-3 justify-around pb-0 rounded-lg border border-white/10 bg-white/[0.02] p-4 text-center sm:justify-around sm:gap-4 sm:px-4 sm:pb-0 sm:p-4">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "relative pb-2 sm:pb-3 text-xs sm:text-sm font-medium transition-all duration-300",
                activeTab === category.id
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              )}
            >
              <span className="flex items-center gap-2">
                {category.icon && <span className="text-xs opacity-60">{category.icon}</span>}
                {category.label}
              </span>
              {activeTab === category.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tech List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {activeCategory?.items.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="group relative flex min-w-0 items-center justify-between rounded-lg border border-white/5 bg-black/40 px-3 py-3 transition-all duration-200 hover:border-white/10 hover:bg-black/60 sm:px-4"
              >
                {/* Number and Name */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/30 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate text-sm font-medium text-white/90">
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
