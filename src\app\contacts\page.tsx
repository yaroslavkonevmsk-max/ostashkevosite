import type { Metadata } from "next";

import { ContactMethodsPanel } from "@/components/contact/contact-methods-panel";
import { RequestCallbackForm } from "@/components/forms/request-callback-form";
import { WholesaleInquiryForm } from "@/components/forms/wholesale-inquiry-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { leadScenarioHints } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Контакты отдела продаж",
  description:
    "Контакты отдела продаж, формы B2B-запросов, обратный звонок и быстрые каналы связи по поставке строганной продукции от завода.",
  path: "/contacts",
  keywords: [
    "контакты производителя пиломатериалов",
    "запрос КП строганная продукция",
    "отдел продаж завода древесины",
    "прайс на строганную продукцию"
  ]
});

export default function ContactsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Контакты", path: "/contacts" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />

      <section className="section-space border-b border-ink/8 bg-paper/70">
        <Container>
          <header className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <p className="type-label">Контакты</p>
              <h1 className="type-h1 max-w-5xl">
                Отдел продаж для B2B-запросов, прайсов, КП и расчёта профиля по чертежу.
              </h1>
              <p className="type-body-lg max-w-3xl">
                Контактная страница построена как рабочая точка входа для закупщиков,
                дилеров, подрядчиков и производственных компаний.
              </p>
            </div>

            <ContactMethodsPanel
              description="Вместо одного сухого блока контактов страница сразу даёт несколько сценариев связи: форма, звонок, WhatsApp и email."
              title="Быстрые контакты"
            />
          </header>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <WholesaleInquiryForm />
            <div className="grid gap-6">
              <RequestCallbackForm />
              <Surface className="p-8 sm:p-10">
                <SectionHeading
                  eyebrow="Какой канал выбрать"
                  title="Сценарии обращения для разных задач."
                  description="Контактный UX построен так, чтобы клиент быстро выбрал правильный тип запроса и не тратил время на лишние переписки."
                />
                <div className="mt-8 space-y-4 text-sm leading-7 text-muted">
                  {leadScenarioHints.map((item) => (
                    <p key={item.title}>
                      <span className="font-semibold text-ink">{item.title}:</span>{" "}
                      {item.description}
                    </p>
                  ))}
                </div>
              </Surface>
            </div>
          </div>
        </Container>
      </section>

      <InternalLinksSection
        description="Контакты не должны быть тупиковой страницей. Коммерчески полезнее дать быстрый переход в каталог, производство и раздел расчёта по чертежу."
        items={[
          {
            title: "Каталог продукции",
            description: "Открыть категории и товарные позиции перед отправкой запроса.",
            href: "/catalog"
          },
          {
            title: "Производство",
            description: "Проверить оборудование, сушильные мощности и упаковку завода.",
            href: "/production"
          },
          {
            title: "Запросить прайс",
            description: "Перейти к короткой форме для стандартной номенклатуры.",
            href: "/request-price"
          },
          {
            title: "Профиль по чертежу",
            description: "Если нужен нестандартный профиль, перейти к отдельному сценарию расчёта.",
            href: "/custom-profile"
          }
        ]}
        title="Разделы, которые логично связать с контактной страницей."
      />
    </>
  );
}
