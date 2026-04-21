import type { Metadata } from "next";

import { InquiryPanel } from "@/components/catalog/inquiry-panel";
import { ProductCard } from "@/components/catalog/product-card";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProofGrid } from "@/components/ui/proof-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { categories, products } from "@/data/catalog";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Каталог строганной продукции оптом",
  description:
    "Каталог сухой строганной продукции из хвои для B2B: планкен, имитация бруса, доска пола и изготовление профиля по чертежу от производителя.",
  path: "/catalog",
  keywords: [
    "каталог строганной продукции",
    "строганная доска оптом",
    "планкен оптом производитель",
    "имитация бруса оптом",
    "доска пола оптом"
  ]
});

export default function CatalogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог" }]} />

      <section className="section-space border-b border-ink/8 bg-paper/70">
        <Container>
          <div className="hero-shell px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <header className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-stretch">
              <div className="rounded-[1.7rem] border border-white/40 bg-[linear-gradient(180deg,rgba(248,250,247,0.98),rgba(236,242,237,0.95))] px-6 py-8 shadow-[0_28px_60px_-38px_rgba(8,17,14,0.55)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="max-w-4xl space-y-8">
                  <div className="space-y-4">
                    <p className="editorial-kicker">Каталог завода</p>
                    <h1 className="type-h1 max-w-5xl">
                      Стандартные профили и производство по чертежу для тех, кто закупает партиями, а не поштучно.
                    </h1>
                    <p className="type-body-lg max-w-3xl">
                      Каталог собран как рабочая B2B-витрина: здесь видны размерные
                      ряды, влажность, сорт, логика отгрузки и переход в коммерческий
                      запрос без розничного шума и пустых SEO-заглушек.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button href="/request-quote">Получить КП</Button>
                    <Button href="/request-price" variant="secondary">
                      Запросить прайс
                    </Button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="trust-strip">
                      <p className="editorial-kicker">Сортировка</p>
                      <p className="mt-2 text-base font-semibold text-ink">A–AB по популярной номенклатуре</p>
                    </div>
                    <div className="trust-strip">
                      <p className="editorial-kicker">Сушка</p>
                      <p className="mt-2 text-base font-semibold text-ink">Камерная влажность 10–12%</p>
                    </div>
                    <div className="trust-strip">
                      <p className="editorial-kicker">Поставка</p>
                      <p className="mt-2 text-base font-semibold text-ink">Самовывоз · Фуры · Контейнеры</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-dark-panel micro-grid p-6 sm:p-8 lg:p-10">
                <div className="space-y-5">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Что важно в каталоге поставщика
                  </p>
                  <div className="space-y-4 text-sm leading-7 text-white/75">
                    <p>
                      Размеры по стандартной номенклатуре вынесены в явный вид и не
                      прячутся внутри карточек.
                    </p>
                    <p>
                      Влажность 10–12% и сорт A–AB работают как базовые фильтры
                      закупщика уже на первом экране.
                    </p>
                    <p>
                      Упаковка, погрузка и переход в custom-производство встроены в
                      каталог как часть коммерческого маршрута.
                    </p>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20 lg:pb-20">
        <Container>
          <ProofGrid
            items={[
              {
                title: "Камерная сушка 10–12%",
                description: "Ключевой параметр сразу виден в каталоге и не требует дополнительной верификации на первом шаге."
              },
              {
                title: "Сорт A–AB",
                description: "Категории сравниваются по рабочим параметрам, важным для снабжения и дилерской закупки."
              },
              {
                title: "Упаковка и погрузка",
                description: "Каталог сразу подаёт продукцию как партию к реальной отгрузке, а не как розничную карточку."
              },
              {
                title: "Нестандарт по чертежу",
                description: "Если типовой профиль не подходит, клиент не теряется, а уходит в отдельный сценарий расчёта."
              }
            ]}
          />
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-end">
            <SectionHeading
              eyebrow="Линейка продукции"
              title="Категории поданы как коммерческие направления завода, а не как безликий список ассортимента."
              description="На этом уровне задача каталога проста: быстро показать, что именно выпускает завод, какие размеры входят в стандартную номенклатуру и куда идти за расчётом."
            />

            <div className="rounded-[1.7rem] border border-ink/8 bg-white/86 p-6 shadow-panel sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="editorial-kicker">Типовая поставка</p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    Планкен, строганная доска, имитация бруса и доска пола.
                  </p>
                </div>
                <div>
                  <p className="editorial-kicker">B2B-логика</p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    Влажность, сорт, партия, упаковка и формат отгрузки.
                  </p>
                </div>
                <div>
                  <p className="editorial-kicker">Следующий шаг</p>
                  <p className="mt-2 text-sm leading-6 text-ink">
                    Прайс, КП или нестандартный расчёт по чертежу.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <Surface
                className="group relative overflow-hidden flex h-full flex-col justify-between p-7 transition duration-200 hover:-translate-y-1 hover:shadow-soft sm:p-8"
                key={category.slug}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(169,130,74,0.1),rgba(255,255,255,0))]"
                />
                <div className="relative space-y-5">
                  <p className="editorial-kicker">{category.shortName}</p>
                  <div className="space-y-3">
                    <h2 className="font-serif text-[1.85rem] leading-[1.03] tracking-heading text-ink sm:text-[2.15rem]">
                      {category.name}
                    </h2>
                    <p className="type-body">{category.intro}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="trust-strip">
                      <p className="editorial-kicker">Цена / влажность</p>
                      <p className="mt-2 text-sm leading-6 text-ink">
                        {category.priceLine}
                        <br />
                        {category.moisture}
                      </p>
                    </div>
                    <div className="trust-strip">
                      <p className="editorial-kicker">Сорт / размеры</p>
                      <p className="mt-2 text-sm leading-6 text-ink">
                        {category.grade}
                        <br />
                        {category.dimensionsSummary}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative mt-7">
                  <Button href={`/catalog/${category.slug}`} variant="secondary">
                    Смотреть категорию
                  </Button>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-y border-ink/8 bg-paper/70">
        <Container>
          <SectionHeading
            eyebrow="Позиции"
            title="Карточки позиций поданы как коммерческие мини-страницы с понятными условиями и сильным CTA."
            description="На уровне каталога пользователь должен быстро увидеть размерный ряд, качество, цену от и перейти к предметному запросу, не теряя ощущение серьёзного поставщика."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <InternalLinksSection
        description="Эта секция помогает и пользователю, и поиску: связывает каталог с производством, нестандартом и коммерческими точками входа."
        items={[
          {
            title: "Производство",
            description: "Оборудование, сушильные мощности, контроль качества и погрузка.",
            href: "/production"
          },
          {
            title: "Профиль по чертежу",
            description: "Нестандартные изделия с расчётом по техническому заданию.",
            href: "/custom-profile"
          },
          {
            title: "Запросить прайс",
            description: "Быстрый сценарий для стандартной номенклатуры и ориентировочных цен.",
            href: "/request-price"
          },
          {
            title: "Контакты отдела продаж",
            description: "Форма оптового запроса, обратный звонок и прямые каналы связи.",
            href: "/contacts"
          }
        ]}
        title="Коммерческие разделы, которые логично усиливают каталог."
      />

      <section className="section-space">
        <Container>
          <InquiryPanel
            description="Если нужен прайс по стандартной номенклатуре, коммерческое предложение под объём или расчёт нестандартного профиля, лучше сразу перейти в соответствующий сценарий обращения."
            title="Каталог должен не просто показывать продукцию, а доводить закупщика до осмысленного B2B-запроса."
          />
        </Container>
      </section>
    </>
  );
}
