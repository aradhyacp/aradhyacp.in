"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import MacOSCard from "@/components/ui/MacOSCard";
import SocialLinks from "@/components/ui/SocialLinks";
import { LucideMail } from "lucide-react";

type GithubProfile = {
  login: string;
  name: string | null;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
};

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Hero() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      try {
        const res = await fetch("https://api.github.com/users/aradhyacp");
        if (!res.ok) throw new Error("Failed to load profile");
        const data: GithubProfile = await res.json();
        if (isMounted) setProfile(data);
      } catch {
        if (isMounted) setProfile(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  const age = new Date().getFullYear() - 2005;

  return (
    <section className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-20">
      <div className="flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Name and Age */}
          <div className="mb-4 flex items-center gap-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Aradhya CP
            </h1>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-white/60">
              {age}
            </span>
          </div>

          {/* Role Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            <span className="rounded-full border border-[#238636]/30 bg-[#238636]/10 px-4 py-1.5 text-sm font-medium text-[#3fb950]">
              Full Stack Developer
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70">
              Builder
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70">
              Open Source
            </span>
          </motion.div>

          {/* One-liner Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 max-w-lg text-lg leading-relaxed text-white/60"
          >
            Self-taught engineer who builds things that bother him until they don&apos;t.
            Building AI-integrated apps and contributing to open source.
          </motion.p>

          {/* Social Links + Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <SocialLinks />
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-white/90"
            >
              <DownloadIcon />
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <MacOSCard title="GitHub Profile">
            <div className="flex flex-col gap-5">
              {/* Avatar + Info */}
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/20 bg-white/10">
                  {profile?.avatar_url ? (
                    <img
                      src="/pfp.webp"
                      alt="Aradhya CP"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xl text-white/40">
                      A
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full ring-2 ring-[#238636]/50" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-white">
                      @{profile?.login ?? "aradhyacp"}
                    </span>
                    <span className="rounded border-2 border-[#8957e5] rounded-2xl px-1.5 py-0.5 text-[10px] font-bold uppercase text-[#ab7df8]">
                      PRO
                    </span>
                  </div>
                  <div className="text-sm text-white/60">
                    {profile?.name ?? "Aradhya CP"}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="font-semibold text-white">
                    {loading ? "–" : profile?.followers ?? 13}
                  </span>
                  <span className="ml-1 text-white/50">followers</span>
                </div>
                <div>
                  <span className="font-semibold text-white">
                    {loading ? "–" : profile?.following ?? 13}
                  </span>
                  <span className="ml-1 text-white/50">following</span>
                </div>
              </div>

              {/* Bio */}
              {profile?.bio && (
                <p className="text-sm leading-relaxed text-white/60">
                  {profile.bio}
                </p>
              )}

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-white/50">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Bengaluru, India</span>
              </div>

              {/* GitHub Link */}
              <a
                href={profile?.html_url ?? "https://github.com/aradhyacp"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white font-bold"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.19 6.839 9.515.5.092.682-.218.682-.484 0-.236-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.03-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.376.203 2.393.1 2.646.64.7 1.03 1.594 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
                </svg>
                Follow on GitHub
              </a>
              <div className="flex gap-2 text-white/70 font-medium">
                <span className="flex items-center gap-1"><LucideMail className="w-3.5 h-3.5 shrink-0"/>Mail: </span>
                <a className="hover:underline" href="mailto:boss@aradhyacp.in">
                  boss@aradhyacp.in
                </a>
              </div>
            </div>
          </MacOSCard>
        </motion.div>
      </div>
    </section>
  );
}
