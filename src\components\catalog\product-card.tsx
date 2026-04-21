import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import type { Product } from "@/data/catalog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Surface className="group relative overflow-hidden flex h-full flex-col justify-between p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft sm:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(169,130,74,0.12),rgba(255,255,255,0))]"
      />
      <div className="relative space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="editorial-kicker">{product.heroLabel}</p>
            <h3 className="max-w-[18rem] font-serif text-[1.9rem] leading-[1.02] tracking-heading text-ink sm:text-[2.15rem]">
              {product.name}
            </h3>
          </div>
          <div className="rounded-2xl border border-bronze/20 bg-white/85 px-3 py-2 text-right shadow-[0_16px_28px_-24px_rgba(29,35,41,0.45)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
              от завода
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">{product.priceFrom}</p>
          </div>
        </div>
        <p className="type-body">{product.summary}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="trust-strip">
            <p className="editorial-kicker">Влажность / сорт</p>
            <p className="mt-2 text-base font-semibold text-ink">
              {product.moisture} · {product.grade}
            </p>
          </div>
          <div className="trust-strip">
            <p className="editorial-kicker">Поставка</p>
            <p className="mt-2 text-base font-semibold text-ink">
              Самовывоз · Погрузка · B2B
            </p>
          </div>
        </div>

        <div className="rounded-[1.35rem] border border-ink/8 bg-white/86 px-5 py-4">
          <p className="editorial-kicker">Размерный ряд</p>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-ink sm:grid-cols-3">
            <p>
              <span className="font-semibold">Толщина</span>
              <br />
              {product.thicknesses.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Ширина</span>
              <br />
              {product.widths.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Длина</span>
              <br />
              {product.lengths.join(", ")}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          className="w-full sm:w-auto"
          href={`/catalog/${product.category}/${product.slug}`}
        >
          Смотреть позицию
        </Button>
        <Button className="w-full sm:w-auto" href="/request-quote" variant="secondary">
          Оптовый запрос
        </Button>
      </div>
    </Surface>
  );
}
