import type { Metadata } from "next";

import { ContactMethodsPanel } from "@/components/contact/contact-methods-panel";
import { LeadPageLayout } from "@/components/contact/lead-page-layout";
import { RequestCallbackForm } from "@/components/forms/request-callback-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { InternalLinksSection } from "@/components/seo/internal-links";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Заказать обратный звонок",
  description:
    "Запрос обратного звонка по B2B-поставке строганной продукции: обсудить объём, размеры, сроки отгрузки и нестандартный профиль с менеджером завода.",
  path: "/request-callback",
  keywords: [
    "обратный звонок производитель пиломатериалов",
    "обсудить поставку пиломатериалов",
    "связаться с отделом продаж завода"
  ]
});

export default function RequestCallbackPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Главная", path: "/" },
          { name: "Обратный звонок", path: "/request-callback" }
        ])}
      />
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Обратный звонок" }]} />

      <LeadPageLayout
        aside={
          <>
            <Surface className="p-8 sm:p-10 lg:p-12">
              <SectionHeading
                eyebrow="Обратный звонок"
                title="Оставьте контакты, и менеджер свяжется по вашему B2B-запросу."
                description="Если удобнее обсудить объём, размеры, условия отгрузки или нестандартный профиль голосом, используйте форму обратного звонка. Чем точнее комментарий, тем предметнее будет разговор."
              />

              <div className="mt-8 rounded-[1.35rem] border border-ink/8 bg-white/72 px-5 py-5">
                <p className="text-sm leading-6 text-muted">
                  Слабость большинства callback-страниц в том, что они собирают только
                  номер телефона. Здесь менеджер получает ещё и базовый контекст:
                  продукт, объём, размеры и комментарий по задаче.
                </p>
              </div>
            </Surface>

            <ContactMethodsPanel
              description="Для срочных вопросов можно не ждать обратного звонка и использовать прямые каналы связи."
              title="Если нужно быстрее"
            />
          </>
        }
        form={<RequestCallbackForm />}
      />

      <InternalLinksSection
        description="Если пользователь пока не готов к звонку, ему полезно дать быстрые переходы в каталог, прайс и разделы с доказательством производственных возможностей."
        items={[
          {
            title: "Каталог продукции",
            description: "Посмотреть категории и подготовить более точный предмет звонка.",
            href: "/catalog"
          },
          {
            title: "Запросить прайс",
            description: "Если удобнее получить ориентир письменно, перейти к форме прайса.",
            href: "/request-price"
          },
          {
            title: "Производство",
            description: "Проверить оборудование, сушку и упаковку перед разговором.",
            href: "/production"
          },
          {
            title: "Контакты",
            description: "Открыть все каналы связи и формы B2B-обращения.",
            href: "/contacts"
          }
        ]}
        title="Разделы, связанные со сценарием обратного звонка."
      />
    </>
  );
}
