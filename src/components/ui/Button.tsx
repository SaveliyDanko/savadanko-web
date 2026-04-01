import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25",
  secondary:
    "bg-surface-light text-text border border-border hover:bg-surface-lighter",
  ghost: "text-text-muted hover:text-text hover:bg-surface-light",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
