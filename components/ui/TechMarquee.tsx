"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface TechItem {
  name: string;
  icon: string;
  invert?: boolean;
}

const techStack: TechItem[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

interface TechMarqueeProps {
  className?: string;
  reverse?: boolean;
}

export default function TechMarquee({ className, reverse = false }: TechMarqueeProps) {
  const items = [...techStack, ...techStack];

  return (
    <div className={cn("relative overflow-hidden py-8", className)}>
      <div className="vignette-x">
        <div
          className={cn(
            "flex gap-16 w-max",
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          )}
          style={{ animationDuration: "40s" }}
        >
          {items.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className="relative h-12 w-12 md:h-16 md:w-16 rounded-xl bg-white/5 p-3 transition-all group-hover:bg-white/10 group-hover:shadow-lg">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className={cn(
                    "h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity",
                    tech.invert && "invert"
                  )}
                  height={40}
                  width={40}
                  sizes="40px"
                />
              </div>
              <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
