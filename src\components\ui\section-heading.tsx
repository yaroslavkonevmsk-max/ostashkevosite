import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className,
  tone = "default"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className={cn("max-w-3xl space-y-3 sm:space-y-4", align === "center" && "items-center")}>
        <h2
          className={cn(
            "font-serif text-[2rem] leading-[1.02] tracking-heading sm:text-5xl",
            tone === "default" ? "text-ink" : "text-white"
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-[0.98rem] leading-7 sm:text-lg",
              tone === "default" ? "text-muted" : "text-white/72"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3 pt-1">{actions}</div> : null}
    </div>
  );
}
