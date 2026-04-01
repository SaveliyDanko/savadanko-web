import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface-light p-6",
        hoverable && "transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
