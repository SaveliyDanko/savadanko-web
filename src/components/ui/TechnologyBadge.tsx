import { Braces } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "@/app/providers";
import { cn } from "@/utils/cn";
import { techIcons } from "@/data/techIcons";

type TechnologyVisual =
  | {
      kind: "icon";
      slug: string;
    }
  | {
      kind: "badge";
      text: string;
      className?: string;
    };

const technologyVisuals: Record<string, TechnologyVisual> = {
  Java: { kind: "icon", slug: "openjdk" },
  Groovy: { kind: "icon", slug: "apachegroovy" },
  Kotlin: { kind: "icon", slug: "kotlin" },
  JavaScript: { kind: "icon", slug: "javascript" },
  TypeScript: { kind: "icon", slug: "typescript" },
  PostgreSQL: { kind: "icon", slug: "postgresql" },
  Postgres: { kind: "icon", slug: "postgresql" },
  MongoDB: { kind: "icon", slug: "mongodb" },
  "JPA/Hibernate": { kind: "icon", slug: "hibernate" },
  Spring: { kind: "icon", slug: "spring" },
  "Spring Boot": { kind: "icon", slug: "spring" },
  Gradle: { kind: "icon", slug: "gradle" },
  Maven: { kind: "icon", slug: "apachemaven" },
  Kafka: { kind: "icon", slug: "apachekafka" },
  RabbitMQ: { kind: "icon", slug: "rabbitmq" },
  Rabbit: { kind: "icon", slug: "rabbitmq" },
  Docker: { kind: "icon", slug: "docker" },
  Kubernetes: { kind: "icon", slug: "kubernetes" },
  Jenkins: { kind: "icon", slug: "jenkins" },
  Ansible: { kind: "icon", slug: "ansible" },
  Prometheus: { kind: "icon", slug: "prometheus" },
  Grafana: { kind: "icon", slug: "grafana" },
  "ELK Stack": { kind: "icon", slug: "elastic" },
  "OpenAPI/Swagger": { kind: "icon", slug: "openapiinitiative" },
  "JUnit 5": { kind: "icon", slug: "junit5" },
  JMeter: { kind: "icon", slug: "apachejmeter" },
  HTML: { kind: "icon", slug: "html5" },
  CSS: { kind: "icon", slug: "css" },
  React: { kind: "icon", slug: "react" },
  Git: { kind: "icon", slug: "git" },
  GitHub: { kind: "icon", slug: "github" },
  GitLab: { kind: "icon", slug: "gitlab" },
  Linux: { kind: "icon", slug: "linux" },
  Bash: { kind: "icon", slug: "gnubash" },
  Nginx: { kind: "icon", slug: "nginx" },
  SQL: {
    kind: "badge",
    text: "SQL",
    className: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
  },
  "REST API": {
    kind: "badge",
    text: "API",
    className: "bg-[#dcfce7] text-[#15803d] ring-[#bbf7d0]",
  },
  gRPC: {
    kind: "badge",
    text: "gRPC",
    className: "bg-[#ede9fe] text-[#6d28d9] ring-[#ddd6fe]",
  },
  JSON: {
    kind: "badge",
    text: "{}",
    className: "bg-[#f3f4f6] text-[#374151] ring-[#e5e7eb]",
  },
  Protobuf: {
    kind: "badge",
    text: "PB",
    className: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
  },
  Mockito: {
    kind: "badge",
    text: "M",
    className: "bg-[#fef3c7] text-[#b45309] ring-[#fde68a]",
  },
  Testcontainers: {
    kind: "badge",
    text: "TC",
    className: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
  },
  "SOLID and GRASP": {
    kind: "badge",
    text: "SG",
    className: "bg-[#ede9fe] text-[#6d28d9] ring-[#ddd6fe]",
  },
  "Design Patterns": {
    kind: "badge",
    text: "DP",
    className: "bg-[#fce7f3] text-[#be185d] ring-[#fbcfe8]",
  },
  OOD: {
    kind: "badge",
    text: "OOD",
    className: "bg-[#e0f2fe] text-[#0369a1] ring-[#bae6fd]",
  },
  DDD: {
    kind: "badge",
    text: "DDD",
    className: "bg-[#ede9fe] text-[#6d28d9] ring-[#ddd6fe]",
  },
  "Russian (Native)": {
    kind: "badge",
    text: "RU",
    className: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
  },
  "English (B2)": {
    kind: "badge",
    text: "EN",
    className: "bg-[#fee2e2] text-[#b91c1c] ring-[#fecaca]",
  },
};

export interface TechnologyBadgeProps {
  label: string;
  fallbackIcon?: LucideIcon;
  size?: "sm" | "md";
  className?: string;
}

export function TechnologyBadge({
  label,
  fallbackIcon: FallbackIcon = Braces,
  size = "md",
  className,
}: TechnologyBadgeProps) {
  const { theme } = useTheme();
  const visual = technologyVisuals[label];
  const isSmall = size === "sm";

  const pillClassName = isSmall
    ? "gap-1.5 px-3 py-1.5 text-[12px]"
    : "gap-2 px-4 py-2 text-sm";
  const iconClassName = isSmall
    ? "h-[18px] w-[18px] p-[2.5px]"
    : "h-5 w-5 p-[3px]";
  const badgeClassName = isSmall
    ? "h-[18px] px-1.5 text-[8px]"
    : "h-5 px-1.5 text-[9px]";
  const fallbackSize = isSmall ? 12 : 13;

  const iconWrapperClassName =
    theme === "dark"
      ? "bg-surface-light/78 ring-white/8 shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
      : "bg-white/95 ring-black/5 shadow-sm";

  const resolvedIcon =
    visual?.kind === "icon" ? techIcons[visual.slug] : undefined;

  return (
    <span
      className={cn(
        "group relative inline-flex shrink-0 items-center overflow-hidden rounded-full border border-card-border bg-surface/95 text-body transition-[transform,box-shadow,border-color,background-color,color] duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.03] hover:border-section-label/30 hover:bg-surface-light/95 hover:text-heading hover:shadow-[0_10px_24px_rgba(99,102,241,0.14)]",
        pillClassName,
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,135,255,0.16),transparent_70%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {resolvedIcon ? (
        <span
          className={cn(
            "relative z-10 flex shrink-0 items-center justify-center rounded-[6px] ring-1",
            iconClassName,
            iconWrapperClassName,
          )}
        >
          <svg
            viewBox="0 0 24 24"
            fill={resolvedIcon.color}
            className="h-full w-full"
            aria-hidden="true"
          >
            <path d={resolvedIcon.path} />
          </svg>
        </span>
      ) : visual?.kind === "badge" ? (
        <span
          className={cn(
            "relative z-10 inline-flex shrink-0 items-center justify-center rounded-[6px] font-bold uppercase tracking-[0.04em] ring-1",
            badgeClassName,
            visual.className ?? "bg-[#e5e7eb] text-[#111827] ring-[#d1d5db]",
          )}
        >
          {visual.text}
        </span>
      ) : (
        <FallbackIcon
          size={fallbackSize}
          strokeWidth={1.8}
          className="relative z-10 shrink-0"
        />
      )}

      <span className="relative z-10">{label}</span>
    </span>
  );
}
