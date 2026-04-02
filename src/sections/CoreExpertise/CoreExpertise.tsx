import {
  Cloud,
  Code2,
  Cog,
  Cpu,
  Layers,
  Link2,
  Server,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import {
  coreExpertiseItems,
  type CoreExpertiseIcon,
} from "@/data/coreExpertise";
import { useTranslation } from "@/app/providers";

const iconMap = {
  layers: Layers,
  cloud: Cloud,
  server: Server,
  shield: Shield,
  cpu: Cpu,
  link2: Link2,
  cog: Cog,
  code2: Code2,
} satisfies Record<CoreExpertiseIcon, typeof Layers>;

export function CoreExpertise() {
  const t = useTranslation();

  return (
    <Section id="core-expertise" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="glow pointer-events-none absolute left-10 top-24 h-40 w-40 rounded-full bg-section-label/8 blur-[110px]" />
      <div className="glow pointer-events-none absolute right-10 top-36 h-56 w-56 rounded-full bg-primary/8 blur-[130px]" />

      <div className="relative">
        <div className="max-w-lg">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-gradient-to-r from-section-label to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-section-label">
              {t.coreExpertise.label}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-[56px]">
            {t.coreExpertise.title}
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-body sm:text-base">
            {t.coreExpertise.description}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {coreExpertiseItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            const text = t.coreExpertise.items[index];

            return (
              <motion.article
                key={item.id}
                className="group min-h-[152px] rounded-[24px] border border-card-border bg-card-gradient px-5 py-5 shadow-card transition-colors duration-300 hover:border-card-hover"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[15px] border border-section-label/16 bg-section-label/10 text-section-label shadow-[0_10px_24px_rgba(99,102,241,0.12)] backdrop-blur-sm">
                    <Icon size={18} strokeWidth={1.9} />
                  </div>
                  <span className="pt-0.5 font-mono text-[11px] tracking-[0.18em] text-heading/10">
                    {item.id}
                  </span>
                </div>

                <h3 className="mt-6 text-[18px] font-semibold tracking-tight text-heading/92 sm:text-[19px]">
                  {text?.title ?? item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-body">
                  {text?.description ?? item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
