import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export function Badge({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
