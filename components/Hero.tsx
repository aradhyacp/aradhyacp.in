import { useEffect, useState } from "react";

type GithubProfile = {
  login: string;
  name: string | null;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
};

const Hero = () => {
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

  return (
    <div className="pointer-events-none relative z-10 flex h-full w-full items-center justify-center px-6 py-10">
      <div className="flex w-full max-w-6xl flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="left-box pointer-events-auto text-white">
          <div className="text-xl font-semibold tracking-[0.25em] text-white/70">
            ARADHYACP.IN
          </div>
          <div className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            From Code to Impact
          </div>
          <div className="mt-3 text-lg text-white/80">
            Design • Develop • Deploy
          </div>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Coming Soon
          </div>
        </div>

        <div className="right-box pointer-events-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 text-xs text-white/60">GitHub Profile</div>
            </div>

            <div className="flex flex-col items-start gap-4 px-6 py-6 text-white">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-white/20 bg-white/10">
                  {profile?.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt="GitHub avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-white/60">
                      ?
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-lg font-semibold">
                    @{profile?.login ?? "aradhyacp"}
                  </div>
                  <div className="text-sm text-white/70">
                    {profile?.name ?? "Aradhya CP"}
                  </div>
                </div>
              </div>

              <div className="text-sm text-white/70">
                {loading
                  ? "Loading profile…"
                  : `${profile?.followers ?? 0} followers • ${profile?.following ?? 0} following`}
              </div>

              <a
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/20"
                href={profile?.html_url ?? "https://github.com/aradhyacp"}
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.02c0 4.428 2.865 8.19 6.839 9.515.5.092.682-.218.682-.484 0-.236-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.952 0-1.094.39-1.988 1.03-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.506.338c1.909-1.296 2.748-1.026 2.748-1.026.546 1.376.203 2.393.1 2.646.64.7 1.03 1.594 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.02C22 6.484 17.523 2 12 2Z" />
                </svg>
                Follow on GitHub
              </a>
              <div className="flex gap-2 text-white/70 ">
                <span>Contact me: </span>
                <a className="hover:underline" href="mailto:boss@aradhyacp.in">
                  boss@aradhyacp.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
