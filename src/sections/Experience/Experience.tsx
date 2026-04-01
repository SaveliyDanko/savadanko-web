import { Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { TimelineItem } from "@/components/common";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" subtitle="Professional path" />
      <div className="mx-auto max-w-2xl">
        {experience.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
