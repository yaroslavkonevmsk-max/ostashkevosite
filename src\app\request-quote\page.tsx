import type { Metadata } from "next";

import { ContactMethodsPanel } from "@/components/contact/contact-methods-panel";
import { LeadPageLayout } from "@/components/contact/lead-page-layout";
import { WholesaleInquiryForm } from "@/components/forms/wholesale-inquiry-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Получить коммерческое предложение",
  description:
    "Получение коммерческого предложения на оптовую поставку строганной продукции из хвои от производителя: объём, размеры, формат отгрузки и нестандартный профиль.",
  path: "/request-quote",
  keywords: [
    "получить коммерческое предложение пиломатериалы",
    "кп на строганную продукцию",
    "оптовый запрос пиломатериалы",
    "запрос цены производитель древесины"
  ]
});

export default function RequestQuotePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Получить КП", path: "/request-quote" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Получить КП" }]} />

      <LeadPageLayout
        aside={
          <>
            <Surface tone="dark" className="p-8 sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Коммерческое предложение"
                title="Получите КП под объём, спецификацию и формат отгрузки."
                description="Для корректного расчёта менеджеру нужны тип продукции, ориентировочный объём, размер или профиль и комментарий по поставке. Чем точнее исходные данные, тем быстрее вы получите рабочее предложение."
                tone="inverted"
              />

              <div className="mt-8 space-y-4 text-sm leading-7 text-white/72">
                <p>
                  Для стандартной номенклатуры достаточно указать категорию, объём и
                  желаемый формат отгрузки. Для нестандартных профилей лучше дополнить
                  запрос размерами или сразу перейти к отправке чертежа.
                </p>
                <p>
                  В слабом UX запрос на КП часто превращается в тупик. Здесь форма,
                  прямые контакты и ссылки на соседние разделы работают как единая
                  коммерческая воронка.
                </p>
              </div>
            </Surface>

            <ContactMethodsPanel
              description="Если запрос срочный, используйте прямые каналы связи. Если задача сложная, оставьте форму, чтобы менеджер видел контекст партии и размеры."
              title="Связь по коммерческому предложению"
              tone="dark"
            />
          </>
        }
        form={<WholesaleInquiryForm />}
      />

      <InternalLinksSection
        description="Заявка на КП особенно хорошо работает в связке с каталогом, производством и разделом нестандартных изделий — это помогает пользователю дойти до более точного запроса."
        items={[
          {
            title: "Каталог продукции",
            description: "Уточнить категорию, размеры и типовую номенклатуру перед запросом КП.",
            href: "/catalog"
          },
          {
            title: "Производство",
            description: "Проверить сушку, упаковку, калибровку и реальные мощности завода.",
            href: "/production"
          },
          {
            title: "Профиль по чертежу",
            description: "Если нужен нестандарт, перейти к отдельной технической странице.",
            href: "/custom-profile"
          },
          {
            title: "Контакты",
            description: "Открыть все формы и быстрые каналы связи отдела продаж.",
            href: "/contacts"
          }
        ]}
        title="Полезные разделы рядом со страницей коммерческого предложения."
      />
    </>
  );
}
