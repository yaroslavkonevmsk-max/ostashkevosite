import { absoluteUrl } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { Product, ProductCategory } from "@/data/catalog";

type BreadcrumbItem = {
  name: string;
  path: string;
};

function cleanPrice(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}

function availabilityUrl(value: string) {
  if (value.toLowerCase().includes("под заказ")) {
    return "https://schema.org/PreOrder";
  }

  return "https://schema.org/InStock";
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: siteConfig.region,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "sales",
        areaServed: "RU",
        availableLanguage: ["ru"]
      }
    ]
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: "ru-RU"
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildProductJsonLd(product: Product, category: ProductCategory) {
  const price = cleanPrice(product.priceFrom);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    category: category.name,
    material: "Хвоя",
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "B2B"
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Влажность",
        value: product.moisture
      },
      {
        "@type": "PropertyValue",
        name: "Сорт",
        value: product.grade
      },
      {
        "@type": "PropertyValue",
        name: "Толщина",
        value: product.thicknesses.join(", ")
      },
      {
        "@type": "PropertyValue",
        name: "Ширина",
        value: product.widths.join(", ")
      },
      {
        "@type": "PropertyValue",
        name: "Длина",
        value: product.lengths.join(", ")
      }
    ],
    offers: price
      ? {
          "@type": "Offer",
          url: absoluteUrl(`/catalog/${product.category}/${product.slug}`),
          priceCurrency: "RUB",
          price,
          availability: availabilityUrl(product.availability),
          seller: {
            "@type": "Organization",
            name: siteConfig.name
          }
        }
      : undefined
  };
}
