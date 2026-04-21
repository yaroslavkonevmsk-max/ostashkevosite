import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SurfaceProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  tone?: "paper" | "dark" | "panel";
};

const toneMap = {
  paper: "border-ink/8 bg-[linear-gradient(180deg,rgba(247,248,244,0.98),rgba(239,243,239,0.96))] text-ink shadow-panel",
  dark: "border-white/10 bg-[linear-gradient(160deg,rgba(8,17,14,0.98),rgba(13,25,20,0.96))] text-white shadow-soft",
  panel: "border-line bg-[linear-gradient(180deg,rgba(230,236,230,0.96),rgba(240,244,240,0.92))] text-ink"
} as const;

export function Surface({
  as: Component = "div",
  className,
  tone = "paper",
  ...props
}: SurfaceProps) {
  return (
    <Component
      className={cn(
        "rounded-[1.75rem] border p-6 sm:p-8",
        toneMap[tone],
        className
      )}
      {...props}
    />
  );
}
