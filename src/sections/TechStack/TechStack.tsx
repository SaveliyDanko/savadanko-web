import { useState } from "react";
import {
  Bot,
  Boxes,
  Braces,
  ChevronDown,
  ChevronUp,
  Cloud,
  CloudCog,
  Container,
  Database,
  GitBranch,
  Hexagon,
  Server,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout";
import { TechnologyBadge } from "@/components/ui";
import {
  marqueeRows,
  techStackCategories,
  type TechBadge,
} from "@/data/skills";
import { useTranslation } from "@/app/providers";

const iconMap: Record<TechBadge["icon"], LucideIcon> = {
  braces: Braces,
  hexagon: Hexagon,
  server: Server,
  aws: Cloud,
  cloud: CloudCog,
  docker: Container,
  boxes: Boxes,
  helm: Boxes,
  database: Database,
  bot: Bot,
  redis: Database,
  shield: Shield,
  code: Braces,
  python: Bot,
  sql: Database,
  git: GitBranch,
};

export function TechStack() {
  const [showAll, setShowAll] = useState(false);
  const t = useTranslation();
  const visibleCategories = showAll
    ? techStackCategories
    : techStackCategories.slice(0, 4);

  return (
    <Section id="tech-stack" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="glow pointer-events-none absolute left-12 top-24 h-44 w-44 rounded-full bg-section-label/8 blur-[120px]" />

      <div className="relative">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-gradient-to-r from-section-label to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-section-label">
              {t.techStack.label}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-[56px]">
            {t.techStack.title}
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-body sm:text-base">
            {t.techStack.description}
          </p>
        </div>

        <div className="mt-12 -my-2 space-y-2 overflow-hidden py-2">
          {marqueeRows.map((row, rowIndex) => {
            const repeated = [...row, ...row];
            const animationClass =
              rowIndex === 0 ? "animate-marquee-left" : "animate-marquee-right";

            return (
              <div key={`row-${rowIndex}`} className="overflow-hidden py-2">
                <div className={`flex w-max items-center gap-3 ${animationClass}`}>
                  {repeated.map((item, index) => (
                    <TechnologyBadge
                      key={`${item.label}-${index}`}
                      label={item.label}
                      fallbackIcon={iconMap[item.icon]}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 space-y-4">
          {visibleCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-[24px] border border-card-border bg-card-gradient px-5 py-5 shadow-card sm:px-6"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-section-label">
                {t.techStack.categories[category.id] ?? category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <TechnologyBadge
                    key={item.label}
                    label={item.label}
                    fallbackIcon={iconMap[item.icon]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center gap-2 text-sm font-medium text-section-label transition-colors duration-300 hover:text-primary-light"
          >
            {showAll ? t.techStack.showLess : t.techStack.showAll}
            {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      </div>
    </Section>
  );
}
