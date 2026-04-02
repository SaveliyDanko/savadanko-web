import { useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { aboutPageAssets, aboutPageEducation } from "@/data/aboutPage";
import { useTranslation } from "@/app/providers";

function PortraitCard() {
  const t = useTranslation();
  const [hasPhotoError, setHasPhotoError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="glow pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(111,135,255,0.22),transparent_60%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-card-border bg-card-gradient shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="aspect-[4/5]">
          {hasPhotoError ? (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(111,135,255,0.22),rgba(10,14,26,0.96)_58%)]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl font-semibold tracking-[0.12em] text-heading/90 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                SD
              </div>
            </div>
          ) : (
            <img
              src={aboutPageAssets.photoSrc}
              alt={t.aboutPage.photoAlt}
              className="h-full w-full object-cover object-[center_24%]"
              onError={() => setHasPhotoError(true)}
            />
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%,rgba(4,6,12,0.18)_65%,rgba(4,6,12,0.72)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6">
          <div className="h-px w-20 bg-gradient-to-r from-white/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  const t = useTranslation();

  return (
    <Section className="relative min-h-[calc(100vh-64px)] overflow-hidden py-18 sm:py-22 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-section-label/40 to-transparent" />
      <div className="glow pointer-events-none absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(46,74,166,0.12),transparent_68%)] blur-3xl" />

      <div className="mx-auto max-w-[1008px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-[48px] font-bold tracking-[-0.04em] text-heading sm:text-[60px] lg:text-[64px]">
            {t.aboutPage.title}
          </h1>
          <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-body sm:text-[18px]">
            {t.aboutPage.subtitle}
          </p>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-section-label/60 via-section-label/20 to-transparent" />
          <div className="mt-2 h-7 w-full bg-gradient-to-b from-surface/60 to-transparent" />
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 lg:grid-cols-[minmax(240px,280px)_minmax(0,1fr)] lg:items-start lg:gap-12"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <PortraitCard />

          <div className="max-w-[820px] space-y-6 pt-1 text-[17px] leading-8 text-body">
            {t.aboutPage.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="rounded-[24px] border border-card-border bg-card-gradient p-5 shadow-card sm:p-6">
              <div className="flex flex-col gap-5 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:grid-rows-[auto_1fr] sm:gap-x-6 sm:gap-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-section-label sm:col-start-1 sm:row-start-1">
                  {t.aboutPage.resumeLabel}
                </p>
                <p className="max-w-[520px] text-[15px] leading-7 text-body sm:col-start-1 sm:row-start-2 sm:self-center">
                  {t.aboutPage.resumeDescription}
                </p>
                <a
                  href={aboutPageAssets.resumeSrc}
                  download={aboutPageAssets.resumeDownloadName}
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5 sm:col-start-2 sm:row-[1/3] sm:self-center"
                >
                  <Download size={15} strokeWidth={2} />
                  {t.aboutPage.resumeDownload}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-28"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <h2 className="text-[42px] font-bold tracking-[-0.04em] text-heading sm:text-[52px] lg:text-[58px]">
            {t.aboutPage.principlesTitle}
          </h2>

          <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {t.aboutPage.principles.map((principle) => (
              <motion.article
                key={principle.title}
                className="group rounded-[22px] border border-card-border bg-card-gradient px-5 py-5 shadow-card transition-colors duration-300 hover:border-section-label/35 hover:shadow-[0_16px_40px_rgba(79,103,216,0.18)] sm:px-6 sm:py-6"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-heading/92 transition-colors duration-300 group-hover:text-section-label">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-[95%] text-[15px] leading-7 text-body sm:text-[16px]">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-28 pb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          <h2 className="text-[42px] font-bold tracking-[-0.04em] text-heading sm:text-[52px] lg:text-[58px]">
            {t.aboutPage.educationTitle}
          </h2>

          <div className="mt-12 space-y-8">
            {aboutPageEducation.map((item) => (
              <article key={item.degree}>
                <h3 className="text-[17px] font-medium tracking-[-0.02em] text-heading/92 sm:text-[18px]">
                  {item.degree}
                </h3>
                <p className="mt-1 text-[15px] text-body sm:text-[16px]">
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
