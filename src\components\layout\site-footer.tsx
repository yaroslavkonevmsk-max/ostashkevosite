import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const productLinks = [
  { label: "Планкен и строганная доска", href: "/catalog/planken" },
  { label: "Имитация бруса", href: "/catalog/imitation-timber" },
  { label: "Доска пола", href: "/catalog/floor-board" },
  { label: "Профиль по чертежу", href: "/catalog/custom-profile" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(8,17,14,1),rgba(11,22,17,1))] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div className="max-w-xl space-y-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              Производство и поставка
            </p>
            <h2 className="font-serif text-3xl leading-tight tracking-heading sm:text-4xl">
              Сухая строганная продукция из хвои для стабильных B2B-поставок.
            </h2>
            <p className="text-sm leading-7 text-white/68 sm:text-base">
              Работаем под дилеров, строительные компании, подрядчиков и производственные
              предприятия: стандартные профили, выпуск по чертежу, заводская упаковка и
              понятные условия самовывоза.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
              Продукция
            </p>
            <ul className="space-y-3 text-sm text-white/78">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
              Контакты
            </p>
            <div className="space-y-3 text-sm text-white/78">
              <a
                className="block transition hover:text-white"
                href={`tel:${siteConfig.phoneHref}`}
              >
                {siteConfig.phone}
              </a>
              <a className="block transition hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <a
                className="block transition hover:text-white"
                href={siteConfig.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link className="transition hover:text-white/75" href="/privacy-policy">
              Политика конфиденциальности
            </Link>
            <Link className="transition hover:text-white/75" href="/terms-processing">
              Обработка персональных данных
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
