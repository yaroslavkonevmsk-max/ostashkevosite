import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  note?: string;
  className?: string;
  tone?: "default" | "inverted";
};

export function StatCard({
  label,
  value,
  note,
  className,
  tone = "default"
}: StatCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border p-6 shadow-panel sm:p-7",
        tone === "default"
          ? "border-ink/8 bg-paper"
          : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-none",
        className
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-16",
          tone === "default"
            ? "bg-[linear-gradient(180deg,rgba(169,130,74,0.1),rgba(255,255,255,0))]"
            : "bg-[linear-gradient(180deg,rgba(169,130,74,0.18),rgba(255,255,255,0))]"
        )}
      />
      <p className={cn("relative editorial-kicker", tone === "inverted" && "text-white/55")}>
        {label}
      </p>
      <p
        className={cn(
          "relative mt-4 font-serif text-[2.4rem] leading-none tracking-heading sm:text-[3rem]",
          tone === "default" ? "text-ink" : "text-white"
        )}
      >
        {value}
      </p>
      {note ? (
        <p
          className={cn(
            "mt-4 text-sm leading-6",
            tone === "default" ? "text-muted" : "text-white/68"
          )}
        >
          {note}
        </p>
      ) : null}
    </div>
  );
}
