import { Section } from "@/components/layout";
import { ProjectsShowcase } from "@/sections/Projects";

export function WorkPage() {
  return (
    <Section className="relative min-h-[calc(100vh-64px)] overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/16 to-transparent" />
      <div className="pointer-events-none absolute left-16 top-24 h-40 w-40 rounded-full bg-[#6884ff]/8 blur-[110px]" />
      <ProjectsShowcase showViewAllLink={false} titleAs="h1" />
    </Section>
  );
}
