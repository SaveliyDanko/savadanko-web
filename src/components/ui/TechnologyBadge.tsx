import { useState } from "react";
import { Braces } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "@/app/providers";
import { cn } from "@/utils/cn";

type TechnologyVisual =
  | {
      kind: "logo";
      src: string;
    }
  | {
      kind: "badge";
      text: string;
      className?: string;
    };

function logo(slug: string, color?: string) {
  return color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;
}

const technologyVisuals: Record<string, TechnologyVisual> = {
  Java: { kind: "logo", src: logo("openjdk", "ED8B00") },
  Groovy: { kind: "logo", src: logo("apachegroovy", "4298B8") },
  Kotlin: { kind: "logo", src: logo("kotlin", "7F52FF") },
  JavaScript: { kind: "logo", src: logo("javascript", "F7DF1E") },
  TypeScript: { kind: "logo", src: logo("typescript", "3178C6") },
  PostgreSQL: { kind: "logo", src: logo("postgresql", "4169E1") },
  Postgres: { kind: "logo", src: logo("postgresql", "4169E1") },
  MongoDB: { kind: "logo", src: logo("mongodb", "47A248") },
  "JPA/Hibernate": { kind: "logo", src: logo("hibernate", "59666C") },
  Spring: { kind: "logo", src: logo("spring", "6DB33F") },
  "Spring Boot": { kind: "logo", src: logo("spring", "6DB33F") },
  Gradle: { kind: "logo", src: logo("gradle", "02303A") },
  Maven: { kind: "logo", src: logo("apachemaven", "C71A36") },
  Kafka: { kind: "logo", src: logo("apachekafka", "231F20") },
  RabbitMQ: { kind: "logo", src: logo("rabbitmq", "FF6600") },
  Rabbit: { kind: "logo", src: logo("rabbitmq", "FF6600") },
  Docker: { kind: "logo", src: logo("docker", "2496ED") },
  Kubernetes: { kind: "logo", src: logo("kubernetes", "326CE5") },
  Jenkins: { kind: "logo", src: logo("jenkins", "D24939") },
  Ansible: { kind: "logo", src: logo("ansible", "EE0000") },
  Prometheus: { kind: "logo", src: logo("prometheus", "E6522C") },
  Grafana: { kind: "logo", src: logo("grafana", "F46800") },
  "ELK Stack": { kind: "logo", src: logo("elastic", "005571") },
  "OpenAPI/Swagger": {
    kind: "logo",
    src: logo("openapiinitiative", "6BA539"),
  },
  "JUnit 5": { kind: "logo", src: logo("junit5", "25A162") },
  JMeter: { kind: "logo", src: logo("apachejmeter", "D22128") },
  HTML: { kind: "logo", src: logo("html5", "E34F26") },
  CSS: { kind: "logo", src: logo("css", "1572B6") },
  React: { kind: "logo", src: logo("react", "61DAFB") },
  Git: { kind: "logo", src: logo("git", "F05032") },
  GitHub: { kind: "logo", src: logo("github", "181717") },
  GitLab: { kind: "logo", src: logo("gitlab", "FC6D26") },
  Linux: { kind: "logo", src: logo("linux", "FCC624") },
  Bash: { kind: "logo", src: logo("gnubash", "4EAA25") },
  Nginx: { kind: "logo", src: logo("nginx", "009639") },
  Protobuf: { kind: "logo", src: logo("protocolsdotio", "1E88E5") },
  "Apache Camel": { kind: "logo", src: logo("apachecamel", "FF6F00") },
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
  const [hasImageError, setHasImageError] = useState(false);
  const { theme } = useTheme();
  const visual = technologyVisuals[label];
  const isSmall = size === "sm";

  const pillClassName = isSmall
    ? "gap-1.5 px-3 py-1.5 text-[12px]"
    : "gap-2 px-4 py-2 text-sm";
  const logoClassName = isSmall
    ? "h-[18px] w-[18px] p-[2.5px]"
    : "h-5 w-5 p-[3px]";
  const badgeClassName = isSmall
    ? "h-[18px] px-1.5 text-[8px]"
    : "h-5 px-1.5 text-[9px]";
  const fallbackSize = isSmall ? 12 : 13;

  const logoWrapperClassName =
    theme === "dark"
      ? "bg-surface-light/78 ring-white/8 shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
      : "bg-white/95 ring-black/5 shadow-sm";

  return (
    <span
      className={cn(
        "group relative inline-flex shrink-0 items-center overflow-hidden rounded-full border border-card-border bg-surface/95 text-body transition-[transform,box-shadow,border-color,background-color,color] duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.03] hover:border-section-label/30 hover:bg-surface-light/95 hover:text-heading hover:shadow-[0_10px_24px_rgba(99,102,241,0.14)]",
        pillClassName,
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,135,255,0.16),transparent_70%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {visual?.kind === "logo" && !hasImageError ? (
        <span
          className={cn(
            "relative z-10 flex shrink-0 items-center justify-center rounded-[6px] ring-1",
            logoClassName,
            logoWrapperClassName,
          )}
        >
          <img
            src={visual.src}
            alt=""
            className="h-full w-full object-contain"
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
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
