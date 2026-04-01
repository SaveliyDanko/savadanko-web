import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/common";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading title="Projects" subtitle="Selected works" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
