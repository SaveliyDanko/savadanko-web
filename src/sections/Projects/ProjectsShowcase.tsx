import {
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  Atom,
  Boxes,
  Braces,
  Cloud,
  CloudCog,
  Coffee,
  Cpu,
  Database,
  ShieldCheck,
  Sprout,
  Truck,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useTranslation } from "@/app/providers";

const techIcons: Record<string, LucideIcon> = {
  Noir: ShieldCheck,
  Rust: Cpu,
  "Spring Boot": Sprout,
  Flutter: AppWindow,
  AWS: Cloud,
  Terraform: Boxes,
  ".NET 10": Braces,
  "Next.js": ArrowUpRight,
  PostgreSQL: Database,
  "Supabase Auth": ShieldCheck,
  "Cloudflare R2": CloudCog,
  Java: Coffee,
  React: Atom,
  Vite: Zap,
  TypeScript: Braces,
  Supabase: Database,
};

function ProjectLogo({
  variant,
}: {
  variant: "nexign" | "modula";
}) {
  if (variant === "nexign") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(255,255,255,0.08)]">
        <div className="relative h-3.5 w-5 rounded-full border border-[#d3ddff] bg-[#f5f7ff]">
          <span className="absolute left-1 top-[4px] h-1.5 w-1.5 rounded-full bg-[#6f87ff]" />
          <span className="absolute right-1 top-[5px] h-1 w-2 rounded-full bg-[#c3cbe5]" />
        </div>
      </div>
    );
  }

  if (variant === "modula") {
    return (
      <div className="rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#4cc9f0,#f472b6,#f59e0b,#4cc9f0)] p-px shadow-[0_10px_25px_rgba(76,201,240,0.12)]">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-[10px] font-semibold text-heading/80">
          AK
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2847b8] text-white shadow-[0_12px_30px_rgba(40,71,184,0.22)]">
      <Truck size={16} strokeWidth={2} />
    </div>
  );
}

interface ProjectsShowcaseProps {
  showViewAllLink?: boolean;
  titleAs?: "h1" | "h2";
  viewAllHref?: string;
}

export function ProjectsShowcase({
  showViewAllLink = true,
  titleAs = "h2",
  viewAllHref = "/work",
}: ProjectsShowcaseProps) {
  const TitleTag = titleAs;
  const t = useTranslation();

  return (
    <div className="relative">
      <div className="max-w-xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-gradient-to-r from-section-label to-transparent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-section-label">
            {t.projects.label}
          </span>
        </div>

        <TitleTag className="mt-5 text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-[56px]">
          {t.projects.title}
        </TitleTag>

        <p className="mt-5 text-[15px] leading-8 text-body sm:text-base">
          {t.projects.description}
        </p>
      </div>

      <div className="mt-12 space-y-5">
        {projects.map((project, index) => {
          const text = t.projects.items[index];

          return (
            <motion.a
              key={project.id}
              href={project.href}
              className="group block rounded-[28px] border border-card-border bg-card-gradient px-7 py-7 shadow-card transition-colors duration-300 hover:border-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <ProjectLogo variant={project.logo} />
                    <h3 className="text-[18px] font-semibold tracking-tight text-heading/90 sm:text-[19px]">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-card-border bg-surface-light px-2.5 py-1 text-[11px] font-medium text-heading/60">
                      {text?.category ?? project.category}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-[15px] leading-7 text-body">
                    {text?.description ?? project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    {project.technologies.map((technology) => {
                      const Icon = techIcons[technology] ?? Braces;

                      return (
                        <span
                          key={technology}
                          className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-surface/95 px-3 py-1.5 text-[12px] text-body"
                        >
                          <Icon size={12} strokeWidth={1.8} />
                          {technology}
                        </span>
                      );
                    })}

                    <span className="ml-1 text-sm text-body">
                      +{project.extraTechnologies}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-heading/20 transition-colors duration-300 group-hover:text-section-label"
                />
              </div>
            </motion.a>
          );
        })}
      </div>

      {showViewAllLink ? (
        <div className="mt-10 flex justify-center">
          <Link
            to={viewAllHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-section-label transition-colors duration-300 hover:text-primary-light"
          >
            {t.projects.viewAll}
            <ArrowRight size={15} />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
