import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
}

export function Section({
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn("mx-auto max-w-6xl px-6 py-20 sm:py-28", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
