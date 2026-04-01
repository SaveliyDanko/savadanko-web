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
  return (
    <Section id="core-expertise" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="pointer-events-none absolute left-10 top-24 h-40 w-40 rounded-full bg-[#6884ff]/8 blur-[110px]" />
      <div className="pointer-events-none absolute right-10 top-36 h-56 w-56 rounded-full bg-primary/8 blur-[130px]" />

      <div className="relative">
        <div className="max-w-lg">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-gradient-to-r from-[#6f87ff] to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6f87ff]">
              Skills
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[56px]">
            Core Expertise
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-[#656c89] sm:text-base">
            The domains and disciplines I work across
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {coreExpertiseItems.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.article
                key={item.id}
                className="group min-h-[152px] rounded-[24px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(8,10,19,0.78),rgba(4,5,11,0.96))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-colors duration-300 hover:border-[#5f77ff]/16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[15px] border border-[#5f77ff]/18 bg-[#11182f]/70 text-[#6f87ff] shadow-[0_10px_30px_rgba(61,89,255,0.12)]">
                    <Icon size={18} strokeWidth={1.9} />
                  </div>
                  <span className="pt-0.5 font-mono text-[11px] tracking-[0.18em] text-white/10">
                    {item.id}
                  </span>
                </div>

                <h3 className="mt-6 text-[18px] font-semibold tracking-tight text-white/92 sm:text-[19px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#646b85]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
