"use client";

import {
  LucideArrowUpDown,
  LucideExternalLink,
  LucideHome,
  LucideSearch,
  LucideStar,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import ShinyText from "@/components/ShinyText";
import repoData from "@/components/sections/repo.json";

interface Repository {
  description: string | null;
  full_name: string;
  html_url: string;
  language: string | null;
  name: string;
  stargazers_count: number;
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"stars" | "name">("stars");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredAndSortedRepos = useMemo(() => {
    const filtered = (repoData as Repository[]).filter((repo) => {
      const query = searchQuery.toLowerCase();
      return (
        repo.name.toLowerCase().includes(query) ||
        repo.description?.toLowerCase().includes(query) ||
        repo.language?.toLowerCase().includes(query)
      );
    });

    filtered.sort((a, b) => {
      if (sortBy === "stars") {
        return sortOrder === "desc"
          ? b.stargazers_count - a.stargazers_count
          : a.stargazers_count - b.stargazers_count;
      }
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === "desc") {
        return nameB.localeCompare(nameA);
      }
      return nameA.localeCompare(nameB);
    });

    return filtered;
  }, [searchQuery, sortBy, sortOrder]);

  const toggleSort = (type: "stars" | "name") => {
    if (sortBy === type) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(type);
      setSortOrder("desc");
    }
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "text-yellow-400",
      TypeScript: "text-blue-500",
      Python: "text-blue-400",
      Java: "text-orange-500",
      Go: "text-cyan-400",
      Rust: "text-orange-300",
      C: "text-gray-400",
      "C++": "text-pink-400",
      "C#": "text-green-500",
      HTML: "text-orange-600",
      CSS: "text-purple-500",
      Shell: "text-green-400",
      Bash: "text-green-400",
      PHP: "text-indigo-400",
      Ruby: "text-red-500",
      Swift: "text-orange-400",
      Kotlin: "text-purple-400",
      Dart: "text-teal-400",
      Scala: "text-red-600",
      ObjectiveC: "text-blue-400",
      Haskell: "text-purple-600",
      Elixir: "text-purple-500",
      Lua: "text-blue-700",
      Groovy: "text-sky-500",
      PowerShell: "text-blue-600",
      Dockerfile: "text-blue-300",
      Makefile: "text-green-600",
      JSON: "text-gray-300",
      YAML: "text-red-500",
      Markdown: "text-blue-300",
      Vue: "text-green-500",
      Svelte: "text-orange-500",
      "Jupyter Notebook": "text-orange-400",
    };

    return colors[language || ""] || "text-gray-400"; // fallback
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
        <div className="dot-grid opacity-20" />
      </div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <a
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              href="/"
            >
              <LucideHome className="h-4 w-4" />
              Back to Home
            </a>

            <div className="mb-2 font-mono text-[#3fb950] text-sm uppercase tracking-widest">
              All Repositories
            </div>

            <ShinyText
              className="font-semibold text-3xl text-white tracking-tight sm:text-4xl md:text-5xl"
              color="#b5b5b5"
              delay={0}
              direction="left"
              shineColor="#ffffff"
              speed={2}
              spread={120}
              text="Complete Project Collection"
            />

            <p className="mt-4 max-w-2xl text-lg text-white/60">
              {repoData.length} public repositories on GitHub
            </p>
          </motion.div>

          {/* Search and Sort Controls */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Search */}
            <div className="relative w-full flex-1 sm:max-w-md">
              <LucideSearch className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pr-4 pl-10 text-sm text-white placeholder-white/40 transition-all focus:border-white/20 focus:bg-white/10 focus:outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                type="text"
                value={searchQuery}
              />
            </div>

            {/* Sort Buttons */}
            <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:flex-nowrap">
              <button
                className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-all sm:min-h-0 sm:flex-none ${
                  sortBy === "stars"
                    ? "border-[#3fb950]/30 bg-[#3fb950]/10 text-[#3fb950]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10"
                }`}
                onClick={() => toggleSort("stars")}
                type="button"
              >
                <LucideStar className="h-4 w-4" />
                Stars
                <LucideArrowUpDown className="h-3 w-3" />
              </button>
              <button
                className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-all sm:min-h-0 sm:flex-none ${
                  sortBy === "name"
                    ? "border-[#3fb950]/30 bg-[#3fb950]/10 text-[#3fb950]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10"
                }`}
                onClick={() => toggleSort("name")}
                type="button"
              >
                Name
                <LucideArrowUpDown className="h-3 w-3" />
              </button>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            animate={{ opacity: 1 }}
            className="mb-4 text-sm text-white/40"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Showing {filteredAndSortedRepos.length}{" "}
            {filteredAndSortedRepos.length === 1 ? "project" : "projects"}
          </motion.div>

          {/* Projects Table/Cards */}
          {filteredAndSortedRepos.length === 0 ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] py-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <LucideSearch className="mb-4 h-12 w-12 text-white/20" />
              <h3 className="mb-2 font-semibold text-lg text-white">
                No projects found
              </h3>
              <p className="text-sm text-white/60">
                Try adjusting your search query
              </p>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {/* Sticky Header */}
              <div className="sticky top-0 z-10 hidden rounded-lg border border-white/10 bg-black/80 px-6 py-3 backdrop-blur-xl md:grid md:grid-cols-12 md:gap-4">
                <div className="col-span-4 font-semibold text-white/60 text-xs uppercase tracking-wider">
                  Project
                </div>
                <div className="col-span-5 font-semibold text-white/60 text-xs uppercase tracking-wider">
                  Description
                </div>
                <div className="col-span-2 font-semibold text-white/60 text-xs uppercase tracking-wider">
                  Language
                </div>
                <div className="col-span-1 text-right font-semibold text-white/60 text-xs uppercase tracking-wider">
                  Stars
                </div>
              </div>

              {/* Project Rows */}
              {filteredAndSortedRepos.map((repo, index) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/20 hover:bg-white/[0.05] sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  key={repo.full_name}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <div className="grid gap-4 md:grid-cols-12 md:items-center">
                    {/* Project Name */}
                    <div className="col-span-12 md:col-span-4">
                      <a
                        className="flex items-center gap-2 font-semibold text-base text-white transition-colors hover:text-[#3fb950]"
                        href={repo.html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {/* <LucideGithub className="h-5 w-5 flex-shrink-0" /> */}
                        <span className="truncate">{repo.name}</span>
                        <LucideExternalLink className="h-3 w-3 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                      <div className="mt-1 break-all text-white/40 text-xs">
                        {repo.full_name}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="col-span-12 md:col-span-5">
                      <p
                        className="break-words text-sm text-white/60"
                        title={repo.description || ""}
                      >
                        {repo.description}
                      </p>
                    </div>

                    {/* Language Badge */}
                    <div className="col-span-6 md:col-span-2">
                      {repo.language ? (
                        // <span
                        //   className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${getLanguageColor(
                        //     repo.language
                        //   )}`}
                        // >
                        <span className="inline-flex items-center px-2.5 py-1 font-medium text-xs">
                          <svg
                            aria-hidden="true"
                            className={`mr-2 ${getLanguageColor(repo.language)}`}
                            data-view-component="true"
                            height="16"
                            version="1.1"
                            viewBox="0 0 16 16"
                            width="16"
                          >
                            <path
                              d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
                              fill="currentColor"
                            />
                          </svg>
                          {repo.language}
                        </span>
                      ) : (
                        <span className="ml-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-medium text-white/40 text-xs">
                          N/A
                        </span>
                      )}
                    </div>

                    {/* Stars */}
                    <div className="col-span-6 text-right md:col-span-1">
                      <div className="inline-flex items-center gap-1.5 font-semibold text-sm text-white">
                        <LucideStar className="h-4 w-4 text-yellow-500" />
                        {repo.stargazers_count}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
