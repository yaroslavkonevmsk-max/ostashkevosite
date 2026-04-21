import type { Metadata } from "next";

import { ContactMethodsPanel } from "@/components/contact/contact-methods-panel";
import { LeadPageLayout } from "@/components/contact/lead-page-layout";
import { RequestPriceForm } from "@/components/forms/request-price-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Запросить прайс на строганную продукцию",
  description:
    "Запрос прайса на стандартные профили строганной продукции из хвои для B2B-заказчиков: планкен, имитация бруса, доска пола и другие позиции завода.",
  path: "/request-price",
  keywords: [
    "запросить прайс пиломатериалы",
    "прайс на строганную продукцию",
    "прайс планкен оптом",
    "прайс доска пола оптом"
  ]
});

export default function RequestPricePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Запросить прайс", path: "/request-price" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Запросить прайс" }]} />

      <LeadPageLayout
        aside={
          <>
            <Surface className="p-8 sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Запрос прайса"
                title="Запросите актуальный прайс на стандартные профили завода."
                description="Чтобы получить рабочий ориентир по цене быстрее, укажите тип продукции, примерный объём и желаемый формат отгрузки. Для нестандартных профилей лучше сразу переходить к расчёту по чертежу."
              />

              <div className="mt-8 rounded-[1.35rem] border border-ink/8 bg-white/72 px-5 py-5">
                <p className="text-sm leading-6 text-muted">
                  Типичная слабость прайс-страниц — они обрываются на одном email и
                  не помогают пользователю выбрать дальнейший сценарий. Здесь рядом с
                  формой остаются быстрые каналы связи и понятный B2B-контекст.
                </p>
              </div>
            </Surface>

            <ContactMethodsPanel
              description="Если задача срочная, используйте быстрые каналы связи. Если нужен письменный ориентир по цене, лучше оставить форму справа."
              title="Каналы связи по прайсу"
            />
          </>
        }
        form={<RequestPriceForm />}
      />

      <InternalLinksSection
        description="Страница прайса должна вести не только к форме, но и к коммерчески полезным страницам, которые помогают уточнить запрос и усилить намерение."
        items={[
          {
            title: "Каталог продукции",
            description: "Выбрать категорию и посмотреть типовые размеры перед запросом цены.",
            href: "/catalog"
          },
          {
            title: "Производство",
            description: "Проверить сушку, оборудование, упаковку и готовность к отгрузке.",
            href: "/production"
          },
          {
            title: "Контакты",
            description: "Перейти к общей точке входа с оптовой формой и обратным звонком.",
            href: "/contacts"
          },
          {
            title: "Профиль по чертежу",
            description: "Если позиция нестандартная, перейти к отдельному расчёту по ТЗ.",
            href: "/custom-profile"
          }
        ]}
        title="Смежные разделы для запроса прайса."
      />
    </>
  );
}
