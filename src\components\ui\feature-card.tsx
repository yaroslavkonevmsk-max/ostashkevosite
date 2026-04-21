import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: ReactNode;
  className?: string;
  tone?: "default" | "dark";
};

export function FeatureCard({
  title,
  description,
  eyebrow,
  icon,
  className,
  tone = "default"
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.7rem] border p-7 transition duration-200 hover:-translate-y-1 sm:p-8",
        tone === "default"
          ? "border-ink/8 bg-paper shadow-panel hover:shadow-soft"
          : "border-white/10 bg-[linear-gradient(160deg,rgba(8,17,14,0.98),rgba(14,34,27,0.96))] shadow-[0_30px_70px_-46px_rgba(8,17,14,0.82)] hover:shadow-[0_34px_78px_-44px_rgba(8,17,14,0.88)]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-24",
          tone === "default"
            ? "bg-[linear-gradient(180deg,rgba(169,130,74,0.12),rgba(255,255,255,0))]"
            : "bg-[linear-gradient(180deg,rgba(33,71,60,0.34),rgba(255,255,255,0))]"
        )}
      />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              {eyebrow ? (
                <p className={cn("editorial-kicker", tone === "dark" && "text-white/42")}>
                  {eyebrow}
                </p>
              ) : null}
              <h3
                className={cn(
                  "max-w-[18rem] font-serif text-[1.8rem] leading-[1.02] tracking-heading sm:text-[2rem]",
                  tone === "default" ? "text-ink" : "text-white"
                )}
              >
                {title}
              </h3>
            </div>
            {icon ? (
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[0.78rem] font-semibold tracking-[0.14em]",
                  tone === "default"
                    ? "border border-bronze/20 bg-white/80 text-bronze shadow-[0_16px_28px_-22px_rgba(29,35,41,0.4)]"
                    : "border border-white/10 bg-white/5 text-white/72 shadow-[0_16px_28px_-22px_rgba(8,17,14,0.8)]"
                )}
              >
                {icon}
              </div>
            ) : null}
          </div>
          <p
            className={cn(
              "max-w-xl text-[0.98rem] leading-7",
              tone === "default" ? "text-muted" : "text-white/68"
            )}
          >
            {description}
          </p>
        </div>
        <div className={cn("h-px w-full", tone === "default" ? "fade-divider" : "bg-white/10")} />
      </div>
    </article>
  );
}
