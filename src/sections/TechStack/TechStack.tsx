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
  SquareStack,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout";
import {
  marqueeRows,
  techStackCategories,
  type TechBadge,
} from "@/data/skills";

const iconMap: Record<TechBadge["icon"], LucideIcon> = {
  braces: Braces,
  hexagon: Hexagon,
  server: Server,
  azure: SquareStack,
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

function TechPill({ item }: { item: TechBadge }) {
  const Icon = iconMap[item.icon];

  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[0.04] bg-[#0b1018]/95 px-4 py-2 text-sm text-[#6b728d]">
      <Icon size={13} strokeWidth={1.8} />
      {item.label}
    </span>
  );
}

export function TechStack() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll
    ? techStackCategories
    : techStackCategories.slice(0, 4);

  return (
    <Section id="tech-stack" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="pointer-events-none absolute left-12 top-24 h-44 w-44 rounded-full bg-[#6884ff]/8 blur-[120px]" />

      <div className="relative">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-gradient-to-r from-[#6f87ff] to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6f87ff]">
              Tools
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[56px]">
            Tech Stack
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-[#656c89] sm:text-base">
            Technologies and tools I work with regularly
          </p>
        </div>

        <div className="mt-12 space-y-4 overflow-hidden">
          {marqueeRows.map((row, rowIndex) => {
            const repeated = [...row, ...row];
            const animationClass =
              rowIndex === 0 ? "animate-marquee-left" : "animate-marquee-right";

            return (
              <div key={`row-${rowIndex}`} className="overflow-hidden">
                <div className={`flex w-max gap-3 ${animationClass}`}>
                  {repeated.map((item, index) => (
                    <TechPill key={`${item.label}-${index}`} item={item} />
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
              className="rounded-[24px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(8,10,19,0.78),rgba(4,5,11,0.96))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] sm:px-6"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6f87ff]">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <TechPill key={item.label} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7288d8] transition-colors duration-300 hover:text-[#a6b6ff]"
          >
            {showAll ? "Show fewer categories" : "Show all 8 categories"}
            {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      </div>
    </Section>
  );
}
