import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import {
  aboutPageCertifications,
  aboutPageEducation,
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

function ExternalMiniIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 4h6v6M12 4 7 9"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5V11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertificationBadge({ code }: { code: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#24418f]/60 bg-[radial-gradient(circle_at_top,rgba(97,137,255,0.28),rgba(18,28,61,0.96)_62%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <svg viewBox="0 0 44 44" className="h-9 w-9" aria-hidden="true">
        <path
          d="M22 3 34.5 7.4v11.3c0 8.4-5.1 15.5-12.5 18.3C14.6 34.2 9.5 27.1 9.5 18.7V7.4L22 3Z"
          fill="#f3f7ff"
        />
        <path
          d="M22 6.5 31.6 9.8v8.6c0 6.4-3.8 11.9-9.6 14.3-5.8-2.4-9.6-7.9-9.6-14.3V9.8L22 6.5Z"
          fill="#2560FF"
        />
        <path d="M14.2 19.4h15.6" stroke="#ffffff" strokeWidth="1.4" />
        <path d="M17 23.6h10" stroke="#ffffff" strokeWidth="1.2" />
        <path d="M22 11.5 23.4 14.3 26.5 14.7 24.2 16.8 24.8 19.8 22 18.3 19.2 19.8 19.8 16.8 17.5 14.7 20.6 14.3 22 11.5Z" fill="#ffffff" />
      </svg>
      <span className="sr-only">{code}</span>
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

        <motion.div
          className="mt-28"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          <h2 className="text-[42px] font-bold tracking-[-0.04em] text-white sm:text-[52px] lg:text-[58px]">
            Certifications
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aboutPageCertifications.map((certification) => (
              <article
                key={certification.code + certification.title}
                className="rounded-[22px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(5,7,14,0.96),rgba(4,6,12,0.98))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
              >
                <div className="flex items-start gap-3">
                  <CertificationBadge code={certification.code} />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-[12px] tracking-[0.06em] text-[#5e82ff]">
                        {certification.code}
                      </span>
                      <span className="mt-0.5 text-[#59617c]">
                        <ExternalMiniIcon />
                      </span>
                    </div>

                    <h3 className="mt-2 text-[15px] font-medium leading-6 text-white/92">
                      {certification.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-[#59617c]">
                      {certification.issuer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-28 pb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <h2 className="text-[42px] font-bold tracking-[-0.04em] text-white sm:text-[52px] lg:text-[58px]">
            Education
          </h2>

          <div className="mt-12 space-y-8">
            {aboutPageEducation.map((item) => (
              <article key={item.degree}>
                <h3 className="text-[17px] font-medium tracking-[-0.02em] text-white/92 sm:text-[18px]">
                  {item.degree}
                </h3>
                <p className="mt-1 text-[15px] text-[#59617c] sm:text-[16px]">
                  {item.school} · {item.years}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
