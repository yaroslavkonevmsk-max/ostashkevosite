import type { Metadata } from "next";

import { InquiryPanel } from "@/components/catalog/inquiry-panel";
import { SpecTable } from "@/components/catalog/spec-table";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { Container } from "@/components/ui/container";
import { ProofGrid } from "@/components/ui/proof-grid";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Изготовление профиля по чертежу на заказ",
  description:
    "Изготовление деревянного профиля по чертежу на заказ: расчёт для B2B, ограничения по размерам, логика оснастки, заводская упаковка и самовывоз.",
  path: "/custom-profile",
  keywords: [
    "профиль по чертежу",
    "изготовление профиля на заказ",
    "деревянный профиль по чертежу",
    "нестандартный профиль производитель"
  ]
});

export default function CustomProfilePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Изготовление профиля по чертежу", path: "/custom-profile" }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Изготовление профиля по чертежу" }
        ]}
      />

      <section className="section-space border-b border-ink/8 bg-paper/70">
        <Container>
          <header className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <p className="type-label">Индивидуальный расчёт</p>
              <h1 className="type-h1 max-w-5xl">
                Изготовление нестандартного профиля по чертежу и техническому описанию.
              </h1>
              <p className="type-body-lg max-w-3xl">
                Если типовая номенклатура не закрывает задачу, завод рассчитывает
                профиль по чертежу с учётом ограничений по размерам, оснастке и
                объёму партии. Это отдельный B2B-сценарий, а не дополнение к
                стандартному прайсу.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-1">
              <SpecTable
                title="Ограничения производства"
                rows={[
                  { label: "Толщина", value: "от 18 мм" },
                  { label: "Ширина", value: "до 150 мм" },
                  { label: "Длины", value: "2000 / 3000 / 6000 мм" }
                ]}
              />
            </div>
          </header>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20 lg:pb-20">
        <Container>
          <ProofGrid
            items={[
              {
                title: "Не маскируется под типовой товар",
                description: "Страница честно показывает, что custom-профиль — это отдельный сценарий расчёта."
              },
              {
                title: "Оснастка и переналадка объяснены",
                description: "Это снижает недоверие к цене на небольших партиях и убирает ощущение “скрытых условий”."
              },
              {
                title: "Ограничения названы заранее",
                description: "Толщина, ширина и длины не приходится уточнять вручную на первом касании."
              },
              {
                title: "Переход в продажу не теряется",
                description: "После чтения страницы клиент понимает, что отправить для корректного расчёта."
              }
            ]}
          />
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <SpecTable
              title="Что нужно для расчёта"
              rows={[
                {
                  label: "Чертёж или описание",
                  value: "Сечение, ключевые элементы профиля, требования к лицевой части."
                },
                {
                  label: "Объём",
                  value: "Количество в м³ или в погонных метрах по партии."
                },
                {
                  label: "Длина",
                  value: "2000 / 3000 / 6000 мм или нужный формат из допустимых."
                },
                {
                  label: "Срок",
                  value: "Желаемая дата готовности и формат отгрузки."
                }
              ]}
            />

            <SpecTable
              title="Коммерческая логика"
              rows={[
                {
                  label: "Цена",
                  value: "Рассчитывается индивидуально после получения задания."
                },
                {
                  label: "Оснастка",
                  value:
                    "Для небольших партий стоимость фрез и переналадки влияет на итоговую цену заметнее всего."
                },
                {
                  label: "Упаковка и погрузка",
                  value: "Сохраняется логика заводской упаковки и самовывоза со склада."
                },
                {
                  label: "Документы",
                  value: "Базовый комплект как по стандартной поставке, при необходимости дополняется."
                }
              ]}
            />
          </div>
        </Container>
      </section>

      <InternalLinksSection
        description="Раздел расчёта по чертежу полезно связывать с коммерческими и доверительными страницами, чтобы заказчик мог проверить производителя и перейти к корректному сценарию обращения."
        items={[
          {
            title: "Каталог продукции",
            description: "Если задача всё же закрывается стандартной номенклатурой, перейти в каталог.",
            href: "/catalog"
          },
          {
            title: "Производство",
            description: "Посмотреть оборудование, сушку, калибровку и реальные возможности завода.",
            href: "/production"
          },
          {
            title: "Запросить КП",
            description: "Оставить запрос с объёмом, размерами и техническим комментарием.",
            href: "/request-quote"
          },
          {
            title: "Контакты отдела продаж",
            description: "Выбрать удобный канал связи: форма, звонок, WhatsApp или email.",
            href: "/contacts"
          }
        ]}
        title="Смежные разделы для заказчика с нестандартной задачей."
      />

      <section className="section-space">
        <Container>
          <InquiryPanel
            description="Чем подробнее будет исходное техническое задание, тем быстрее можно выйти на корректную цену, срок и формат поставки."
            title="Отправьте чертёж или подробное описание профиля на расчёт."
          />
        </Container>
      </section>
    </>
  );
}
