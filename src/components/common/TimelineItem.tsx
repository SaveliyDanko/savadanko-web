import type { Experience } from "@/types";
import { Badge } from "@/components/ui";

interface TimelineItemProps {
  item: Experience;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className="relative border-l border-border pl-8 pb-10 last:pb-0">
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
      <p className="text-sm text-text-muted">{item.period}</p>
      <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
      <p className="text-primary-light">{item.company}</p>
      <p className="mt-2 text-sm text-text-muted">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
