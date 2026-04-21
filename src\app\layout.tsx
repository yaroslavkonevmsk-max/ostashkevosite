import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/structured-data";

import "./globals.css";

const fontSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap"
});

const fontSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  ...buildMetadata({
    title: "Завод строганной продукции | B2B-поставки от производителя",
    description: siteConfig.description,
    path: "/",
    keywords: [
      "строганная продукция оптом",
      "производитель строганной продукции",
      "сухая строганная доска оптом",
      "планкен оптом",
      "имитация бруса оптом",
      "доска пола оптом"
    ]
  }),
  title: {
    default: "Завод строганной продукции | B2B-поставки от производителя",
    template: `%s | ${siteConfig.name}`
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${fontSans.variable} ${fontSerif.variable}`} lang="ru">
      <body className="min-h-screen font-sans">
        <JsonLd data={buildOrganizationJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
