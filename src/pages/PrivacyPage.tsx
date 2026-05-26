import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { useTranslation } from "@/app/providers";

export function PrivacyPage() {
  const t = useTranslation();
  const p = t.privacy;

  return (
    <Section className="relative min-h-[calc(100vh-64px)] overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-section-label/40 to-transparent" />

      <div className="mx-auto max-w-[800px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.18em] text-section-label">
            {p.badge}
          </p>
          <h1 className="text-[40px] font-bold tracking-[-0.04em] text-heading sm:text-[52px]">
            {p.title}
          </h1>
          <p className="mt-4 text-[14px] text-body-secondary">{p.edition}</p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-section-label/50 via-section-label/20 to-transparent" />
        </motion.div>

        <motion.div
          className="mt-10 space-y-10 text-[15px] leading-8 text-body"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {p.sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-3 text-[18px] font-semibold tracking-[-0.02em] text-heading/92">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, j) => (
                <p key={j} className="mb-3 last:mb-0">
                  {para}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-3 space-y-1.5 pl-5">
                  {section.list.map((item, k) => (
                    <li key={k} className="list-disc text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
