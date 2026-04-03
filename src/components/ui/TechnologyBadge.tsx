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
      light: string;
      dark: string;
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
    light: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
    dark: "bg-[#1e3a5f]/40 text-[#60a5fa] ring-[#1e3a5f]",
  },
  "REST API": {
    kind: "badge",
    text: "API",
    light: "bg-[#dcfce7] text-[#15803d] ring-[#bbf7d0]",
    dark: "bg-[#14332a]/40 text-[#4ade80] ring-[#14332a]",
  },
  gRPC: {
    kind: "badge",
    text: "gRPC",
    light: "bg-[#ede9fe] text-[#6d28d9] ring-[#ddd6fe]",
    dark: "bg-[#2e1a5e]/40 text-[#a78bfa] ring-[#2e1a5e]",
  },
  JSON: {
    kind: "badge",
    text: "{}",
    light: "bg-[#f3f4f6] text-[#374151] ring-[#e5e7eb]",
    dark: "bg-[#1f2937]/40 text-[#9ca3af] ring-[#1f2937]",
  },
  Protobuf: {
    kind: "badge",
    text: "PB",
    light: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
    dark: "bg-[#1e3a5f]/40 text-[#60a5fa] ring-[#1e3a5f]",
  },
  Mockito: {
    kind: "badge",
    text: "M",
    light: "bg-[#fef3c7] text-[#b45309] ring-[#fde68a]",
    dark: "bg-[#3d2e0a]/40 text-[#fbbf24] ring-[#3d2e0a]",
  },
  Testcontainers: {
    kind: "badge",
    text: "TC",
    light: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
    dark: "bg-[#1e3a5f]/40 text-[#60a5fa] ring-[#1e3a5f]",
  },
  "SOLID and GRASP": {
    kind: "badge",
    text: "SG",
    light: "bg-[#ede9fe] text-[#6d28d9] ring-[#ddd6fe]",
    dark: "bg-[#2e1a5e]/40 text-[#a78bfa] ring-[#2e1a5e]",
  },
  "Design Patterns": {
    kind: "badge",
    text: "DP",
    light: "bg-[#fce7f3] text-[#be185d] ring-[#fbcfe8]",
    dark: "bg-[#4a1942]/40 text-[#f472b6] ring-[#4a1942]",
  },
  OOD: {
    kind: "badge",
    text: "OOD",
    light: "bg-[#e0f2fe] text-[#0369a1] ring-[#bae6fd]",
    dark: "bg-[#0c3547]/40 text-[#38bdf8] ring-[#0c3547]",
  },
  DDD: {
    kind: "badge",
    text: "DDD",
    light: "bg-[#ede9fe] text-[#6d28d9] ring-[#ddd6fe]",
    dark: "bg-[#2e1a5e]/40 text-[#a78bfa] ring-[#2e1a5e]",
  },
  "Russian (Native)": {
    kind: "badge",
    text: "RU",
    light: "bg-[#dbeafe] text-[#1d4ed8] ring-[#bfdbfe]",
    dark: "bg-[#1e3a5f]/40 text-[#60a5fa] ring-[#1e3a5f]",
  },
  "English (B2)": {
    kind: "badge",
    text: "EN",
    light: "bg-[#fee2e2] text-[#b91c1c] ring-[#fecaca]",
    dark: "bg-[#4a1c1c]/40 text-[#f87171] ring-[#4a1c1c]",
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
            theme === "dark" ? visual.dark : visual.light,
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
