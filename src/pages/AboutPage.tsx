import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import {
  aboutPageHero,
  aboutPageIntro,
  aboutPagePrinciples,
  aboutPageResumeButtons,
} from "@/data/aboutPage";

function PortraitCard() {
  return (
    <div className="relative h-[92px] w-[92px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111522] shadow-[0_14px_36px_rgba(0,0,0,0.45)]">
      <svg viewBox="0 0 92 92" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="aboutPortraitSky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#9fb7c9" />
            <stop offset="58%" stopColor="#6e879a" />
            <stop offset="100%" stopColor="#4a556b" />
          </linearGradient>
          <linearGradient id="aboutPortraitShirt" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f5f1ef" />
            <stop offset="100%" stopColor="#c8c6ca" />
          </linearGradient>
        </defs>
        <rect width="92" height="92" rx="20" fill="url(#aboutPortraitSky)" />
        <rect y="56" width="92" height="36" fill="#27313f" />
        <circle cx="45" cy="36" r="12.5" fill="#b96f4f" />
        <path d="M30 80c4-15.2 12.2-22.8 23.8-22.8 11.4 0 18.7 7.6 22.2 22.8H30Z" fill="url(#aboutPortraitShirt)" />
        <path d="M36.5 34.5c1.2-7 5.1-11.1 10.8-11.1 6.1 0 10.5 4.7 10.9 11.7-2.2-1-3.9-2.3-5.3-3.8-4.4 3.3-10.2 4.4-16.4 3.2Z" fill="#201a19" />
        <path d="M37.8 49.3c2.6 2.2 5.2 3.3 8.1 3.3 3.3 0 6.4-1.3 9.3-3.9" stroke="#9a563c" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="69" cy="18" r="14" fill="rgba(255,255,255,0.12)" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%,rgba(0,0,0,0.12))]" />
    </div>
  );
}

export function AboutPage() {
  return (
    <Section className="relative min-h-[calc(100vh-64px)] overflow-hidden py-18 sm:py-22 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22346a] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(46,74,166,0.12),transparent_68%)] blur-3xl" />

      <div className="mx-auto max-w-[1008px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-[48px] font-bold tracking-[-0.04em] text-white sm:text-[60px] lg:text-[64px]">
            {aboutPageHero.title}
          </h1>
          <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-[#6e748b] sm:text-[18px]">
            {aboutPageHero.subtitle}
          </p>
          <div className="mt-10 h-px w-full bg-[linear-gradient(90deg,rgba(62,94,186,0.68),rgba(31,39,70,0.9)_22%,rgba(255,255,255,0.04)_72%,transparent)]" />
          <div className="mt-2 h-7 w-full bg-[linear-gradient(180deg,rgba(6,10,21,0.62),rgba(4,7,14,0))]" />
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-[96px_minmax(0,1fr)] md:items-start md:gap-10"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <PortraitCard />

          <div className="max-w-[820px] space-y-6 pt-1 text-[17px] leading-8 text-[#666d85]">
            {aboutPageIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="flex flex-wrap gap-3 pt-1">
              {aboutPageResumeButtons.map((button) => (
                <button
                  key={button.label}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-[linear-gradient(180deg,rgba(17,20,31,0.92),rgba(10,12,20,0.96))] px-4 py-2 text-[12px] font-semibold tracking-[0.01em] text-[#d8dbe5] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors duration-300 hover:border-[#25386f] hover:text-white"
                >
                  <Download size={13} strokeWidth={2} />
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-28"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <h2 className="text-[42px] font-bold tracking-[-0.04em] text-white sm:text-[52px] lg:text-[58px]">
            How I Think About Architecture
          </h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {aboutPagePrinciples.map((principle) => (
              <article
                key={principle.title}
                className={[
                  "rounded-[22px] border px-5 py-5 sm:px-6 sm:py-6",
                  principle.featured
                    ? "border-[#20356b] bg-[linear-gradient(180deg,rgba(7,10,20,0.98),rgba(5,8,16,0.98))] shadow-[inset_0_0_0_1px_rgba(58,92,184,0.08),0_0_0_1px_rgba(25,37,77,0.18)]"
                    : "border-white/[0.04] bg-[linear-gradient(180deg,rgba(5,7,14,0.96),rgba(4,6,12,0.98))]",
                ].join(" ")}
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white/92">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-[95%] text-[15px] leading-7 text-[#636b84] sm:text-[16px]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
