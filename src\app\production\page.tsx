import type { Metadata } from "next";

import { InquiryPanel } from "@/components/catalog/inquiry-panel";
import { SpecTable } from "@/components/catalog/spec-table";
import { FactoryPhotoGrid } from "@/components/media/factory-photo-grid";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { ProofGrid } from "@/components/ui/proof-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

const equipmentRows = [
  { label: "Пиление", value: "2 рамы Wood-Mizer для первичной переработки." },
  { label: "Продольный распил", value: "Многопильный станок Krafter." },
  { label: "Переработка горбыля", value: "Горбыльный станок Krafter." },
  { label: "Сушка", value: "Сушилки Luka: 2 × 75 м³ и 2 × 30 м³." },
  { label: "Строгание и профилирование", value: "2 четырёхсторонних станка Beaver." },
  {
    label: "Доводка",
    value: "Торцовочные, рейсмус, шлифовальные и фуговальные станки."
  },
  { label: "Погрузка", value: "Погрузчик и стол для загрузки контейнеров." }
] as const;

const processRows = [
  {
    label: "Этап 1",
    value: "Распил и подготовка заготовки под дальнейшую сушку и строгание."
  },
  {
    label: "Этап 2",
    value: "Камерная сушка до рабочей влажности 10–12%."
  },
  {
    label: "Этап 3",
    value: "Калибрование, строгание и профилирование по стандартной или индивидуальной задаче."
  },
  {
    label: "Этап 4",
    value: "Упаковка, формирование пакета и подготовка к самовывозу или загрузке."
  }
] as const;

const trustBlocks = [
  {
    eyebrow: "Полный цикл",
    title: "Не перепродаём склад, а производим партию внутри одной цепочки.",
    description:
      "Сайт фиксирует производственную логику завода: распил, сушка, калибрование, строгание, профилирование, упаковка и погрузка.",
    icon: "01"
  },
  {
    eyebrow: "Сушка",
    title: "Камерная сушка — базовая точка доверия для сухой строганной продукции.",
    description:
      "Рабочая влажность 10–12% прямо влияет на стабильность геометрии и пригодность продукции для фасадных, отделочных и напольных решений.",
    icon: "02"
  },
  {
    eyebrow: "Контроль",
    title: "Калибровка после замены фрез — важный аргумент для повторяемых партий.",
    description:
      "Именно этот процесс показывает, насколько завод умеет держать размер технологически, а не декларативно.",
    icon: "03"
  },
  {
    eyebrow: "Логистика",
    title: "Упаковка и погрузка встроены в производственный контур.",
    description:
      "Подрядчику и дилеру важно получить не только продукцию, но и аккуратно собранную партию, готовую к вывозу или контейнерной загрузке.",
    icon: "04"
  }
] as const;

const productionPhotoItems = [
  {
    title: "Строгание и профилирование",
    note: "Крупные кадры прохода партии через основные операции показывают реальную технологическую дисциплину, а не общий рекламный фон."
  },
  {
    title: "Сушильный участок",
    note: "Фото камер и партий после цикла сушки помогают подтвердить, что завод работает именно с сухой продукцией, а не декларирует это."
  },
  {
    title: "Склад и упаковка",
    note: "Партии, прокладки, плёнка и стяжка дают закупщику представление о состоянии продукции до погрузки."
  },
  {
    title: "Погрузка транспорта",
    note: "Фуры, контейнеры и работа погрузчика добавляют доверие к логистическому контуру поставки."
  }
] as const;

export const metadata: Metadata = buildMetadata({
  title: "Производство строганной продукции",
  description:
    "Производственная база завода: оборудование, сушильные мощности, контроль качества, калибровка, упаковка, погрузка и документы для B2B-поставок.",
  path: "/production",
  keywords: [
    "производство строганной продукции",
    "завод строганной доски",
    "камерная сушка древесины",
    "строганная продукция производитель"
  ]
});

export default function ProductionPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Производство", path: "/production" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Производство" }
        ]}
      />

      <section className="section-space border-b border-ink/8 bg-paper/70">
        <Container>
          <header className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <p className="type-label">Производство</p>
              <h1 className="type-h1 max-w-5xl">
                Реальная производственная база для стабильных B2B-поставок, а не витрина посредника.
              </h1>
              <p className="type-body-lg max-w-3xl">
                Эта страница подтверждает заводскую природу бизнеса: показывает
                оборудование, сушильные мощности, контроль качества, упаковку,
                погрузку и документооборот.
              </p>
            </div>

            <SpecTable
              title="Краткая сводка"
              rows={[
                {
                  label: "Полный цикл",
                  value: "распил → сушка → строгание → профилирование → упаковка → погрузка"
                },
                {
                  label: "Сушильная база",
                  value: "2 × 75 м³ и 2 × 30 м³"
                },
                {
                  label: "Погрузка",
                  value: "фуры и 40-футовые контейнеры"
                }
              ]}
            />
          </header>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-5 lg:grid-cols-4">
            {trustBlocks.map((item) => (
              <FeatureCard
                description={item.description}
                eyebrow={item.eyebrow}
                icon={item.icon}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space border-y border-ink/8 bg-paper/70">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <SpecTable title="Производственное оборудование" rows={[...equipmentRows]} />
            <SpecTable title="Цепочка выпуска" rows={[...processRows]} />
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20 lg:pb-20">
        <Container>
          <ProofGrid
            items={[
              {
                title: "Камерная сушка подтверждена",
                description: "Сушильные мощности видны отдельно, а не спрятаны внутри длинного описания."
              },
              {
                title: "Контроль размера объяснён",
                description: "Калибровка и стабильность геометрии поданы как часть процесса, а не лозунг."
              },
              {
                title: "Погрузка встроена в контур",
                description: "Страница показывает готовность работать с фурами и контейнерами."
              },
              {
                title: "Есть база для реальных фото",
                description: "Медиа-блок уже не выглядит как временная заглушка и готов к наполнению."
              }
            ]}
          />
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Фотоматериалы производства"
            title="Фотоблок должен подтверждать масштаб, порядок и реальную производственную дисциплину."
            description="Раньше здесь не хватало самостоятельного медиа-слоя. Теперь секция собрана как переиспользуемый компонент с понятной структурой, подписями и готовой alt-логикой."
          />
          <FactoryPhotoGrid items={[...productionPhotoItems]} metaLabel="Производство" />
        </Container>
      </section>

      <InternalLinksSection
        description="Производственная страница особенно важна для внутренних переходов: она усиливает доверие к каталогу, товарным страницам и форме запроса."
        items={[
          {
            title: "Каталог продукции",
            description: "Перейти к стандартной номенклатуре и размерным рядам.",
            href: "/catalog"
          },
          {
            title: "Профиль по чертежу",
            description: "Отдельный раздел для нестандартных изделий и расчёта по ТЗ.",
            href: "/custom-profile"
          },
          {
            title: "Контакты отдела продаж",
            description: "Форма запроса, прайс, обратный звонок и быстрые каналы связи.",
            href: "/contacts"
          },
          {
            title: "Запросить КП",
            description: "Сразу отправить заявку на коммерческое предложение по партии.",
            href: "/request-quote"
          }
        ]}
        title="Разделы, которые логично связать со страницей производства."
      />

      <section className="section-space">
        <Container>
          <InquiryPanel
            description="После страницы производства у клиента должен остаться один вывод: завод способен выпускать, контролировать, упаковывать и отгружать партии как полноценный B2B-поставщик."
            title="Запросите коммерческое предложение напрямую у производителя."
          />
        </Container>
      </section>
    </>
  );
}
