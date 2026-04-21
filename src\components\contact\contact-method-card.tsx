import Link from "next/link";

import { cn } from "@/lib/utils";

type ContactMethodCardProps = {
  label: string;
  value: string;
  href: string;
  description: string;
  tone?: "default" | "dark";
  className?: string;
};

export function ContactMethodCard({
  label,
  value,
  href,
  description,
  tone = "default",
  className
}: ContactMethodCardProps) {
  return (
    <article
      className={cn(
        "rounded-[1.35rem] border px-4 py-4 shadow-[0_18px_34px_-30px_rgba(8,17,14,0.38)] sm:px-5",
        tone === "default"
          ? "border-white/10 bg-[linear-gradient(180deg,rgba(15,34,28,0.98),rgba(7,13,11,0.98))]"
          : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]",
        className
      )}
    >
      <p className={cn("type-label", tone === "default" ? "text-[#87B59D]" : "text-white/45")}>
        {label}
      </p>
      <Link
        className={cn(
          "mt-2 block text-lg font-semibold tracking-[-0.02em] transition",
          tone === "default"
            ? "text-white hover:text-[#9FD2B5]"
            : "text-white hover:text-white/82"
        )}
        href={href}
      >
        {value}
      </Link>
      <p className="mt-3 text-sm leading-6 text-white/68">{description}</p>
    </article>
  );
}
