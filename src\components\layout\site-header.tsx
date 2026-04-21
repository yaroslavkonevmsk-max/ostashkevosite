import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

function BrandMark() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_20px_34px_-24px_rgba(8,17,14,0.6)]">
      <span className="font-serif text-lg font-semibold tracking-heading text-white">ЗП</span>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,17,14,0.86)] backdrop-blur-xl">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link className="flex items-center gap-4" href="/">
            <BrandMark />
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/45">
                B2B поставки от завода
              </p>
              <p className="font-serif text-xl tracking-heading text-white">{siteConfig.name}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                className="text-sm font-medium text-white/72 transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <a
              className="text-right text-sm leading-tight text-white/58 transition hover:text-white"
              href={`tel:${siteConfig.phoneHref}`}
            >
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/38">
                Отдел продаж
              </span>
              {siteConfig.phone}
            </a>
            <Button href="/request-quote" size="sm">
              Получить КП
            </Button>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <a
              className="hidden text-sm font-medium text-white sm:inline-flex"
              href={`tel:${siteConfig.phoneHref}`}
            >
              {siteConfig.phone}
            </a>
            <Button href="/request-quote" size="sm">
              КП
            </Button>
            <details className="relative">
              <summary className="flex h-10 min-w-[2.75rem] cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white shadow-[0_14px_24px_-20px_rgba(8,17,14,0.58)] transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal">
                Меню
              </summary>
              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[18rem] rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,14,0.98),rgba(12,24,19,0.96))] p-3 shadow-soft">
                <nav aria-label="Мобильная навигация" className="space-y-1">
                  {siteConfig.navigation.map((item) => (
                    <Link
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-white/78 transition hover:bg-white/6 hover:text-white"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="fade-divider my-2" />
                  <a
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-white/78 transition hover:bg-white/6 hover:text-white"
                    href={`tel:${siteConfig.phoneHref}`}
                  >
                    Позвонить в отдел продаж
                  </a>
                  <a
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-white/78 transition hover:bg-white/6 hover:text-white"
                    href={`mailto:${siteConfig.email}`}
                  >
                    Написать на email
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
