import {
  ArrowRight,
  GitBranch,
  Link2,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NAV_LINKS } from "@/constants/navigation";
import { SOCIAL_LINKS } from "@/constants/socials";

const socialIconMap: Record<string, LucideIcon> = {
  github: GitBranch,
  linkedin: Link2,
  send: Send,
};

const contactLinks = [
  { label: "Send a message", href: "mailto:your@email.com", icon: Mail },
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.find((link) => link.label === "LinkedIn")?.url ?? "#",
    icon: Link2,
  },
  {
    label: "GitHub",
    href: SOCIAL_LINKS.find((link) => link.label === "GitHub")?.url ?? "#",
    icon: GitBranch,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const hideHeroCta = pathname === "/about" || pathname === "/work" || pathname === "/blog";

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/[0.03] bg-surface pt-10 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
      <div className="pointer-events-none absolute right-24 top-28 h-56 w-56 rounded-full bg-[#6280ff]/8 blur-[150px]" />

      <div className="mx-auto max-w-6xl px-6 pb-10">
        {!hideHeroCta ? (
          <div className="rounded-[32px] border border-white/[0.05] bg-[radial-gradient(circle_at_top,rgba(89,109,255,0.12),transparent_36%),linear-gradient(180deg,rgba(11,13,24,0.96),rgba(6,7,14,0.98))] px-6 py-14 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#4f67d8]/28 bg-[#11182f]/80 px-4 py-2 font-mono text-[12px] tracking-[0.08em] text-[#8ea2ff]">
                <Sparkles size={12} strokeWidth={1.9} />
                Available for opportunities
              </span>

              <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.06]">
                Let's build something
                <span className="bg-gradient-to-r from-white via-[#d9c6ff] to-primary bg-clip-text text-transparent">
                  {" "}together
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#707894] sm:text-base">
                Looking for a frontend developer who cares about systems, motion,
                and polished product experiences? I'd love to connect.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="mailto:your@email.com"
                  className="inline-flex min-w-[174px] items-center justify-center gap-2 rounded-full bg-[#6f8dfd] px-6 py-3.5 text-sm font-semibold text-[#0a0d18] shadow-[0_10px_28px_rgba(111,141,253,0.38)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Get in Touch
                </a>
                <a
                  href={SOCIAL_LINKS.find((link) => link.label === "LinkedIn")?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[142px] items-center justify-center gap-2 rounded-full border border-[#18365d] bg-[#0b1018]/90 px-6 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-[#2c5a93] hover:text-white"
                >
                  LinkedIn
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ) : null}

        <div className={hideHeroCta ? "pt-4 sm:pt-6" : "mt-20 border-t border-white/[0.04] pt-12"}>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr_0.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6f8dfd] text-[11px] font-bold text-[#0b1020] shadow-[0_10px_25px_rgba(111,141,253,0.28)]">
                  SD
                </span>
                <span className="text-base font-semibold text-white/90">
                  savadanko.dev
                </span>
              </div>

              <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#69718d]">
                Frontend developer building across responsive interfaces,
                product systems, and interactive web experiences.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIconMap[link.icon] ?? GitBranch;

                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.05] bg-[#0b1018]/95 text-[#69718d] transition-colors duration-300 hover:border-[#28456f] hover:text-[#8ea2ff]"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6f87ff]">
                Pages
              </p>
              <div className="mt-5 space-y-3 text-[15px] text-[#7a829d]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6f87ff]">
                Contact
              </p>
              <div className="mt-5 space-y-3 text-[15px] text-[#7a829d]">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
                    >
                      <Icon size={14} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.04] pt-6 text-sm text-[#4f5672] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {year} Sava Danko. All rights reserved.</p>
            <p>Built with React + Vite + Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
