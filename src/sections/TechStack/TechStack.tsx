import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types";

const categoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  languages: "Languages",
  tools: "Tools",
  other: "Other",
};

export function TechStack() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <Section id="tech-stack">
      <SectionHeading title="Tech Stack" subtitle="My tools and technologies" />
      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {categoryLabels[cat]}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((s) => s.category === cat)
                .map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    className="rounded-lg border border-border bg-surface-light px-4 py-2 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
