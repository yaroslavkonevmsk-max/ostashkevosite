import type { ReactNode } from "react";

import { getFactoryImageAlt } from "@/lib/image-alt";

type FactoryPhotoItem = {
  title: string;
  note: string;
  badge?: string;
  meta?: string;
  accent?: ReactNode;
};

type FactoryPhotoGridProps = {
  items: FactoryPhotoItem[];
  metaLabel?: string;
};

export function FactoryPhotoGrid({
  items,
  metaLabel = "Фото завода"
}: FactoryPhotoGridProps) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <figure
          aria-label={getFactoryImageAlt(item.title)}
          className="group overflow-hidden rounded-[1.75rem] border border-ink/8 bg-charcoal p-5 shadow-soft"
          key={item.title}
        >
          <div className="flex min-h-[18rem] flex-col justify-between rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(169,130,74,0.24),_transparent_35%),linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))] p-6 sm:min-h-[21rem]">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/55">
                {item.badge ?? `Кадр ${index + 1}`}
              </span>
              <span className="text-[0.75rem] uppercase tracking-[0.14em] text-white/38">
                {item.meta ?? metaLabel}
              </span>
            </div>

            <figcaption className="space-y-3">
              <div className="space-y-3">
                <h3 className="font-serif text-3xl leading-tight tracking-heading text-white">
                  {item.title}
                </h3>
                <p className="max-w-lg text-sm leading-7 text-white/68">{item.note}</p>
              </div>
              {item.accent ? <div>{item.accent}</div> : null}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
