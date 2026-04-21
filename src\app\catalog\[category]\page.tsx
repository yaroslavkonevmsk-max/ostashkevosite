import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InquiryPanel } from "@/components/catalog/inquiry-panel";
import { ProductCard } from "@/components/catalog/product-card";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProofGrid } from "@/components/ui/proof-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/data/catalog";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  return buildMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/catalog/${category.slug}`,
    keywords: [
      `${category.shortName.toLowerCase()} оптом`,
      `${category.shortName.toLowerCase()} от производителя`,
      `${category.shortName.toLowerCase()} Москва`,
      "строганная продукция B2B"
    ]
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Каталог", path: "/catalog" },
          { name: category.name, path: `/catalog/${category.slug}` }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.name }
        ]}
      />

      <section className="section-space border-b border-ink/8 bg-paper/70">
        <Container>
          <header className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <p className="type-label">{category.shortName}</p>
              <h1 className="type-h1 max-w-5xl">{category.name}</h1>
              <p className="type-body-lg max-w-3xl">{category.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/request-price">Запросить прайс</Button>
                <Button href="/request-quote" variant="secondary">
                  Получить КП
                </Button>
              </div>
            </div>

            <Surface className="p-8 sm:p-10">
              <p className="type-label">Ключевые параметры категории</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-ink/8 bg-white px-4 py-3">
                  <p className="type-label">Цена</p>
                  <p className="mt-2 text-base font-semibold text-ink">{category.priceLine}</p>
                </div>
                <div className="rounded-2xl border border-ink/8 bg-white px-4 py-3">
                  <p className="type-label">Влажность / сорт</p>
                  <p className="mt-2 text-base font-semibold text-ink">
                    {category.moisture} · {category.grade}
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/8 bg-white px-4 py-3 text-sm leading-6 text-ink">
                  {category.dimensionsSummary}
                </div>
              </div>
            </Surface>
          </header>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20 lg:pb-20">
        <Container>
          <ProofGrid
            items={[
              {
                title: "Прямое сравнение позиций",
                description: "Категория не заставляет проваливаться в каждую карточку ради базовых параметров."
              },
              {
                title: "Размеры и влажность на первом экране",
                description: "Снижает время на первичную квалификацию поставщика со стороны закупщика."
              },
              {
                title: "Сценарий для стандартных партий",
                description: "Категория ведёт в прайс и КП без лишних промежуточных шагов."
              },
              {
                title: "Переход в нестандарт",
                description: "Если размер не подходит, клиент не теряется, а сразу видит следующий сценарий."
              }
            ]}
          />
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Сравнение позиций"
            title={category.compareTitle}
            description="Страница категории помогает быстро сравнить позиции внутри одного направления и перейти в товарную карточку без лишних шагов. Такая структура усиливает коммерческий интент и индексируемость."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {categoryProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <InternalLinksSection
        description="Внутренняя перелинковка поддерживает коммерческий сценарий и помогает связывать категорию с соседними страницами, которые усиливают доверие и конверсию."
        items={[
          {
            title: "Каталог продукции",
            description: "Вернуться к общей структуре номенклатуры и сравнить другие категории.",
            href: "/catalog"
          },
          {
            title: "Производство",
            description: "Посмотреть оборудование, сушильные мощности и контроль качества завода.",
            href: "/production"
          },
          {
            title: "Изготовление по чертежу",
            description: "Перейти к расчёту нестандартного профиля под техническое задание.",
            href: "/custom-profile"
          },
          {
            title: "Контакты и формы",
            description: "Сразу отправить запрос, прайс или заявку на обратный звонок.",
            href: "/contacts"
          }
        ]}
        title="Связанные коммерческие страницы для категории."
      />

      <section className="section-space">
        <Container>
          <InquiryPanel
            compact
            description="Для стандартных позиций быстрее всего работает запрос прайса или коммерческого предложения. Если задача нестандартная, разумнее сразу приложить чертёж."
            title={`Получите оптовое предложение по категории «${category.shortName}».`}
          />
        </Container>
      </section>
    </>
  );
}
