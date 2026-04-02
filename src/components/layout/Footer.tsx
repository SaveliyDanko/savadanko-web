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
import { useTranslation } from "@/app/providers";

const socialIconMap: Record<string, LucideIcon> = {
  github: GitBranch,
  send: Send,
};

export function Footer() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const t = useTranslation();
  const hideHeroCta =
    pathname === "/about" || pathname === "/work" || pathname === "/blog";

  const contactLinks = [
    { label: t.footer.sendMessage, href: "mailto:dankosaveliy.m@gmail.com", icon: Mail },
    {
      label: "GitHub",
      href:
        SOCIAL_LINKS.find((link) => link.label === "GitHub")?.url ?? "#",
      icon: GitBranch,
    },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-card-border bg-surface pt-10 text-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="glow pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
      <div className="glow pointer-events-none absolute right-24 top-28 h-56 w-56 rounded-full bg-section-label/8 blur-[150px]" />

      <div className="mx-auto max-w-6xl px-6 pb-10">
        {!hideHeroCta ? (
          <div className="rounded-[32px] border border-card-border bg-footer-cta px-6 py-14 text-center shadow-card sm:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-section-label/28 bg-section-label/8 px-4 py-2 font-mono text-[12px] tracking-[0.08em] text-section-label">
                <Sparkles size={12} strokeWidth={1.9} />
                {t.footer.availableBadge}
              </span>

              <h2 className="mt-8 text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-[60px] lg:leading-[1.06]">
                {t.footer.ctaTitle}
                <span className="bg-gradient-to-r from-heading via-primary-light to-primary bg-clip-text text-transparent">
                  {t.footer.ctaTitleAccent}
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-body sm:text-base">
                {t.footer.ctaDescription}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="mailto:dankosaveliy.m@gmail.com"
                  className="inline-flex min-w-[174px] items-center justify-center gap-2 rounded-full bg-[#6f8dfd] px-6 py-3.5 text-sm font-semibold text-[#0a0d18] shadow-[0_10px_28px_rgba(111,141,253,0.38)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  {t.footer.ctaPrimary}
                </a>
              </div>
            </div>
          </div>
        ) : null}

        <div
          className={
            hideHeroCta
              ? "pt-4 sm:pt-6"
              : "mt-20 border-t border-card-border pt-12"
          }
        >
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr_0.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6f8dfd] text-[11px] font-bold text-[#0b1020] shadow-[0_10px_25px_rgba(111,141,253,0.28)]">
                  SD
                </span>
                <span className="text-base font-semibold text-heading/90">
                  savadanko.dev
                </span>
              </div>

              <p className="mt-5 max-w-sm text-[15px] leading-7 text-body">
                {t.footer.footerDescription}
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
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-surface/95 text-body transition-colors duration-300 hover:border-section-label/30 hover:text-section-label"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-section-label">
                {t.footer.pagesLabel}
              </p>
              <div className="mt-5 space-y-3 text-[15px] text-body">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="block transition-colors duration-300 hover:text-heading"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-section-label">
                {t.footer.contactLabel}
              </p>
              <div className="mt-5 space-y-3 text-[15px] text-body">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-2 transition-colors duration-300 hover:text-heading"
                    >
                      <Icon size={14} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-card-border pt-6 text-sm text-body-secondary sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {t.footer.copyright}
            </p>
            <p>{t.footer.builtWith}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
