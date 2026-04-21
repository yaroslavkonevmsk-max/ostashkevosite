import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink/10 bg-white/92 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted shadow-[0_8px_18px_-18px_rgba(29,35,41,0.5)]",
        className
      )}
      {...props}
    />
  );
}
