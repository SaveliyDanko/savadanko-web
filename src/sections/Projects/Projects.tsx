import { Section } from "@/components/layout";
import { ProjectsShowcase } from "./ProjectsShowcase";

export function Projects() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="pointer-events-none absolute left-16 top-24 h-40 w-40 rounded-full bg-[#6884ff]/8 blur-[110px]" />
      <ProjectsShowcase viewAllHref="/work" />
    </Section>
  );
}
