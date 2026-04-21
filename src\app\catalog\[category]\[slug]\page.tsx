import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { InquiryPanel } from "@/components/catalog/inquiry-panel";
import { SpecTable } from "@/components/catalog/spec-table";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProofGrid } from "@/components/ui/proof-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import {
  getCategoryBySlug,
  getProductBySlug,
  products
} from "@/data/catalog";
import { buildMetadata } from "@/lib/metadata";
import {
  buildBreadcrumbJsonLd,
  buildProductJsonLd
} from "@/lib/structured-data";

type ProductDetailPageProps = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: ProductDetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    return {};
  }

  return buildMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/catalog/${product.category}/${product.slug}`,
    keywords: [
      product.name.toLowerCase(),
      "купить оптом от производителя",
      "строганная продукция",
      "B2B поставка"
    ]
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(categorySlug, slug);
  const category = getCategoryBySlug(categorySlug);

  if (!product || !category) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Каталог", path: "/catalog" },
          { name: category.name, path: `/catalog/${category.slug}` },
          {
            name: product.name,
            path: `/catalog/${product.category}/${product.slug}`
          }
        ])}
      />
      <JsonLd data={buildProductJsonLd(product, category)} />
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.name, href: `/catalog/${category.slug}` },
          { label: product.name }
        ]}
      />

      <section className="section-space border-b border-ink/8 bg-paper/70">
        <Container>
          <header className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <p className="type-label">{product.heroLabel}</p>
              <h1 className="type-h1 max-w-5xl">{product.name}</h1>
              <p className="type-body-lg max-w-3xl">{product.summary}</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/request-quote">Оптовый запрос</Button>
                <Button href="/request-price" variant="secondary">
                  Запросить прайс
                </Button>
              </div>
            </div>

            <aside>
              <Surface className="p-8 sm:p-10">
                <p className="type-label">Коммерческая сводка</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-ink/8 bg-white px-4 py-3">
                    <p className="type-label">Цена</p>
                    <p className="mt-2 text-base font-semibold text-ink">{product.priceFrom}</p>
                  </div>
                  <div className="rounded-2xl border border-ink/8 bg-white px-4 py-3">
                    <p className="type-label">Влажность / сорт</p>
                    <p className="mt-2 text-base font-semibold text-ink">
                      {product.moisture} · {product.grade}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-ink/8 bg-white px-4 py-3">
                    <p className="type-label">Категория</p>
                    <p className="mt-2 text-base font-semibold text-ink">{category.name}</p>
                  </div>
                </div>
              </Surface>
            </aside>
          </header>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20 lg:pb-20">
        <Container>
          <ProofGrid
            items={[
              {
                title: "Документы по поставке",
                description: "ТТН, счёт-фактура при работе с НДС и дополнительные документы по запросу."
              },
              {
                title: "Претензии до погрузки",
                description: "Критически важный trust-сигнал для B2B-закупки и согласования качества."
              },
              {
                title: "Упаковка под вывоз",
                description: "Позиция описана не как розничная карточка, а как товар под реальную отгрузку."
              },
              {
                title: "Следующий шаг очевиден",
                description: "После чтения страницы клиент сразу понимает: запрашивать прайс, КП или нестандарт."
              }
            ]}
          />
        </Container>
      </section>

      <article>
        <section className="section-space">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <SpecTable
                title="Спецификация"
                rows={[
                  { label: "Толщина", value: product.thicknesses.join(", ") },
                  { label: "Ширина", value: product.widths.join(", ") },
                  { label: "Длина", value: product.lengths.join(", ") },
                  { label: "Влажность", value: product.moisture },
                  { label: "Сорт", value: product.grade },
                  {
                    label: "Наличие / срок",
                    value: `${product.availability} ${product.leadTime}`
                  }
                ]}
              />

              <SpecTable
                title="Коммерческие условия"
                rows={[
                  { label: "Цена", value: product.priceFrom },
                  {
                    label: "Условия поставки",
                    value: "Самовывоз со склада завода."
                  },
                {
                  label: "Документы",
                  value:
                      "ТТН, счёт-фактура при работе с НДС, фитосанитарный сертификат при необходимости."
                },
                {
                  label: "Претензии",
                  value: "Претензии по качеству принимаются до погрузки партии."
                },
                {
                  label: "Формат работы",
                  value: product.commercialNotes.join(" ")
                }
                ]}
              />
            </div>
          </Container>
        </section>

        <section className="section-space border-y border-ink/8 bg-paper/70">
          <Container>
            <SectionHeading
              eyebrow="Технические блоки"
              title="Размеры, упаковка, погрузка и условия заказа поданы как рабочая B2B-информация."
              description="Страница товара должна отвечать на коммерческий запрос, а не быть тонкой карточкой. Поэтому здесь есть спецификация, сценарии применения, условия отгрузки и заметка по нестандарту."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <Surface className="p-6 sm:p-7">
                <h2 className="type-label">Размерный ряд</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
                  <p>
                    <span className="font-semibold text-ink">Толщина:</span>{" "}
                    {product.thicknesses.join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Ширина:</span>{" "}
                    {product.widths.join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Длина:</span>{" "}
                    {product.lengths.join(", ")}
                  </p>
                  {product.dimensionsNote ? <p>{product.dimensionsNote}</p> : null}
                </div>
              </Surface>

              <Surface className="p-6 sm:p-7">
                <h2 className="type-label">Применение</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                  {product.useCases.map((useCase) => (
                    <li key={useCase}>
                      <span className="font-semibold text-ink">•</span> {useCase}
                    </li>
                  ))}
                </ul>
              </Surface>

              <Surface className="p-6 sm:p-7">
                <h2 className="type-label">Упаковка и загрузка</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                  <div>
                    <h3 className="font-semibold text-ink">Упаковка</h3>
                    <ul className="mt-2 space-y-2">
                      {product.packaging.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Погрузка</h3>
                    <ul className="mt-2 space-y-2">
                      {product.loading.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Surface>

              <Surface className="p-6 sm:p-7">
                <h2 className="type-label">Нестандарт и заказ</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
                  <p>{product.customOrderNote}</p>
                  <p>
                    Для заводского расчёта полезно сразу указать объём, требуемое
                    сечение, длину партии и желаемый формат отгрузки.
                  </p>
                </div>
              </Surface>
            </div>
          </Container>
        </section>
      </article>

      <InternalLinksSection
        description="Эта перелинковка помогает товарной странице не оставаться изолированной: пользователю проще двигаться по воронке, а поисковику — понимать коммерческий контекст."
        items={[
          {
            title: category.name,
            description: "Вернуться в категорию и сравнить другие размеры и позиции.",
            href: `/catalog/${category.slug}`
          },
          {
            title: "Каталог продукции",
            description: "Открыть все категории и перейти к соседним направлениям.",
            href: "/catalog"
          },
          {
            title: "Производство",
            description: "Посмотреть станочный парк, сушильные мощности и контроль качества.",
            href: "/production"
          },
          {
            title: "Профиль по чертежу",
            description: "Если нужен нестандартный размер или геометрия, перейти к отдельному расчёту.",
            href: "/custom-profile"
          }
        ]}
        title="Связанные страницы для усиления коммерческого сценария."
      />

      <section className="section-space">
        <Container>
          <InquiryPanel
            description="Карточка продукта завершает пользователя не на «узнать подробнее», а на прямом B2B-действии: запрос цены, КП или отправка технического задания."
            title={`Отправьте оптовый запрос по позиции «${product.name}».`}
          />
        </Container>
      </section>
    </>
  );
}
