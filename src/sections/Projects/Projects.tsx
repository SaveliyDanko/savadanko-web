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
import { Section } from "@/components/layout";
import { projects } from "@/data/projects";

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
  variant: "satyastack" | "artistskonnect" | "audel";
}) {
  if (variant === "satyastack") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(255,255,255,0.08)]">
        <div className="relative h-3.5 w-5 rounded-full border border-[#d3ddff] bg-[#f5f7ff]">
          <span className="absolute left-1 top-[4px] h-1.5 w-1.5 rounded-full bg-[#6f87ff]" />
          <span className="absolute right-1 top-[5px] h-1 w-2 rounded-full bg-[#c3cbe5]" />
        </div>
      </div>
    );
  }

  if (variant === "artistskonnect") {
    return (
      <div className="rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#4cc9f0,#f472b6,#f59e0b,#4cc9f0)] p-px shadow-[0_10px_25px_rgba(76,201,240,0.12)]">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1018] text-[10px] font-semibold text-white/80">
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

export function Projects() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="pointer-events-none absolute left-16 top-24 h-40 w-40 rounded-full bg-[#6884ff]/8 blur-[110px]" />

      <div className="relative">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-gradient-to-r from-[#6f87ff] to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6f87ff]">
              Portfolio
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[56px]">
            Featured Work
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-[#656c89] sm:text-base">
            Selected projects with architecture deep-dives
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              className="group block rounded-[28px] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(8,10,19,0.72),rgba(4,5,11,0.96))] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-colors duration-300 hover:border-[#5f77ff]/16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <ProjectLogo variant={project.logo} />
                    <h3 className="text-[18px] font-semibold tracking-tight text-white/90 sm:text-[19px]">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-white/[0.04] bg-[#12182a] px-2.5 py-1 text-[11px] font-medium text-white/60">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#646b85]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    {project.technologies.map((technology) => {
                      const Icon = techIcons[technology] ?? Braces;

                      return (
                        <span
                          key={technology}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.04] bg-[#0c1018]/95 px-3 py-1.5 text-[12px] text-[#6b728d]"
                        >
                          <Icon size={12} strokeWidth={1.8} />
                          {technology}
                        </span>
                      );
                    })}

                    <span className="ml-1 text-sm text-[#6b728d]">
                      +{project.extraTechnologies}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-white/20 transition-colors duration-300 group-hover:text-[#8fa2ff]"
                />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7288d8] transition-colors duration-300 hover:text-[#a6b6ff]"
          >
            View all work
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </Section>
  );
}
